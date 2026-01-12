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

(def colors [(unchecked-int 0xFF5c7aea) (unchecked-int 0xFF7c9afa)
             (unchecked-int 0xFF9cbafa) (unchecked-int 0xFFbcdafa)
             (unchecked-int 0xFFdcfafa)])
(def arm-color (unchecked-int 0xFF6a6e89))
(def bob-outline-color (unchecked-int 0xFFffffff))
(def pivot-color (unchecked-int 0xFF9a9aba))
(def bg-color (unchecked-int 0xFF1a1a2e))
(def btn-color (unchecked-int 0xFF3a3a5e))

;; -----------------------------------------------------------------------------
;; Application State
;; -----------------------------------------------------------------------------

(defonce *state
  (atom {:system (engine/make-system
                   [(engine/make-pendulum {:theta 0.8 :length 1.5})
                    (engine/make-pendulum {:theta 0.5 :length 1.2})])
         :running false}))

(defonce *window (atom nil))

;; -----------------------------------------------------------------------------
;; Simulation Control
;; -----------------------------------------------------------------------------

(defn step-simulation! []
  (swap! *state update :system engine/step dt))

(defn toggle-simulation! []
  (swap! *state update :running not))

(defn reset-simulation! []
  (swap! *state assoc
         :running false
         :system (engine/make-system
                   [(engine/make-pendulum {:theta 0.8 :length 1.5})
                    (engine/make-pendulum {:theta 0.5 :length 1.2})])))

(defn add-pendulum! []
  (swap! *state update :system
         engine/add-pendulum
         (engine/make-pendulum {:theta 0.3 :length 1.0})))

(defn remove-pendulum! []
  (swap! *state update :system engine/remove-pendulum))

;; -----------------------------------------------------------------------------
;; Canvas Rendering
;; -----------------------------------------------------------------------------

(defn draw-pendulum-system [^Canvas canvas system]
  (let [positions (engine/bob-positions system)
        pendulums (:pendulums system)
        arm-paint (doto (Paint.)
                    (.setColor arm-color)
                    (.setMode PaintMode/STROKE)
                    (.setStrokeWidth (float 3)))
        bob-paint (Paint.)
        outline-paint (doto (Paint.)
                        (.setColor bob-outline-color)
                        (.setMode PaintMode/STROKE)
                        (.setStrokeWidth (float 2)))
        pivot-paint (doto (Paint.) (.setColor pivot-color))]

    (loop [prev-x (float pivot-x)
           prev-y (float pivot-y)
           idx 0
           bobs positions]
      (when (seq bobs)
        (let [[x y] (first bobs)
              screen-x (float (+ pivot-x (* x scale)))
              screen-y (float (- pivot-y (* y scale)))
              color (nth colors (mod idx (count colors)))]

          (.drawLine canvas prev-x prev-y screen-x screen-y arm-paint)

          (let [{:keys [mass]} (nth pendulums idx)
                radius (float (+ 8.0 (* 4.0 mass)))]
            (.setColor bob-paint (int color))
            (.drawCircle canvas screen-x screen-y radius bob-paint)
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

(defn app []
  (let [{:keys [running system]} @*state
        n (engine/pendulum-count system)
        energy (engine/total-energy system)]
    [ui/column
     ;; Canvas area
     [ui/canvas
      {:on-paint (fn [_ctx ^Canvas canvas _size]
                   (.clear canvas bg-color)
                   (draw-pendulum-system canvas system))}]
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
