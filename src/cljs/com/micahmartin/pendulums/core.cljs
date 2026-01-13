(ns com.micahmartin.pendulums.core
  "Web UI entry point using Reagent."
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [com.micahmartin.pendulums.engine :as engine]))

;; -----------------------------------------------------------------------------
;; Constants
;; -----------------------------------------------------------------------------

(def default-canvas-width 800)
(def default-canvas-height 600)
(def scale 100)  ; pixels per meter
(def pivot-y-offset 150)  ; pivot is 150px from top
(def dt 0.016)  ; ~60 fps simulation step

;; Colors for pendulum chain (warm sunset gradient)
(def colors ["#ef4444" "#f97316" "#eab308" "#84cc16" "#22c55e"])

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
;; Application State
;; -----------------------------------------------------------------------------

(defonce app-state
  (r/atom {:system (engine/make-system
                     [(engine/make-pendulum {:theta 0.8 :length 1.5})
                      (engine/make-pendulum {:theta 0.5 :length 1.2})])
           :running false
           :animation-id nil
           :selected nil      ; index of selected pendulum (nil = none)
           :dragging false    ; true when dragging to adjust angle
           :editing-angle nil ; index of pendulum being edited (nil = none)
           :angle-input ""
           :trails []         ; Vector of trails, one per pendulum. Each trail is a list of {:pos [x y] :time ms}
           :trail-duration 3.0
           :zoom 1.0          ; Viewport zoom level
           :pan [0.0 0.0]     ; Viewport pan offset [x y]
           :panning false     ; true when panning viewport
           :pan-start nil
           :canvas-width default-canvas-width
           :canvas-height default-canvas-height}))

;; -----------------------------------------------------------------------------
;; Simulation Control
;; -----------------------------------------------------------------------------

