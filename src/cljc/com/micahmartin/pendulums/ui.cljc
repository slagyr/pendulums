(ns com.micahmartin.pendulums.ui)

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
   :trail-duration default-trail-duration})

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
