(ns com.micahmartin.pendulums.core
  "Web UI entry point using Reagent."
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [com.micahmartin.pendulums.engine :as engine]))

;; -----------------------------------------------------------------------------
;; Constants
;; -----------------------------------------------------------------------------

(def canvas-width 800)
(def canvas-height 600)
(def scale 100)  ; pixels per meter
(def pivot-x (/ canvas-width 2))
(def pivot-y 150)
(def dt 0.016)  ; ~60 fps simulation step

;; Colors for pendulum chain (warm sunset gradient)
(def colors ["#ef4444" "#f97316" "#eab308" "#84cc16" "#22c55e"])

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
           :trail-duration 3.0}))

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
  (swap! app-state assoc
         :system (engine/make-system
                   [(engine/make-pendulum {:theta 0.8 :length 1.5})
                    (engine/make-pendulum {:theta 0.5 :length 1.2})])
         :selected nil
         :dragging false
         :trails []))

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
  [system]
  (mapv (fn [[x y]]
          [(+ pivot-x (* x scale))
           (- pivot-y (* y scale))])
        (engine/bob-positions system)))

(defn hit-test-bob
  "Returns index of bob at (mx, my) or nil if none hit."
  [system mx my]
  (let [positions (bob-screen-positions system)
        pendulums (:pendulums system)]
    (first
      (keep-indexed
        (fn [idx [bx by]]
          (let [{:keys [mass]} (nth pendulums idx)
                radius (+ 8 (* 4 mass))
                dx (- mx bx)
                dy (- my by)
                dist (js/Math.sqrt (+ (* dx dx) (* dy dy)))]
            (when (<= dist (+ radius 5))  ; 5px extra for easier clicking
              idx)))
        positions))))

(defn pivot-for-pendulum
  "Returns the pivot point (screen coords) for pendulum at idx.
   For idx 0, it's the main pivot. For idx > 0, it's the previous bob."
  [system idx]
  (if (zero? idx)
    [pivot-x pivot-y]
    (let [positions (bob-screen-positions system)]
      (nth positions (dec idx)))))

(defn angle-from-pivot
  "Calculates the angle from pivot to mouse position.
   Returns angle in radians where 0 = hanging down, positive = clockwise."
  [[px py] [mx my]]
  (let [dx (- mx px)
        dy (- my py)]  ; positive dy = below pivot (in screen coords)
    (js/Math.atan2 dx dy)))

(defn handle-mouse-down [e canvas]
  (when-not (:running @app-state)
    (let [[mx my] (get-canvas-coords e canvas)
          system (:system @app-state)
          angle-hit (hit-test-angle-display system mx my)
          hit-idx (hit-test-bob system mx my)]
      (cond
        ;; Check for angle display click first
        angle-hit
        (start-angle-edit! angle-hit)

        ;; Bob selection for dragging
        hit-idx
        (swap! app-state assoc :selected hit-idx :dragging true)

        ;; Clicked on empty space
        :else
        (swap! app-state assoc :selected nil :dragging false)))))

(defn handle-mouse-move [e canvas]
  (when (and (:dragging @app-state)
             (not (:running @app-state)))
    (let [[mx my] (get-canvas-coords e canvas)
          {:keys [system selected]} @app-state
          pivot (pivot-for-pendulum system selected)
          new-theta (angle-from-pivot pivot [mx my])]
      (swap! app-state update :system engine/set-pendulum-angle selected new-theta))))

(defn handle-mouse-up [_e _canvas]
  (swap! app-state assoc :dragging false))

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

