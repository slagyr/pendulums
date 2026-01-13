(ns com.micahmartin.pendulums.swing
  "Desktop GUI using Swing for coupled pendulum simulation."
  (:require [com.micahmartin.pendulums.engine :as engine])
  (:import [java.awt Color Graphics2D RenderingHints BasicStroke Dimension BorderLayout]
           [java.awt.event MouseAdapter MouseMotionAdapter MouseWheelListener ActionListener]
           [java.awt.geom Ellipse2D$Double Line2D$Double]
           [javax.swing JFrame JPanel JButton Timer SwingUtilities UIManager]))

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
;; Coordinate Transformations
;; -----------------------------------------------------------------------------

(defn world->screen
  "Converts world (physics) coordinates to screen coordinates."
  [[wx wy] zoom [pan-x pan-y]]
  [(+ (* (+ pivot-x (* wx scale)) zoom) pan-x)
   (+ (* (- pivot-y (* wy scale)) zoom) pan-y)])

(defn screen->world
  "Converts screen coordinates to world (physics) coordinates."
  [[sx sy] zoom [pan-x pan-y]]
  (let [unzoomed-x (/ (- sx pan-x) zoom)
        unzoomed-y (/ (- sy pan-y) zoom)]
    [(/ (- unzoomed-x pivot-x) scale)
     (/ (- pivot-y unzoomed-y) scale)]))

(defn pivot-screen-pos
  "Returns the screen position of the main pivot point."
  [zoom [pan-x pan-y]]
  [(+ (* pivot-x zoom) pan-x)
   (+ (* pivot-y zoom) pan-y)])

;; -----------------------------------------------------------------------------
;; Application State
;; -----------------------------------------------------------------------------

(defonce *state
  (atom {:system (engine/make-system
                   [(engine/make-pendulum {:theta 0.8 :length 1.5})
                    (engine/make-pendulum {:theta 0.5 :length 1.2})])
         :running false
         :selected nil
         :dragging false
         :zoom 1.0
         :pan [0.0 0.0]
         :panning false
         :pan-start nil}))

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
         :dragging false
         :zoom 1.0
         :pan [0.0 0.0]
         :panning false
         :pan-start nil))

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
  [system zoom pan]
  (mapv (fn [[x y]]
          (world->screen [x y] zoom pan))
        (engine/bob-positions system)))

(defn hit-test-bob
  "Returns index of bob at (mx, my) or nil if none hit."
  [system mx my zoom pan]
  (let [positions (bob-screen-positions system zoom pan)
        pendulums (:pendulums system)]
    (first
      (keep-indexed
        (fn [idx [bx by]]
          (let [{:keys [mass]} (nth pendulums idx)
                base-radius (+ 8.0 (* 4.0 mass))
                radius (* base-radius zoom)
                dx (- mx bx)
                dy (- my by)
                dist (Math/sqrt (+ (* dx dx) (* dy dy)))]
            (when (<= dist (+ radius 5.0))
              idx)))
        positions))))

(defn pivot-for-pendulum
  "Returns the pivot point (screen coords) for pendulum at idx."
  [system idx zoom pan]
  (if (zero? idx)
    (pivot-screen-pos zoom pan)
    (let [positions (bob-screen-positions system zoom pan)]
      (nth positions (dec idx)))))

(defn angle-from-pivot
  "Calculates the angle from pivot to mouse position."
  [[px py] [mx my]]
  (let [dx (- mx px)
        dy (- my py)]
    (Math/atan2 dx dy)))

(defn handle-mouse-down [mx my button]
  (let [{:keys [running system zoom pan]} @*state]
    (cond
      ;; Right-click or middle-click starts panning
      (or (= button 2) (= button 3))
      (swap! *state assoc :panning true :pan-start [mx my])

      ;; Left-click for bob selection (when not running)
      (and (= button 1) (not running))
      (let [hit-idx (hit-test-bob system mx my zoom pan)]
        (if hit-idx
          (swap! *state assoc :selected hit-idx :dragging true)
          (swap! *state assoc :selected nil :dragging false))))))

(defn handle-mouse-move [mx my]
  (let [{:keys [dragging panning running system selected zoom pan pan-start]} @*state]
    (cond
      ;; Handle panning
      panning
      (let [[start-x start-y] pan-start
            [pan-x pan-y] pan
            dx (- mx start-x)
            dy (- my start-y)]
        (swap! *state assoc
               :pan [(+ pan-x dx) (+ pan-y dy)]
               :pan-start [mx my]))

      ;; Handle bob dragging (when not running)
      (and dragging (not running))
      (let [pivot (pivot-for-pendulum system selected zoom pan)
            new-theta (angle-from-pivot pivot [mx my])]
        (swap! *state update :system engine/set-pendulum-angle selected new-theta)))))