(defn step-simulation! []
  (let [now (.now js/Date)]
    (swap! app-state
           (fn [{:keys [system trail-duration] :as state}]
             (let [new-system (engine/step system dt)
                   positions (engine/bob-positions new-system)
                   cutoff (- now (* trail-duration 1000))
                   ;; Add new positions to trails and prune old entries
                   new-trails (vec (map-indexed
                                     (fn [idx [x y]]
                                       (let [old-trail (get (:trails state) idx [])
                                             pruned (filterv #(> (:time %) cutoff) old-trail)]
                                         (conj pruned {:pos [x y] :time now})))
                                     positions))]
               (assoc state :system new-system :trails new-trails))))))

(defn animation-loop []
  (when (:running @app-state)
    (step-simulation!)
    (let [id (js/requestAnimationFrame animation-loop)]
      (swap! app-state assoc :animation-id id))))

(defn start-simulation! []
  (when-not (:running @app-state)
    (swap! app-state assoc :running true :selected nil :dragging false)
    (animation-loop)))

(defn stop-simulation! []
  (when-let [id (:animation-id @app-state)]
    (js/cancelAnimationFrame id))
  (swap! app-state assoc :running false :animation-id nil))

(defn toggle-simulation! []
  (if (:running @app-state)
    (stop-simulation!)
    (start-simulation!)))

(defn reset-simulation! []
  (stop-simulation!)
  (swap! app-state (fn [state]
                     (assoc state
                            :system (engine/make-system
                                      [(engine/make-pendulum {:theta 0.8 :length 1.5})
                                       (engine/make-pendulum {:theta 0.5 :length 1.2})])
                            :selected nil
                            :dragging false
                            :trails []
                            :zoom 1.0
                            :pan [0.0 0.0]
                            :panning false
                            :pan-start nil))))

(defn add-pendulum! []
  (swap! app-state (fn [state]
                     (-> state
                         (update :system engine/add-pendulum (engine/make-pendulum {:theta 0.3 :length 1.0}))
                         (assoc :trails [])))))

(defn remove-pendulum! []
  (swap! app-state (fn [state]
                     (-> state
                         (update :system engine/remove-pendulum)
                         (assoc :trails [])))))

(defn center-view!
  "Resets the view to fit all pendulums centered in the viewport."
  []
  (let [{:keys [system canvas-width canvas-height]} @app-state
        [pivot-x pivot-y] (get-pivot canvas-width)
        pendulums (:pendulums system)
        ;; Calculate max extent (sum of all pendulum lengths)
        max-extent (if (seq pendulums)
                     (reduce + 0.0 (map :length pendulums))
                     1.5)
        ;; Convert to pixels at zoom 1.0
        extent-pixels (* max-extent scale)
        ;; The pendulum can swing in all directions, so fit a circle of radius extent-pixels
        ;; with padding for comfortable viewing
        padding 120.0
        required-size (+ (* 2.0 extent-pixels) padding)
        ;; Calculate zoom to fit in the smaller dimension
        zoom-for-width (/ canvas-width required-size)
        zoom-for-height (/ canvas-height required-size)
        fit-zoom (max 0.2 (min 1.5 (min zoom-for-width zoom-for-height)))
        ;; Center the pendulum system in the viewport
        ;; The system extends from pivot-y down to pivot-y + extent-pixels
        ;; Center on the midpoint: pivot-y + extent-pixels/2
        system-center-y (+ pivot-y (/ extent-pixels 2.0))
        pan-x (- (/ canvas-width 2.0) (* pivot-x fit-zoom))
        pan-y (- (/ canvas-height 2.0) (* system-center-y fit-zoom))]
    (swap! app-state assoc :zoom fit-zoom :pan [pan-x pan-y])))

;; -----------------------------------------------------------------------------
;; Mouse Interaction
;; -----------------------------------------------------------------------------

;; Forward declarations for functions defined in Angle Display section
(declare hit-test-angle-display start-angle-edit!)

(defn get-canvas-coords
  "Converts mouse event to canvas coordinates."
  [e canvas]
  (let [rect (.getBoundingClientRect canvas)]
    [(- (.-clientX e) (.-left rect))
     (- (.-clientY e) (.-top rect))]))

(defn bob-screen-positions
  "Returns screen coordinates of all bobs."
  [system zoom pan canvas-width]
  (mapv (fn [[x y]]
          (world->screen [x y] zoom pan canvas-width))
        (engine/bob-positions system)))

(defn hit-test-bob
  "Returns index of bob at (mx, my) or nil if none hit."
  [system mx my zoom pan canvas-width]
  (let [positions (bob-screen-positions system zoom pan canvas-width)
        pendulums (:pendulums system)]
    (first
      (keep-indexed
        (fn [idx [bx by]]
          (let [{:keys [mass]} (nth pendulums idx)
                base-radius (+ 8 (* 4 mass))
                radius (* base-radius zoom)
                dx (- mx bx)
                dy (- my by)
                dist (js/Math.sqrt (+ (* dx dx) (* dy dy)))]
            (when (<= dist (+ radius 5))  ; 5px extra for easier clicking
              idx)))
        positions))))

(defn pivot-for-pendulum
  "Returns the pivot point (screen coords) for pendulum at idx.
   For idx 0, it's the main pivot. For idx > 0, it's the previous bob."
  [system idx zoom pan canvas-width]
  (if (zero? idx)
    (pivot-screen-pos zoom pan canvas-width)
    (let [positions (bob-screen-positions system zoom pan canvas-width)]
      (nth positions (dec idx)))))

(defn angle-from-pivot
  "Calculates the angle from pivot to mouse position.
   Returns angle in radians where 0 = hanging down, positive = clockwise."
  [[px py] [mx my]]
  (let [dx (- mx px)
        dy (- my py)]  ; positive dy = below pivot (in screen coords)
    (js/Math.atan2 dx dy)))

(defn handle-mouse-down [e canvas]
  (let [[mx my] (get-canvas-coords e canvas)
        {:keys [running system zoom pan canvas-width]} @app-state
        angle-hit (hit-test-angle-display system mx my)
        hit-idx (hit-test-bob system mx my zoom pan canvas-width)]
    (cond
      ;; Check for angle display click first (when not running)
      (and (not running) angle-hit)
      (start-angle-edit! angle-hit)

      ;; Bob selection for dragging (when not running)
      (and (not running) hit-idx)
      (swap! app-state assoc :selected hit-idx :dragging true)

      ;; Clicked on empty space - start panning
      :else
      (swap! app-state assoc :selected nil :dragging false :panning true :pan-start [mx my]))))

(defn handle-mouse-move [e canvas]
  (let [[mx my] (get-canvas-coords e canvas)
        {:keys [dragging panning running system selected zoom pan pan-start canvas-width]} @app-state]
    (cond
      ;; Handle panning
      panning
      (let [[start-x start-y] pan-start
            [pan-x pan-y] pan
            dx (- mx start-x)
            dy (- my start-y)]
        (swap! app-state assoc
               :pan [(+ pan-x dx) (+ pan-y dy)]
               :pan-start [mx my]))

      ;; Handle bob dragging (when not running)
      (and dragging (not running))
      (let [pivot (pivot-for-pendulum system selected zoom pan canvas-width)
            new-theta (angle-from-pivot pivot [mx my])]
        (swap! app-state update :system engine/set-pendulum-angle selected new-theta)))))

(defn handle-mouse-up [_e _canvas]
  (swap! app-state assoc :dragging false :panning false :pan-start nil))

(defn handle-mouse-wheel [e canvas]
  (let [[mx my] (get-canvas-coords e canvas)
        {:keys [zoom pan]} @app-state
        ;; Zoom factor per wheel notch
        rotation (.-deltaY e)
        zoom-factor (if (neg? rotation) 1.1 0.9)
        new-zoom (max 0.1 (min 10.0 (* zoom zoom-factor)))
        ;; To zoom centered on mouse position:
        ;; new-pan = mouse - (mouse - pan) * (new-zoom / zoom)
        [pan-x pan-y] pan
        scale-ratio (/ new-zoom zoom)
        new-pan-x (- mx (* scale-ratio (- mx pan-x)))
        new-pan-y (- my (* scale-ratio (- my pan-y)))]
    (.preventDefault e)
    (swap! app-state assoc :zoom new-zoom :pan [new-pan-x new-pan-y])))

;; -----------------------------------------------------------------------------
;; Angle Display
;; -----------------------------------------------------------------------------

(def angle-display-padding 10)
(def angle-display-line-height 20)
(def angle-display-row-width 180)

(defn hit-test-angle-display
  "Returns the index of the pendulum whose angle row was clicked, or nil."
  [system mx my]
  (let [pendulums (:pendulums system)
        header-y (+ angle-display-padding angle-display-line-height)]
    (when (< mx angle-display-row-width)
      (some (fn [idx]
              (let [row-y (+ header-y (* (inc idx) angle-display-line-height))
                    top (- row-y 12)
                    bottom (+ row-y 4)]
                (when (and (>= my top) (<= my bottom))
                  idx)))
            (range (count pendulums))))))

(defn normalize-angle
  "Converts physics theta to display angle where 0°=up, 90°=right, 180°=down, 270°=left.
   Like a compass heading where angles increase clockwise."
  [theta]
  (let [;; Negate theta because physics convention is counter-clockwise, compass is clockwise
        degrees (* (- theta) (/ 180 js/Math.PI))
        ;; Add 180 so that theta=0 (down) becomes 180°, theta=π (up) becomes 0°
        shifted (+ degrees 180)
        ;; Normalize to 0-360 range
        normalized (mod shifted 360)]
    (if (neg? normalized)
      (+ normalized 360)
      normalized)))

(defn draw-angle-display
  "Draws a tabular display of pendulum angles in the top left of the canvas."
  [ctx system editing-angle]
  (let [pendulums (:pendulums system)
        header-y (+ angle-display-padding angle-display-line-height)
        swatch-width 12
        num-x (+ angle-display-padding swatch-width 4)  ; 4px gap after swatch
        angle-x (+ num-x 24)]                           ; space for "N " then angle
    (set! (.-font ctx) "14px monospace")
    ;; Header
    (set! (.-fillStyle ctx) "#c8c8c8")
    (.fillText ctx "#" num-x header-y)
    (.fillText ctx "Angle" angle-x header-y)
    ;; Draw each pendulum's angle
    (doseq [[idx {:keys [theta]}] (map-indexed vector pendulums)]
      (let [y (+ header-y (* (inc idx) angle-display-line-height))
            color (nth colors (mod idx (count colors)))
            display-angle (normalize-angle theta)
            angle-str (str (.toFixed display-angle 2) "°")
            is-editing (= idx editing-angle)]
        ;; Draw color indicator box
        (set! (.-fillStyle ctx) color)
        (.fillRect ctx angle-display-padding (- y 10) swatch-width swatch-width)
        (set! (.-strokeStyle ctx) "#ffffff")
        (set! (.-lineWidth ctx) 1)
        (.strokeRect ctx angle-display-padding (- y 10) swatch-width swatch-width)
        ;; Draw number right after swatch
        (set! (.-fillStyle ctx) "#c8c8c8")
        (.fillText ctx (str (inc idx)) num-x y)
        ;; Draw angle (if not editing)
        (when-not is-editing
          (.fillText ctx angle-str angle-x y))))))

(defn display-angle->theta
  "Converts display angle (0°=up, 90°=right, 180°=down, 270°=left) back to physics theta."
  [display-angle]
  ;; Reverse of normalize-angle: negate to convert from clockwise to counter-clockwise
  (* (- 180 display-angle) (/ js/Math.PI 180)))

(defn start-angle-edit!
  "Opens the inline angle editor for the pendulum at idx."
  [idx]
  (let [{:keys [system]} @app-state
        pendulum (get-in system [:pendulums idx])
        display-angle (normalize-angle (:theta pendulum))]
    (swap! app-state assoc
           :editing-angle idx
           :angle-input (.toFixed display-angle 2))))

(defn cancel-angle-edit! []
  (swap! app-state assoc :editing-angle nil :angle-input ""))

(defn submit-angle-edit! []
  (let [{:keys [editing-angle angle-input]} @app-state]
    (when editing-angle
      (when-let [display-angle (js/parseFloat angle-input)]
        (when-not (js/isNaN display-angle)
          (let [new-theta (display-angle->theta display-angle)]
            (swap! app-state update :system engine/set-pendulum-angle editing-angle new-theta)))))
    (cancel-angle-edit!)))

;; -----------------------------------------------------------------------------
;; Canvas Rendering
;; -----------------------------------------------------------------------------

(defn hex->rgb
  "Converts a hex color string like '#ef4444' to [r g b]."
  [hex]
  (let [hex (if (= \# (first hex)) (subs hex 1) hex)]
    [(js/parseInt (subs hex 0 2) 16)
     (js/parseInt (subs hex 2 4) 16)
     (js/parseInt (subs hex 4 6) 16)]))

(defn draw-trails
  "Draws fading trails for each pendulum bob."
  [ctx trails trail-duration zoom pan canvas-width]
  (let [now (.now js/Date)
        duration-ms (* trail-duration 1000)]
    (set! (.-lineWidth ctx) (* 2 zoom))
    (doseq [[idx trail] (map-indexed vector trails)]
      (let [color (nth colors (mod idx (count colors)))
            [r g b] (hex->rgb color)]
        (doseq [{:keys [pos time]} trail]
          (let [age (- now time)
                alpha (max 0.0 (- 1.0 (/ age duration-ms)))
                [sx sy] (world->screen pos zoom pan canvas-width)
                radius (* 2 zoom)]
            (when (> alpha 0.0)
              (set! (.-fillStyle ctx) (str "rgba(" r "," g "," b "," alpha ")"))
              (.beginPath ctx)
              (.arc ctx sx sy radius 0 (* 2 js/Math.PI))
              (.fill ctx))))))))

(defn draw-pendulum-system [ctx system selected running trails trail-duration zoom pan canvas-width canvas-height editing-angle]
  (let [positions (engine/bob-positions system)
        pendulums (:pendulums system)
        [piv-sx piv-sy] (pivot-screen-pos zoom pan canvas-width)]
    ;; Clear canvas
    (.clearRect ctx 0 0 canvas-width canvas-height)

    ;; Draw trails first (behind the pendulums)
    (draw-trails ctx trails trail-duration zoom pan canvas-width)

    ;; Draw from pivot through each bob
    (loop [prev-x piv-sx
           prev-y piv-sy
           idx 0
           bobs positions]
      (when (seq bobs)
        (let [[x y] (first bobs)
              [screen-x screen-y] (world->screen [x y] zoom pan canvas-width)
              color (nth colors (mod idx (count colors)))
              is-selected (and (not running) (= idx selected))]

          ;; Draw arm
          (set! (.-strokeStyle ctx) "#525252")
          (set! (.-lineWidth ctx) (* 3 zoom))
          (.beginPath ctx)
          (.moveTo ctx prev-x prev-y)
          (.lineTo ctx screen-x screen-y)
          (.stroke ctx)

          ;; Draw bob
          (let [{:keys [mass]} (nth pendulums idx)
                base-radius (+ 8 (* 4 mass))
                radius (* base-radius zoom)]
            (set! (.-fillStyle ctx) color)
            (.beginPath ctx)
            (.arc ctx screen-x screen-y radius 0 (* 2 js/Math.PI))
            (.fill ctx)

            ;; Bob outline (highlight if selected)
            (if is-selected
              (do
                (set! (.-strokeStyle ctx) "#ffcc00")
                (set! (.-lineWidth ctx) (* 4 zoom)))
              (do
                (set! (.-strokeStyle ctx) "#ffffff")
                (set! (.-lineWidth ctx) (* 2 zoom))))
            (.stroke ctx))

          (recur screen-x screen-y (inc idx) (rest bobs)))))

    ;; Draw pivot point
    (let [pivot-radius (* 6 zoom)]
      (set! (.-fillStyle ctx) "#737373")
      (.beginPath ctx)
      (.arc ctx piv-sx piv-sy pivot-radius 0 (* 2 js/Math.PI))
      (.fill ctx))

    ;; Draw angle display (not affected by zoom/pan)
    (draw-angle-display ctx system editing-angle)))

;; -----------------------------------------------------------------------------
;; Reagent Components
;; -----------------------------------------------------------------------------

(defn update-canvas-size!
  "Updates canvas size to fill the container."
  [container-ref]
  (when-let [container @container-ref]
    (let [rect (.getBoundingClientRect container)
          w (.-width rect)
          h (.-height rect)]
      (when (and (pos? w) (pos? h))
        (swap! app-state assoc :canvas-width w :canvas-height h)))))

(defn canvas-component []
  (let [canvas-ref (r/atom nil)
        container-ref (r/atom nil)
        resize-handler (atom nil)]
    (r/create-class
      {:display-name "pendulum-canvas"

       :component-did-mount
       (fn [_]
         ;; Set initial size from container
         (update-canvas-size! container-ref)
         ;; Set up resize listener
         (reset! resize-handler (fn [] (update-canvas-size! container-ref)))
         (.addEventListener js/window "resize" @resize-handler)
         ;; Set up render watch
         (when-let [canvas @canvas-ref]
           (let [ctx (.getContext canvas "2d")]
             (add-watch app-state :render
                        (fn [_ _ _ {:keys [system selected running trails trail-duration zoom pan canvas-width canvas-height editing-angle]}]
                          (draw-pendulum-system ctx system selected running trails trail-duration zoom pan canvas-width canvas-height editing-angle)))
             ;; Initial draw
             (let [{:keys [system selected running trails trail-duration zoom pan canvas-width canvas-height editing-angle]} @app-state]
               (draw-pendulum-system ctx system selected running trails trail-duration zoom pan canvas-width canvas-height editing-angle)))))

       :component-will-unmount
       (fn [_]
         (remove-watch app-state :render)
         (when @resize-handler
           (.removeEventListener js/window "resize" @resize-handler)))

       :reagent-render
       (fn []
         (let [canvas @canvas-ref
               {:keys [running canvas-width canvas-height]} @app-state]
           [:div.canvas-container
            {:ref #(reset! container-ref %)
             :style {:width "100%" :height "100%"}}
            [:canvas {:ref #(reset! canvas-ref %)
                      :width canvas-width
                      :height canvas-height
                      :style {:cursor (if running "default" "pointer")
                              :display "block"}
                      :on-mouse-down #(when canvas (handle-mouse-down % canvas))
                      :on-mouse-move #(when canvas (handle-mouse-move % canvas))
                      :on-mouse-up #(when canvas (handle-mouse-up % canvas))
                      :on-mouse-leave #(when canvas (handle-mouse-up % canvas))
                      :on-wheel #(when canvas (handle-mouse-wheel % canvas))}]]))})))

(defn angle-input-component []
  (let [{:keys [editing-angle angle-input]} @app-state]
    (when editing-angle
      (let [header-y (+ angle-display-padding angle-display-line-height)
            row-y (+ header-y (* (inc editing-angle) angle-display-line-height))
            input-top (- row-y 14)
            ;; Match angle-x from draw-angle-display: padding(10) + swatch(12) + gap(4) + num-space(24) = 50
            input-left 50]
        [:div.angle-input-overlay
         {:style {:position "absolute"
                  :top (str input-top "px")
                  :left (str input-left "px")}}
         [:input {:type "text"
                  :value angle-input
                  :auto-focus true
                  :style {:width "60px"
                          :padding "2px 4px"
                          :font-family "monospace"
                          :font-size "14px"
                          :background-color "#121212"
                          :color "#c8c8c8"
                          :border "1px solid #404040"
                          :border-radius "2px"}
                  :on-change #(swap! app-state assoc :angle-input (-> % .-target .-value))
                  :on-key-down (fn [e]
                                 (case (.-key e)
                                   "Enter" (submit-angle-edit!)
                                   "Escape" (cancel-angle-edit!)
                                   nil))
                  :on-blur cancel-angle-edit!}]
         [:span {:style {:margin-left "2px" :color "#c8c8c8" :font-family "monospace" :font-size "14px"}} "°"]]))))

(defn set-trail-duration! [duration]
  (swap! app-state assoc :trail-duration duration))

(defn play-pause-button []
  (let [{:keys [running]} @app-state]
    [:button.play-pause
     {:on-click toggle-simulation!
      :style {:position "absolute"
              :bottom "20px"
              :left "50%"
              :transform "translateX(-50%)"
              :width "48px"
              :height "48px"
              :border-radius "50%"
              :border "none"
              :background-color (if running "rgba(245, 158, 11, 0.9)" "rgba(34, 197, 94, 0.9)")
              :color "#000"
              :font-size "18px"
              :cursor "pointer"
              :display "flex"
              :align-items "center"
              :justify-content "center"
              :padding "0"}}
     [:span {:style {:display "inline-block"
                     :transform (if running "none" "translateX(2px)")}}
      (if running "⏸" "▶")]]))

(defn center-button []
  [:button {:on-click center-view!
            :title "Center screen"
            :style {:position "absolute"
                    :top "10px"
                    :right "10px"
                    :width "36px"
                    :height "36px"
                    :border-radius "50%"
                    :border "none"
                    :background-color "rgba(64, 64, 64, 0.8)"
                    :color "#fafaf9"
                    :font-size "18px"
                    :cursor "pointer"
                    :display "flex"
                    :align-items "center"
                    :justify-content "center"}}
   "◎"])

(defn add-remove-buttons []
  (let [{:keys [system]} @app-state
        n (engine/pendulum-count system)]
    [:div {:style {:position "absolute"
                   :top "10px"
                   :left "50%"
                   :transform "translateX(-50%)"
                   :display "flex"
                   :gap "8px"
                   :align-items "center"}}
     [:button {:on-click add-pendulum!
               :style {:padding "4px 8px"
                       :cursor "pointer"
                       :background-color "rgba(64, 64, 64, 0.8)"
                       :border "none"
                       :border-radius "4px"
                       :color "#fafaf9"}} "+"]
     [:button {:on-click remove-pendulum!
               :disabled (< n 2)
               :style {:padding "4px 8px"
                       :cursor "pointer"
                       :background-color "rgba(64, 64, 64, 0.8)"
                       :border "none"
                       :border-radius "4px"
                       :color "#fafaf9"}} "-"]
     [:span {:style {:color "#c8c8c8" :font-size "12px"}} (str n " pendulums")]]))

(defn controls-component []
  (let [{:keys [trail-duration system]} @app-state
        energy (engine/total-energy system)]
    [:div.controls
     {:style {:position "absolute"
              :bottom "80px"
              :left "50%"
              :transform "translateX(-50%)"
              :display "flex"
              :flex-direction "column"
              :gap "8px"
              :background-color "rgba(26, 26, 26, 0.8)"
              :padding "10px"
              :border-radius "4px"}}
     [:div {:style {:display "flex" :gap "8px" :align-items "center"}}
      [:span {:style {:color "#c8c8c8" :font-size "12px"}} "Trail:"]
      [:input {:type "range"
               :min 0
               :max 100
               :value (* trail-duration 10)
               :style {:width "80px"}
               :on-change #(set-trail-duration! (/ (js/parseInt (-> % .-target .-value)) 10.0))}]
      [:span {:style {:color "#c8c8c8" :font-size "12px"}} (str (.toFixed trail-duration 1) "s")]]
     [:div {:style {:color "#c8c8c8" :font-size "12px"}}
      (str "Energy: " (.toFixed energy 2) " J")]]))

(defn app-component []
  [:div#app
   [:div.simulation-container
    {:style {:position "relative"}}
    [canvas-component]
    [angle-input-component]
    [add-remove-buttons]
    [center-button]
    [play-pause-button]
    [controls-component]]])

;; -----------------------------------------------------------------------------
;; Entry Point
;; -----------------------------------------------------------------------------

(defn ^:export init []
  (rdom/render [app-component]
               (.getElementById js/document "app")))

(defn ^:dev/after-load reload []
  (init))