(defn draw-angle-display
  "Draws a tabular display of pendulum angles in the top left of the canvas."
  [ctx system]
  (let [pendulums (:pendulums system)
        header-y (+ angle-display-padding angle-display-line-height)]
    (set! (.-font ctx) "14px monospace")
    ;; Header
    (set! (.-fillStyle ctx) "#c8c8c8")
    (.fillText ctx "Pendulum    Angle" angle-display-padding header-y)
    ;; Draw each pendulum's angle
    (doseq [[idx {:keys [theta]}] (map-indexed vector pendulums)]
      (let [y (+ header-y (* (inc idx) angle-display-line-height))
            color (nth colors (mod idx (count colors)))
            degrees (* theta (/ 180 js/Math.PI))
            sign (if (>= degrees 0) "+" "-")
            angle-str (str sign (.toFixed (js/Math.abs degrees) 2) "°")]
        ;; Draw color indicator box
        (set! (.-fillStyle ctx) color)
        (.fillRect ctx angle-display-padding (- y 10) 12 12)
        (set! (.-strokeStyle ctx) "#ffffff")
        (set! (.-lineWidth ctx) 1)
        (.strokeRect ctx angle-display-padding (- y 10) 12 12)
        ;; Draw label and angle
        (set! (.-fillStyle ctx) "#c8c8c8")
        (.fillText ctx (str "    " (inc idx) "      " angle-str) (+ angle-display-padding 12) y)))))

(defn start-angle-edit!
  "Opens the inline angle editor for the pendulum at idx."
  [idx]
  (let [{:keys [system]} @app-state
        pendulum (get-in system [:pendulums idx])
        current-degrees (* (:theta pendulum) (/ 180 js/Math.PI))]
    (swap! app-state assoc
           :editing-angle idx
           :angle-input (.toFixed current-degrees 2))))

(defn cancel-angle-edit! []
  (swap! app-state assoc :editing-angle nil :angle-input ""))

