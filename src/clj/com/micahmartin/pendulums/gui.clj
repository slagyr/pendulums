(ns com.micahmartin.pendulums.gui
  "Desktop GUI using HumbleUI for coupled pendulum simulation."
  (:require [com.micahmartin.pendulums.engine :as engine]
            [io.github.humbleui.ui :as ui]
            [io.github.humbleui.window :as window])
  (:import [io.github.humbleui.skija Canvas Paint PaintMode]))

;; -----------------------------------------------------------------------------
;; Constants
;; -----------------------------------------------------------------------------

(def canvas-width 800)
(def canvas-height 600)
(def scale 100.0)
(def pivot-x (/ canvas-width 2.0))
(def pivot-y 150.0)
(def dt 0.016)

;; Warm Physics color palette
(def colors [(unchecked-int 0xFFef4444) (unchecked-int 0xFFf97316)
             (unchecked-int 0xFFeab308) (unchecked-int 0xFF84cc16)
             (unchecked-int 0xFF22c55e)])
(def arm-color (unchecked-int 0xFF525252))
(def bob-outline-color (unchecked-int 0xFFffffff))
(def selected-outline-color (unchecked-int 0xFFf59e0b))
(def pivot-color (unchecked-int 0xFF737373))
(def bg-color (unchecked-int 0xFF121212))
(def btn-color (unchecked-int 0xFF404040))

;; -----------------------------------------------------------------------------
;; Application State
;; -----------------------------------------------------------------------------

(defonce *state
  (atom {:system (engine/make-system
                   [(engine/make-pendulum {:theta 0.8 :length 1.5})
                    (engine/make-pendulum {:theta 0.5 :length 1.2})])
         :running false
         :selected nil      ; index of selected pendulum (nil = none)
         :dragging false})) ; true when dragging to adjust angle

(defonce *window (atom nil))

;; -----------------------------------------------------------------------------
;; Simulation Control
;; -----------------------------------------------------------------------------

(defn step-simulation! []
  (swap! *state update :system engine/step dt))

(defn toggle-simulation! []
  (swap! *state (fn [state]
                  (let [new-running (not (:running state))]
                    (if new-running
                      (assoc state :running true :selected nil :dragging false)
                      (assoc state :running false))))))

(defn reset-simulation! []
  (swap! *state assoc
         :running false
         :system (engine/make-system
                   [(engine/make-pendulum {:theta 0.8 :length 1.5})
                    (engine/make-pendulum {:theta 0.5 :length 1.2})])
         :selected nil
         :dragging false))

(defn add-pendulum! []
  (swap! *state update :system
         engine/add-pendulum
         (engine/make-pendulum {:theta 0.3 :length 1.0})))

(defn remove-pendulum! []
  (swap! *state update :system engine/remove-pendulum))

;; -----------------------------------------------------------------------------
;; Mouse Interaction
;; -----------------------------------------------------------------------------

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
                radius (+ 8.0 (* 4.0 mass))
                dx (- mx bx)
                dy (- my by)
                dist (Math/sqrt (+ (* dx dx) (* dy dy)))]
            (when (<= dist (+ radius 5.0))
              idx)))
        positions))))

(defn pivot-for-pendulum
  "Returns the pivot point (screen coords) for pendulum at idx."
  [system idx]
  (if (zero? idx)
    [pivot-x pivot-y]
    (let [positions (bob-screen-positions system)]
      (nth positions (dec idx)))))

(defn angle-from-pivot
  "Calculates the angle from pivot to mouse position."
  [[px py] [mx my]]
  (let [dx (- mx px)
        dy (- my py)]
    (Math/atan2 dx dy)))

(defn handle-mouse-down [mx my]
  (when-not (:running @*state)
    (let [system (:system @*state)
          hit-idx (hit-test-bob system mx my)]
      (if hit-idx
        (swap! *state assoc :selected hit-idx :dragging true)
        (swap! *state assoc :selected nil :dragging false)))))

(defn handle-mouse-move [mx my]
  (when (and (:dragging @*state)
             (not (:running @*state)))
    (let [{:keys [system selected]} @*state
          pivot (pivot-for-pendulum system selected)
          new-theta (angle-from-pivot pivot [mx my])]
      (swap! *state update :system engine/set-pendulum-angle selected new-theta))))