(defn handle-mouse-up []
  (swap! *state assoc :dragging false :panning false :pan-start nil))

(defn handle-mouse-wheel
  "Zoom in/out centered on mouse position."
  [mx my rotation]
  (let [{:keys [zoom pan]} @*state
        ;; Zoom factor per wheel notch
        zoom-factor (if (neg? rotation) 1.1 0.9)
        new-zoom (max 0.1 (min 10.0 (* zoom zoom-factor)))
        ;; To zoom centered on mouse position:
        ;; new-pan = mouse - (mouse - pan) * (new-zoom / zoom)
        [pan-x pan-y] pan
        scale-ratio (/ new-zoom zoom)
        new-pan-x (- mx (* scale-ratio (- mx pan-x)))
        new-pan-y (- my (* scale-ratio (- my pan-y)))]
    (swap! *state assoc :zoom new-zoom :pan [new-pan-x new-pan-y])))

;; -----------------------------------------------------------------------------
;; Canvas Rendering
;; -----------------------------------------------------------------------------

(defn draw-pendulum-system [^Graphics2D g system selected running zoom pan]
  (let [positions (engine/bob-positions system)
        pendulums (:pendulums system)
        [piv-sx piv-sy] (pivot-screen-pos zoom pan)]

    ;; Enable antialiasing
    (.setRenderingHint g RenderingHints/KEY_ANTIALIASING RenderingHints/VALUE_ANTIALIAS_ON)

    ;; Draw arms and bobs
    (loop [prev-x piv-sx
           prev-y piv-sy
           idx 0
           bobs positions]
      (when (seq bobs)
        (let [[x y] (first bobs)
              [screen-x screen-y] (world->screen [x y] zoom pan)
              color (nth colors (mod idx (count colors)))
              is-selected (and (not running) (= idx selected))
              {:keys [mass]} (nth pendulums idx)
              base-radius (+ 8.0 (* 4.0 mass))
              radius (* base-radius zoom)]

          ;; Draw arm
          (.setColor g arm-color)
          (.setStroke g (BasicStroke. (float (* 3.0 zoom))))
          (.draw g (Line2D$Double. prev-x prev-y screen-x screen-y))

          ;; Draw bob
          (.setColor g color)
          (.fill g (Ellipse2D$Double. (- screen-x radius) (- screen-y radius)
                                      (* 2 radius) (* 2 radius)))

          ;; Draw outline
          (if is-selected
            (do (.setColor g selected-outline-color)
                (.setStroke g (BasicStroke. (float (* 4.0 zoom)))))
            (do (.setColor g bob-outline-color)
                (.setStroke g (BasicStroke. (float (* 2.0 zoom))))))
          (.draw g (Ellipse2D$Double. (- screen-x radius) (- screen-y radius)
                                      (* 2 radius) (* 2 radius)))

          (recur screen-x screen-y (inc idx) (rest bobs)))))

    ;; Draw pivot
    (let [pivot-radius (* 6.0 zoom)]
      (.setColor g pivot-color)
      (.fill g (Ellipse2D$Double. (- piv-sx pivot-radius) (- piv-sy pivot-radius)
                                  (* 2 pivot-radius) (* 2 pivot-radius))))))

;; -----------------------------------------------------------------------------
;; UI Components
;; -----------------------------------------------------------------------------

(defn create-button [label on-click]
  (doto (JButton. label)
    (.setOpaque true)
    (.setContentAreaFilled true)
    (.setBorderPainted true)
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
                  (let [{:keys [system selected running zoom pan]} @*state]
                    (.setColor g bg-color)
                    (.fillRect g 0 0 canvas-width canvas-height)
                    (draw-pendulum-system g system selected running zoom pan))))]
    (.setPreferredSize panel (Dimension. canvas-width canvas-height))
    (.setBackground panel bg-color)
    (.addMouseListener panel
      (proxy [MouseAdapter] []
        (mousePressed [e]
          (handle-mouse-down (.getX e) (.getY e) (.getButton e))
          (.repaint panel))
        (mouseReleased [e]
          (handle-mouse-up)
          (.repaint panel))))
    (.addMouseMotionListener panel
      (proxy [MouseMotionAdapter] []
        (mouseDragged [e]
          (handle-mouse-move (.getX e) (.getY e))
          (.repaint panel))))
    (.addMouseWheelListener panel
      (reify MouseWheelListener
        (mouseWheelMoved [_ e]
          (handle-mouse-wheel (.getX e) (.getY e) (.getWheelRotation e))
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
  ;; Use cross-platform L&F for consistent button styling
  (try
    (UIManager/setLookAndFeel (UIManager/getCrossPlatformLookAndFeelClassName))
    (catch Exception _))
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