(defn submit-angle-edit! []
  (let [{:keys [editing-angle angle-input]} @app-state]
    (when editing-angle
      (when-let [degrees (js/parseFloat angle-input)]
        (when-not (js/isNaN degrees)
          (let [new-theta (* degrees (/ js/Math.PI 180))]
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
  [ctx trails trail-duration]
  (let [now (.now js/Date)
        duration-ms (* trail-duration 1000)]
    (set! (.-lineWidth ctx) 2)
    (doseq [[idx trail] (map-indexed vector trails)]
      (let [color (nth colors (mod idx (count colors)))
            [r g b] (hex->rgb color)]
        (doseq [{:keys [pos time]} trail]
          (let [age (- now time)
                alpha (max 0.0 (- 1.0 (/ age duration-ms)))
                [x y] pos
                sx (+ pivot-x (* x scale))
                sy (- pivot-y (* y scale))
                radius 2]
            (when (> alpha 0.0)
              (set! (.-fillStyle ctx) (str "rgba(" r "," g "," b "," alpha ")"))
              (.beginPath ctx)
              (.arc ctx sx sy radius 0 (* 2 js/Math.PI))
              (.fill ctx))))))))

(defn draw-pendulum-system [ctx system selected running trails trail-duration]
  (let [positions (engine/bob-positions system)
        pendulums (:pendulums system)]
    ;; Clear canvas
    (.clearRect ctx 0 0 canvas-width canvas-height)

    ;; Draw trails first (behind the pendulums)
    (draw-trails ctx trails trail-duration)

    ;; Draw from pivot through each bob
    (loop [prev-x pivot-x
           prev-y pivot-y
           idx 0
           bobs positions]
      (when (seq bobs)
        (let [[x y] (first bobs)
              screen-x (+ pivot-x (* x scale))
              screen-y (- pivot-y (* y scale))  ; flip y for screen coords
              color (nth colors (mod idx (count colors)))
              is-selected (and (not running) (= idx selected))]

          ;; Draw arm
          (set! (.-strokeStyle ctx) "#525252")
          (set! (.-lineWidth ctx) 3)
          (.beginPath ctx)
          (.moveTo ctx prev-x prev-y)
          (.lineTo ctx screen-x screen-y)
          (.stroke ctx)

          ;; Draw bob
          (let [{:keys [mass]} (nth pendulums idx)
                radius (+ 8 (* 4 mass))]
            (set! (.-fillStyle ctx) color)
            (.beginPath ctx)
            (.arc ctx screen-x screen-y radius 0 (* 2 js/Math.PI))
            (.fill ctx)

            ;; Bob outline (highlight if selected)
            (if is-selected
              (do
                (set! (.-strokeStyle ctx) "#ffcc00")
                (set! (.-lineWidth ctx) 4))
              (do
                (set! (.-strokeStyle ctx) "#ffffff")
                (set! (.-lineWidth ctx) 2)))
            (.stroke ctx))

          (recur screen-x screen-y (inc idx) (rest bobs)))))

    ;; Draw pivot point
    (set! (.-fillStyle ctx) "#737373")
    (.beginPath ctx)
    (.arc ctx pivot-x pivot-y 6 0 (* 2 js/Math.PI))
    (.fill ctx)

    ;; Draw angle display
    (draw-angle-display ctx system)))

;; -----------------------------------------------------------------------------
;; Reagent Components
;; -----------------------------------------------------------------------------

(defn canvas-component []
  (let [canvas-ref (r/atom nil)]
    (r/create-class
      {:display-name "pendulum-canvas"

       :component-did-mount
       (fn [_]
         (when-let [canvas @canvas-ref]
           (let [ctx (.getContext canvas "2d")]
             (add-watch app-state :render
                        (fn [_ _ _ {:keys [system selected running trails trail-duration]}]
                          (draw-pendulum-system ctx system selected running trails trail-duration)))
             ;; Initial draw
             (let [{:keys [system selected running trails trail-duration]} @app-state]
               (draw-pendulum-system ctx system selected running trails trail-duration)))))

       :component-will-unmount
       (fn [_]
         (remove-watch app-state :render))

       :reagent-render
       (fn []
         (let [canvas @canvas-ref
               running (:running @app-state)]
           [:canvas {:ref #(reset! canvas-ref %)
                     :width canvas-width
                     :height canvas-height
                     :style {:cursor (if running "default" "pointer")}
                     :on-mouse-down #(when canvas (handle-mouse-down % canvas))
                     :on-mouse-move #(when canvas (handle-mouse-move % canvas))
                     :on-mouse-up #(when canvas (handle-mouse-up % canvas))
                     :on-mouse-leave #(when canvas (handle-mouse-up % canvas))}]))})))

(defn angle-input-component []
  (let [{:keys [editing-angle angle-input]} @app-state]
    (when editing-angle
      (let [header-y (+ angle-display-padding angle-display-line-height)
            row-y (+ header-y (* (inc editing-angle) angle-display-line-height))
            input-top (- row-y 14)
            input-left (+ angle-display-padding 50)]
        [:div.angle-input-overlay
         {:style {:position "absolute"
                  :top (str input-top "px")
                  :left (str input-left "px")}}
         [:input {:type "text"
                  :value angle-input
                  :auto-focus true
                  :style {:width "80px"
                          :padding "2px 4px"
                          :font-family "monospace"
                          :font-size "14px"}
                  :on-change #(swap! app-state assoc :angle-input (-> % .-target .-value))
                  :on-key-down (fn [e]
                                 (case (.-key e)
                                   "Enter" (submit-angle-edit!)
                                   "Escape" (cancel-angle-edit!)
                                   nil))
                  :on-blur cancel-angle-edit!}]
         [:span {:style {:margin-left "4px" :color "#c8c8c8"}} "°"]]))))

(defn controls-component []
  (let [{:keys [running system]} @app-state
        n (engine/pendulum-count system)
        energy (engine/total-energy system)]
    [:div.controls
     [:button.primary {:on-click toggle-simulation!}
      (if running "Pause" "Play")]
     [:button {:on-click reset-simulation!} "Reset"]
     [:button {:on-click add-pendulum!} "+ Pendulum"]
     [:button {:on-click remove-pendulum!
               :disabled (< n 2)}
      "- Pendulum"]
     [:span.status (str "Pendulums: " n)]
     [:span.status (str "Energy: " (.toFixed energy 2) " J")]]))

(defn app-component []
  [:div#app
   [:div.simulation-container
    {:style {:position "relative"}}
    [canvas-component]
    [angle-input-component]]
   [controls-component]])

;; -----------------------------------------------------------------------------
;; Entry Point
;; -----------------------------------------------------------------------------

(defn ^:export init []
  (rdom/render [app-component]
               (.getElementById js/document "app")))

(defn ^:dev/after-load reload []
  (init))