(defn handle-mouse-up []
  (swap! *state assoc :dragging false))

;; -----------------------------------------------------------------------------
;; Canvas Rendering
;; -----------------------------------------------------------------------------

(defn draw-pendulum-system [^Canvas canvas system selected running]
  (let [positions (engine/bob-positions system)
        pendulums (:pendulums system)
        arm-paint (doto (Paint.)
                    (.setColor arm-color)
                    (.setMode PaintMode/STROKE)
                    (.setStrokeWidth (float 3)))
        bob-paint (Paint.)
        outline-paint (doto (Paint.)
                        (.setMode PaintMode/STROKE))
        pivot-paint (doto (Paint.) (.setColor pivot-color))]

    (loop [prev-x (float pivot-x)
           prev-y (float pivot-y)
           idx 0
           bobs positions]
      (when (seq bobs)
        (let [[x y] (first bobs)
              screen-x (float (+ pivot-x (* x scale)))
              screen-y (float (- pivot-y (* y scale)))
              color (nth colors (mod idx (count colors)))
              is-selected (and (not running) (= idx selected))]

          (.drawLine canvas prev-x prev-y screen-x screen-y arm-paint)

          (let [{:keys [mass]} (nth pendulums idx)
                radius (float (+ 8.0 (* 4.0 mass)))]
            (.setColor bob-paint (int color))
            (.drawCircle canvas screen-x screen-y radius bob-paint)
            ;; Highlight selected pendulum
            (if is-selected
              (do (.setColor outline-paint selected-outline-color)
                  (.setStrokeWidth outline-paint (float 4)))
              (do (.setColor outline-paint bob-outline-color)
                  (.setStrokeWidth outline-paint (float 2))))
            (.drawCircle canvas screen-x screen-y radius outline-paint))

          (recur screen-x screen-y (inc idx) (rest bobs)))))

    (.drawCircle canvas (float pivot-x) (float pivot-y) (float 6.0) pivot-paint)))

;; -----------------------------------------------------------------------------
;; Animation
;; -----------------------------------------------------------------------------

(defn on-frame [window]
  (when (:running @*state)
    (step-simulation!))
  (window/request-frame window))

;; -----------------------------------------------------------------------------
;; UI Components
;; -----------------------------------------------------------------------------

(defn button [label on-click]
  [ui/clickable
   {:on-click (fn [_] (on-click))}
   [ui/rect {:paint (doto (Paint.) (.setColor btn-color))}
    [ui/padding {:padding 10}
     [ui/label label]]]])

(defn simulation-canvas []
  (let [{:keys [running system selected]} @*state]
    [ui/mouse-listener
     {:on-button (fn [event]
                   (let [x (:x event)
                         y (:y event)]
                     (if (:pressed? event)
                       (handle-mouse-down x y)
                       (handle-mouse-up))))
      :on-move (fn [event]
                 (when (:dragging @*state)
                   (let [x (:x event)
                         y (:y event)]
                     (handle-mouse-move x y))))}
     [ui/canvas
      {:on-paint (fn [_ctx ^Canvas canvas _size]
                   (.clear canvas bg-color)
                   (draw-pendulum-system canvas system selected running))}]]))

(defn app []
  (let [{:keys [running system]} @*state
        n (engine/pendulum-count system)
        energy (engine/total-energy system)]
    [ui/column
     ;; Canvas area with mouse interaction
     [simulation-canvas]
     ;; Controls
     [ui/padding {:padding 10}
      [ui/row
       [button (if running "Pause" "Play") toggle-simulation!]
       [ui/gap {:width 10}]
       [button "Reset" reset-simulation!]
       [ui/gap {:width 10}]
       [button "+ Pendulum" add-pendulum!]
       [ui/gap {:width 10}]
       [button "- Pendulum" remove-pendulum!]
       [ui/gap {:width 20}]
       [ui/label (str "Pendulums: " n)]
       [ui/gap {:width 20}]
       [ui/label (format "Energy: %.2f J" energy)]]]]))

;; -----------------------------------------------------------------------------
;; Entry Point
;; -----------------------------------------------------------------------------

(defn -main [& _args]
  (ui/start-app!
    (reset! *window
      (ui/window
        {:title "Pendulums"
         :width canvas-width
         :height (+ canvas-height 60)
         :on-frame on-frame}
        #'app))))
