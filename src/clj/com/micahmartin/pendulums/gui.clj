(ns com.micahmartin.pendulums.gui
  "Desktop GUI using HumbleUI for coupled pendulum simulation."
  (:require [com.micahmartin.pendulums.engine :as engine]
            [io.github.humbleui.ui :as ui])
  (:import [io.github.humbleui.skija Canvas Paint PaintMode]
           [io.github.humbleui.types IPoint]))

;; -----------------------------------------------------------------------------
;; Constants
;; -----------------------------------------------------------------------------

(def canvas-width 800)
(def canvas-height 600)
(def scale 100.0)  ; pixels per meter
(def pivot-x (/ canvas-width 2.0))
(def pivot-y 150.0)
(def dt 0.016)  ; ~60 fps simulation step

;; Colors for pendulum chain (ARGB format)
(def colors [0xFF5c7aea 0xFF7c9afa 0xFF9cbafa 0xFFbcdafa 0xFFdcfafa])
(def arm-color 0xFF6a6e89)
(def bob-outline-color 0xFFffffff)
(def pivot-color 0xFF9a9aba)

;; -----------------------------------------------------------------------------
;; Application State
;; -----------------------------------------------------------------------------

(defonce *state
  (atom {:system (engine/make-system
                   [(engine/make-pendulum {:theta 0.8 :length 1.5})
                    (engine/make-pendulum {:theta 0.5 :length 1.2})])
         :running false}))

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
        arm-paint (doto (Paint.) (.setColor arm-color) (.setMode PaintMode/STROKE) (.setStrokeWidth 3))
        bob-paint (Paint.)
        outline-paint (doto (Paint.) (.setColor bob-outline-color) (.setMode PaintMode/STROKE) (.setStrokeWidth 2))
        pivot-paint (doto (Paint.) (.setColor pivot-color))]

    ;; Draw from pivot through each bob
    (loop [prev-x pivot-x
           prev-y pivot-y
           idx 0
           bobs positions]
      (when (seq bobs)
        (let [[x y] (first bobs)
              screen-x (+ pivot-x (* x scale))
              screen-y (- pivot-y (* y scale))  ; flip y for screen coords
              color (nth colors (mod idx (count colors)))]

          ;; Draw arm
          (.drawLine canvas prev-x prev-y screen-x screen-y arm-paint)

          ;; Draw bob
          (let [{:keys [mass]} (nth pendulums idx)
                radius (+ 8.0 (* 4.0 mass))]
            (.setColor bob-paint color)
            (.drawCircle canvas screen-x screen-y radius bob-paint)
            (.drawCircle canvas screen-x screen-y radius outline-paint))

          (recur screen-x screen-y (inc idx) (rest bobs)))))

    ;; Draw pivot point
    (.drawCircle canvas pivot-x pivot-y 6.0 pivot-paint)))

;; -----------------------------------------------------------------------------
;; UI Components
;; -----------------------------------------------------------------------------

(def simulation-canvas
  (ui/canvas
    {:on-paint (fn [_ ^Canvas canvas _size]
                 (.clear canvas 0xFF1a1a2e)
                 (draw-pendulum-system canvas (:system @*state)))}))

(defn button [label on-click]
  (ui/clickable
    {:on-click (fn [_] (on-click))}
    (ui/rect (Paint.) ; will be styled
      (ui/padding 10 5
        (ui/label label)))))

(def controls
  (ui/dynamic _ctx [state @*state]
    (let [{:keys [running system]} state
          n (engine/pendulum-count system)
          energy (engine/total-energy system)]
      (ui/row
        (ui/gap 10 0)
        (button (if running "Pause" "Play") toggle-simulation!)
        (ui/gap 10 0)
        (button "Reset" reset-simulation!)
        (ui/gap 10 0)
        (button "+ Pendulum" add-pendulum!)
        (ui/gap 10 0)
        (button "- Pendulum" remove-pendulum!)
        (ui/gap 20 0)
        (ui/label (str "Pendulums: " n))
        (ui/gap 20 0)
        (ui/label (format "Energy: %.2f J" energy))))))

(def app
  (ui/default-theme {}
    (ui/column
      (ui/rect (doto (Paint.) (.setColor 0xFF1a1a2e))
        (ui/width canvas-width
          (ui/height canvas-height
            simulation-canvas)))
      (ui/gap 0 10)
      (ui/center
        controls))))

;; -----------------------------------------------------------------------------
;; Animation Loop
;; -----------------------------------------------------------------------------

(defn animation-loop [window]
  (when window
    (when (:running @*state)
      (step-simulation!))
    (ui/schedule-frame window)
    (.requestFrame window)))

;; -----------------------------------------------------------------------------
;; Entry Point
;; -----------------------------------------------------------------------------

(defn -main [& _args]
  (ui/start-app!
    (ui/window
      {:title "Pendulums"
       :width (+ canvas-width 40)
       :height (+ canvas-height 100)
       :on-frame animation-loop}
      app)))
