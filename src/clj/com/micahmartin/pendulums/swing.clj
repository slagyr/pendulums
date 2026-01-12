(ns com.micahmartin.pendulums.swing
  "Desktop GUI using Swing for coupled pendulum simulation."
  (:require [com.micahmartin.pendulums.engine :as engine])
  (:import [java.awt Color Graphics2D RenderingHints BasicStroke Dimension BorderLayout]
           [java.awt.event MouseAdapter MouseMotionAdapter ActionListener]
           [java.awt.geom Ellipse2D$Double Line2D$Double]
           [javax.swing JFrame JPanel JButton Timer SwingUtilities]))

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
(def colors [(Color. 0xef 0x44 0x44)
             (Color. 0xf9 0x73 0x16)
             (Color. 0xea 0xb3 0x08)
             (Color. 0x84 0xcc 0x16)
             (Color. 0x22 0xc5 0x5e)])
(def arm-color (Color. 0x52 0x52 0x52))
(def bob-outline-color Color/WHITE)
(def selected-outline-color (Color. 0xf5 0x9e 0x0b))
(def pivot-color (Color. 0x73 0x73 0x73))
(def bg-color (Color. 0x12 0x12 0x12))
(def btn-bg-color (Color. 0x40 0x40 0x40))
(def btn-fg-color Color/WHITE)

;; -----------------------------------------------------------------------------
;; Application State
;; -----------------------------------------------------------------------------

(defonce *state
  (atom {:system (engine/make-system
                   [(engine/make-pendulum {:theta 0.8 :length 1.5})
                    (engine/make-pendulum {:theta 0.5 :length 1.2})])
         :running false
         :selected nil
         :dragging false}))

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

(defn draw-pendulum-system [^Graphics2D g system selected running]
  (let [positions (engine/bob-positions system)
        pendulums (:pendulums system)]

    ;; Enable antialiasing
    (.setRenderingHint g RenderingHints/KEY_ANTIALIASING RenderingHints/VALUE_ANTIALIAS_ON)

    ;; Draw arms and bobs
    (loop [prev-x pivot-x
           prev-y pivot-y
           idx 0
           bobs positions]
      (when (seq bobs)
        (let [[x y] (first bobs)
              screen-x (+ pivot-x (* x scale))
              screen-y (- pivot-y (* y scale))
              color (nth colors (mod idx (count colors)))
              is-selected (and (not running) (= idx selected))
              {:keys [mass]} (nth pendulums idx)
              radius (+ 8.0 (* 4.0 mass))]

          ;; Draw arm
          (.setColor g arm-color)
          (.setStroke g (BasicStroke. 3.0))
          (.draw g (Line2D$Double. prev-x prev-y screen-x screen-y))

          ;; Draw bob
          (.setColor g color)
          (.fill g (Ellipse2D$Double. (- screen-x radius) (- screen-y radius)
                                      (* 2 radius) (* 2 radius)))

          ;; Draw outline
          (if is-selected
            (do (.setColor g selected-outline-color)
                (.setStroke g (BasicStroke. 4.0)))
            (do (.setColor g bob-outline-color)
                (.setStroke g (BasicStroke. 2.0))))
          (.draw g (Ellipse2D$Double. (- screen-x radius) (- screen-y radius)
                                      (* 2 radius) (* 2 radius)))

          (recur screen-x screen-y (inc idx) (rest bobs)))))

    ;; Draw pivot
    (.setColor g pivot-color)
    (.fill g (Ellipse2D$Double. (- pivot-x 6) (- pivot-y 6) 12 12))))

;; -----------------------------------------------------------------------------
;; UI Components
;; -----------------------------------------------------------------------------

(defn create-button [label on-click]
  (doto (JButton. label)
    (.setBackground btn-bg-color)
    (.setForeground btn-fg-color)
    (.setFocusPainted false)
    (.addActionListener
      (reify ActionListener
        (actionPerformed [_ _] (on-click))))))

(defn create-canvas [*state]
  (let [panel (proxy [JPanel] []
                (paintComponent [^Graphics2D g]
                  (proxy-super paintComponent g)
                  (let [{:keys [system selected running]} @*state]
                    (.setColor g bg-color)
                    (.fillRect g 0 0 canvas-width canvas-height)
                    (draw-pendulum-system g system selected running))))]
    (.setPreferredSize panel (Dimension. canvas-width canvas-height))
    (.setBackground panel bg-color)
    (.addMouseListener panel
      (proxy [MouseAdapter] []
        (mousePressed [e]
          (handle-mouse-down (.getX e) (.getY e))
          (.repaint panel))
        (mouseReleased [e]
          (handle-mouse-up)
          (.repaint panel))))
    (.addMouseMotionListener panel
      (proxy [MouseMotionAdapter] []
        (mouseDragged [e]
          (handle-mouse-move (.getX e) (.getY e))
          (.repaint panel))))
    panel))

(defn create-control-panel [*state canvas play-btn]
  (let [panel (JPanel.)]
    (.setBackground panel (Color. 0x1a 0x1a 0x1a))
    (.add panel play-btn)
    (.add panel (create-button "Reset"
                  (fn []
                    (reset-simulation!)
                    (.setText play-btn "Play")
                    (.repaint canvas))))
    (.add panel (create-button "+ Pendulum"
                  (fn []
                    (add-pendulum!)
                    (.repaint canvas))))
    (.add panel (create-button "- Pendulum"
                  (fn []
                    (remove-pendulum!)
                    (.repaint canvas))))
    panel))

;; -----------------------------------------------------------------------------
;; Entry Point
;; -----------------------------------------------------------------------------

(defn -main [& _args]
  (SwingUtilities/invokeLater
    (fn []
      (let [frame (JFrame. "Pendulums")
            canvas (create-canvas *state)
            play-btn (create-button "Play" (fn []))
            timer (Timer. 16
                    (reify ActionListener
                      (actionPerformed [_ _]
                        (when (:running @*state)
                          (step-simulation!)
                          (.repaint canvas)))))]

        ;; Configure play button action
        (.addActionListener play-btn
          (reify ActionListener
            (actionPerformed [_ _]
              (toggle-simulation!)
              (.setText play-btn (if (:running @*state) "Pause" "Play"))
              (.repaint canvas))))

        ;; Build UI
        (.add (.getContentPane frame) canvas BorderLayout/CENTER)
        (.add (.getContentPane frame) (create-control-panel *state canvas play-btn) BorderLayout/SOUTH)

        ;; Start animation timer
        (.start timer)

        ;; Configure and show frame
        (.setDefaultCloseOperation frame JFrame/EXIT_ON_CLOSE)
        (.pack frame)
        (.setLocationRelativeTo frame nil)
        (.setVisible frame true)))))
