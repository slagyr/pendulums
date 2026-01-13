(ns com.micahmartin.pendulums.ui
  (:require [com.micahmartin.pendulums.math :as math]
            [com.micahmartin.pendulums.engine :as engine]))

;; -----------------------------------------------------------------------------
;; Simulation Constants
;; -----------------------------------------------------------------------------

(def dt 0.016)                    ; Simulation time step (~60 fps)
(def scale 100.0)                 ; Pixels per meter

;; -----------------------------------------------------------------------------
;; Canvas / Viewport Constants
;; -----------------------------------------------------------------------------

(def default-canvas-width 800)
(def default-canvas-height 600)
(def pivot-y-offset 150.0)        ; Pivot Y position from top

;; -----------------------------------------------------------------------------
;; Drawing Constants
;; -----------------------------------------------------------------------------

(def bob-base-radius 8.0)         ; Base bob radius in pixels
(def bob-radius-per-mass 4.0)     ; Additional radius per unit mass
(def arm-stroke-width 3.0)        ; Arm line width
(def bob-outline-width 2.0)       ; Bob outline stroke width
(def pivot-radius 6.0)            ; Pivot point radius
(def trail-dot-radius 2.0)        ; Trail dot radius

(defn bob-radius
  "Calculates bob radius based on mass."
  [mass]
  (+ bob-base-radius (* bob-radius-per-mass mass)))

;; -----------------------------------------------------------------------------
;; Color Definitions (as hex integers)
;; -----------------------------------------------------------------------------

;; Pendulum bob colors
(def pendulum-colors
  [0xef4444   ; red
   0x3b82f6   ; blue
   0x22c55e   ; green
   0xf97316   ; orange
   0xa855f7   ; purple
   0xeab308   ; yellow
   0x06b6d4   ; cyan
   0xec4899   ; pink
   0x6366f1   ; indigo
   0x84cc16]) ; lime

;; UI element colors
(def arm-color 0x525252)
(def bob-outline-color 0xffffff)
(def pivot-color 0x737373)
(def bg-color 0x121212)
(def btn-bg-color 0x404040)
(def btn-fg-color 0xffffff)
(def text-color 0xc8c8c8)

;; -----------------------------------------------------------------------------
;; Color Conversion Utilities
;; -----------------------------------------------------------------------------

(defn hex->css
  "Converts a hex integer to a CSS color string."
  [hex]
  #?(:clj (format "#%06x" hex)
     :cljs (str "#" (.padStart (.toString hex 16) 6 "0"))))

(defn hex->rgb
  "Converts a hex integer to [r g b] vector."
  [hex]
  [(bit-and (bit-shift-right hex 16) 0xff)
   (bit-and (bit-shift-right hex 8) 0xff)
   (bit-and hex 0xff)])

;; -----------------------------------------------------------------------------
;; Angle Display Constants
;; -----------------------------------------------------------------------------

(def angle-display-padding 10)
(def angle-display-line-height 20)
(def angle-display-row-width 180)

;; -----------------------------------------------------------------------------
;; UI State Defaults
;; -----------------------------------------------------------------------------

(def default-zoom 1.0)
(def default-pan [0.0 0.0])
(def default-trail-duration 3.0)

;; Initial pendulum configurations
(def initial-pendulums
  [{:theta 0.8 :length 1.0}
   {:theta 0.5 :length 1.0}])

;; Configuration for newly added pendulums
(def new-pendulum-config {:theta 0.3 :length 1.0})

;; Default state map (platform-specific keys should be merged in)
(def default-state
  {:running false
   :selected nil
   :dragging false
   :zoom default-zoom
   :pan default-pan
   :panning false
   :pan-start nil
   :trails []
   :trail-duration default-trail-duration
   :system (engine/make-system
             (mapv engine/make-pendulum initial-pendulums))})

;; Pre-computed CSS color strings for convenience
(def pendulum-colors-css (mapv hex->css pendulum-colors))
(def arm-color-css (hex->css arm-color))
(def bob-outline-color-css (hex->css bob-outline-color))
(def pivot-color-css (hex->css pivot-color))
(def bg-color-css (hex->css bg-color))
(def btn-bg-color-css (hex->css btn-bg-color))
(def btn-fg-color-css (hex->css btn-fg-color))
(def text-color-css (hex->css text-color))

;; -----------------------------------------------------------------------------
;; Coordinate Transformations
;; -----------------------------------------------------------------------------

