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

;; Colors for pendulum chain
(def colors ["#5c7aea" "#7c9afa" "#9cbafa" "#bcdafa" "#dcfafa"])

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
           :dragging false})) ; true when dragging to adjust angle

;; -----------------------------------------------------------------------------
;; Simulation Control
;; -----------------------------------------------------------------------------

(defn step-simulation! []
  (swap! app-state update :system engine/step dt))

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
         :dragging false))

(defn add-pendulum! []
  (swap! app-state update :system
         engine/add-pendulum
         (engine/make-pendulum {:theta 0.3 :length 1.0})))

(defn remove-pendulum! []
  (swap! app-state update :system engine/remove-pendulum))

;; -----------------------------------------------------------------------------
;; Mouse Interaction
;; -----------------------------------------------------------------------------

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
          hit-idx (hit-test-bob system mx my)]
      (if hit-idx
        (swap! app-state assoc :selected hit-idx :dragging true)
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
;; Canvas Rendering
;; -----------------------------------------------------------------------------

(defn draw-pendulum-system [ctx system selected running]
  (let [positions (engine/bob-positions system)
        pendulums (:pendulums system)]
    ;; Clear canvas
    (.clearRect ctx 0 0 canvas-width canvas-height)

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
          (set! (.-strokeStyle ctx) "#6a6e89")
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
    (set! (.-fillStyle ctx) "#9a9aba")
    (.beginPath ctx)
    (.arc ctx pivot-x pivot-y 6 0 (* 2 js/Math.PI))
    (.fill ctx)))

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
                        (fn [_ _ _ {:keys [system selected running]}]
                          (draw-pendulum-system ctx system selected running)))
             ;; Initial draw
             (let [{:keys [system selected running]} @app-state]
               (draw-pendulum-system ctx system selected running)))))

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
    [canvas-component]]
   [controls-component]])

;; -----------------------------------------------------------------------------
;; Entry Point
;; -----------------------------------------------------------------------------

(defn ^:export init []
  (rdom/render [app-component]
               (.getElementById js/document "app")))

(defn ^:dev/after-load reload []
  (init))
