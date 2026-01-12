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
(def scale 100.0)  ; pixels per meter
(def pivot-x (/ canvas-width 2.0))
(def pivot-y 150.0)
(def dt 0.016)  ; ~60 fps simulation step

;; Colors for pendulum chain (ARGB format - use unchecked-int for Java interop)
(def colors [(unchecked-int 0xFF5c7aea) (unchecked-int 0xFF7c9afa)
             (unchecked-int 0xFF9cbafa) (unchecked-int 0xFFbcdafa)
             (unchecked-int 0xFFdcfafa)])
(def arm-color (unchecked-int 0xFF6a6e89))
(def bob-outline-color (unchecked-int 0xFFffffff))
(def pivot-color (unchecked-int 0xFF9a9aba))
(def bg-color (unchecked-int 0xFF1a1a2e))

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

(ui/defcomp simulation-canvas []
  [ui/canvas
   {:on-paint (fn [_ctx ^Canvas canvas _size]
                (.clear canvas bg-color)
                (draw-pendulum-system canvas (:system @*state)))}])

(ui/defcomp button [label on-click]
  [ui/clickable
   {:on-click (fn [_] (on-click))}
   [ui/padding {:padding 10}
    [ui/label label]]])

(ui/defcomp controls []
  (let [{:keys [running system]} @*state
        n (engine/pendulum-count system)
        energy (engine/total-energy system)]
    [ui/row
     [ui/gap {:width 10}]
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
     [ui/label (format "Energy: %.2f J" energy)]]))

(ui/defcomp app []
  [ui/column
   [ui/rect {:paint (doto (Paint.) (.setColor bg-color))}
    [ui/size {:width canvas-width :height canvas-height}
     [simulation-canvas]]]
   [ui/gap {:height 10}]
   [ui/center
    [controls]]])

;; -----------------------------------------------------------------------------
;; Animation Loop
;; -----------------------------------------------------------------------------

(defonce *window (atom nil))

(defn on-frame [window]
  (when (:running @*state)
    (step-simulation!))
  (window/request-frame window))

;; -----------------------------------------------------------------------------
;; Entry Point
;; -----------------------------------------------------------------------------

(defn -main [& _args]
  (ui/start-app!
    (reset! *window
      (ui/window
        {:title "Pendulums"
         :width (+ canvas-width 40)
         :height (+ canvas-height 100)
         :on-frame on-frame}
        #'app))))