(defn get-pivot
  "Returns [pivot-x pivot-y] based on canvas width."
  [canvas-width]
  [(/ canvas-width 2) pivot-y-offset])

(defn world->screen
  "Converts world (physics) coordinates to screen coordinates."
  [[wx wy] zoom [pan-x pan-y] canvas-width]
  (let [[pivot-x pivot-y] (get-pivot canvas-width)]
    [(+ (* (+ pivot-x (* wx scale)) zoom) pan-x)
     (+ (* (- pivot-y (* wy scale)) zoom) pan-y)]))

(defn screen->world
  "Converts screen coordinates to world (physics) coordinates."
  [[sx sy] zoom [pan-x pan-y] canvas-width]
  (let [[pivot-x pivot-y] (get-pivot canvas-width)
        unzoomed-x (/ (- sx pan-x) zoom)
        unzoomed-y (/ (- sy pan-y) zoom)]
    [(/ (- unzoomed-x pivot-x) scale)
     (/ (- pivot-y unzoomed-y) scale)]))

(defn pivot-screen-pos
  "Returns the screen position of the main pivot point."
  [zoom [pan-x pan-y] canvas-width]
  (let [[pivot-x pivot-y] (get-pivot canvas-width)]
    [(+ (* pivot-x zoom) pan-x)
     (+ (* pivot-y zoom) pan-y)]))

;; -----------------------------------------------------------------------------
;; Bob Position & Hit Testing
;; -----------------------------------------------------------------------------

(defn bob-screen-positions
  "Returns screen coordinates of all bobs."
  [system zoom pan canvas-width]
  (mapv (fn [[x y]]
          (world->screen [x y] zoom pan canvas-width))
        (engine/bob-positions system)))

(defn pivot-for-pendulum
  "Returns the pivot point (screen coords) for pendulum at idx.
   For idx 0, it's the main pivot. For idx > 0, it's the previous bob."
  [system idx zoom pan canvas-width]
  (if (zero? idx)
    (pivot-screen-pos zoom pan canvas-width)
    (let [positions (bob-screen-positions system zoom pan canvas-width)]
      (nth positions (dec idx)))))

(defn hit-test-bob
  "Returns index of bob at (mx, my) or nil if none hit."
  [system mx my zoom pan canvas-width]
  (let [positions (bob-screen-positions system zoom pan canvas-width)
        pendulums (:pendulums system)]
    (first
      (keep-indexed
        (fn [idx [bx by]]
          (let [{:keys [mass]} (nth pendulums idx)
                base-radius (bob-radius mass)
                radius (* base-radius zoom)
                dx (- mx bx)
                dy (- my by)
                dist (math/sqrt (+ (* dx dx) (* dy dy)))]
            (when (<= dist (+ radius 5))  ; 5px extra for easier clicking
              idx)))
        positions))))

;; -----------------------------------------------------------------------------
;; Angle Calculations
;; -----------------------------------------------------------------------------

(defn angle-from-pivot
  "Calculates the angle from pivot to mouse position.
   Returns angle in radians where 0 = hanging down, positive = clockwise."
  [[px py] [mx my]]
  (let [dx (- mx px)
        dy (- my py)]  ; positive dy = below pivot (in screen coords)
    (math/atan2 dx dy)))

(defn normalize-angle
  "Converts physics theta to display angle where 0°=up, 90°=right, 180°=down, 270°=left.
   Like a compass heading where angles increase clockwise."
  [theta]
  (let [;; Negate theta because physics convention is counter-clockwise, compass is clockwise
        degrees (* (- theta) (/ 180 math/PI))
        ;; Add 180 so that theta=0 (down) becomes 180°, theta=π (up) becomes 0°
        shifted (+ degrees 180)
        ;; Normalize to 0-360 range
        normalized (mod shifted 360)]
    (if (neg? normalized)
      (+ normalized 360)
      normalized)))

(defn display-angle->theta
  "Converts display angle (0°=up, 90°=right, 180°=down, 270°=left) back to physics theta."
  [display-angle]
  ;; Reverse of normalize-angle: negate to convert from clockwise to counter-clockwise
  (* (- 180 display-angle) (/ math/PI 180)))

;; -----------------------------------------------------------------------------
;; State Transformations
;; -----------------------------------------------------------------------------

(defn add-pendulum
  "Adds a new pendulum to the system with default configuration. Clears trails."
  [state]
  (-> state
      (update :system engine/add-pendulum (engine/make-pendulum new-pendulum-config))
      (assoc :trails [])))
