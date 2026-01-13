(ns com.micahmartin.pendulums.desktop
  "Desktop GUI using Swing for coupled pendulum simulation."
  (:require [com.micahmartin.pendulums.engine :as engine]
            [com.micahmartin.pendulums.ui :as ui])
  (:import [java.awt Color Graphics2D RenderingHints BasicStroke Dimension BorderLayout Font]
           [java.awt.event MouseAdapter MouseMotionAdapter MouseWheelListener ActionListener]
           [java.awt.geom Ellipse2D$Double Line2D$Double]
           [javax.swing JFrame JPanel JButton JSlider JLabel JOptionPane Timer SwingUtilities UIManager]
           [javax.swing.event ChangeListener]))

;; -----------------------------------------------------------------------------
;; Constants (derived from shared ui.cljc)
;; -----------------------------------------------------------------------------

(def canvas-width ui/default-canvas-width)
(def canvas-height ui/default-canvas-height)
(def pivot-x (/ canvas-width 2.0))
(def pivot-y ui/pivot-y-offset)

;; Convert hex colors to AWT Color objects
(defn- hex->color [hex]
  (let [[r g b] (ui/hex->rgb hex)]
    (Color. (int r) (int g) (int b))))

(def colors (mapv hex->color ui/pendulum-colors))
(def arm-color (hex->color ui/arm-color))
(def bob-outline-color (hex->color ui/bob-outline-color))
(def pivot-color (hex->color ui/pivot-color))
(def bg-color (hex->color ui/bg-color))
(def btn-bg-color (hex->color ui/btn-bg-color))
(def btn-fg-color (hex->color ui/btn-fg-color))

;; -----------------------------------------------------------------------------
;; Coordinate Transformations
;; -----------------------------------------------------------------------------

(defn world->screen
  "Converts world (physics) coordinates to screen coordinates."
  [[wx wy] zoom [pan-x pan-y]]
  [(+ (* (+ pivot-x (* wx ui/scale)) zoom) pan-x)
   (+ (* (- pivot-y (* wy ui/scale)) zoom) pan-y)])

(defn screen->world
  "Converts screen coordinates to world (physics) coordinates."
  [[sx sy] zoom [pan-x pan-y]]
  (let [unzoomed-x (/ (- sx pan-x) zoom)
        unzoomed-y (/ (- sy pan-y) zoom)]
    [(/ (- unzoomed-x pivot-x) ui/scale)
     (/ (- pivot-y unzoomed-y) ui/scale)]))

(defn pivot-screen-pos
  "Returns the screen position of the main pivot point."
  [zoom [pan-x pan-y]]
  [(+ (* pivot-x zoom) pan-x)
   (+ (* pivot-y zoom) pan-y)])

;; -----------------------------------------------------------------------------
;; Application State
;; -----------------------------------------------------------------------------

(defonce *state
  (atom (assoc ui/default-state
               :system (engine/make-system
                         (mapv engine/make-pendulum ui/initial-pendulums)))))

;; -----------------------------------------------------------------------------
;; Simulation Control
;; -----------------------------------------------------------------------------

(defn step-simulation! []
  (let [now (System/currentTimeMillis)]
    (swap! *state
           (fn [{:keys [system trail-duration] :as state}]
             (let [new-system (engine/step system ui/dt)
                   positions (engine/bob-positions new-system)
                   cutoff (- now (* trail-duration 1000))
                   ;; Add new positions to trails and prune old entries
                   new-trails (mapv (fn [idx [x y]]
                                      (let [old-trail (get (:trails state) idx [])
                                            pruned (filter #(> (:time %) cutoff) old-trail)]
                                        (conj (vec pruned) {:pos [x y] :time now})))
                                    (range (count positions))
                                    positions)]
               (assoc state :system new-system :trails new-trails))))))

(defn toggle-simulation! []
  (swap! *state (fn [state]
                  (let [new-running (not (:running state))]
                    (if new-running
                      (assoc state :running true :selected nil :dragging false)
                      (assoc state :running false))))))

(defn reset-simulation! []
  (swap! *state (fn [_]
                  (assoc ui/default-state
                         :system (engine/make-system
                                   (mapv engine/make-pendulum ui/initial-pendulums))))))

(defn add-pendulum! []
  (swap! *state (fn [state]
                  (-> state
                      (update :system engine/add-pendulum (engine/make-pendulum ui/new-pendulum-config))
                      (assoc :trails [])))))

(defn remove-pendulum! []
  (swap! *state (fn [state]
                  (-> state
                      (update :system engine/remove-pendulum)
                      (assoc :trails [])))))

(defn center-view!
  "Resets the view to fit all pendulums centered in the viewport."
  []
  (let [system (:system @*state)
        pendulums (:pendulums system)
        ;; Calculate max extent (sum of all pendulum lengths)
        max-extent (if (seq pendulums)
                     (reduce + 0.0 (map :length pendulums))
                     1.5)
        ;; Convert to pixels at zoom 1.0
        extent-pixels (* max-extent ui/scale)
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
    (swap! *state assoc :zoom fit-zoom :pan [pan-x pan-y])))

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
                base-radius (ui/bob-radius mass)
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

(defn hit-test-angle-display
  "Returns the index of the pendulum whose angle row was clicked, or nil."
  [system mx my]
  (let [pendulums (:pendulums system)
        padding 10
        line-height 20
        header-y (+ padding line-height)
        row-width 180]
    (when (< mx row-width)
      (some (fn [idx]
              (let [row-y (+ header-y (* (inc idx) line-height))
                    top (- row-y 12)
                    bottom (+ row-y 4)]
                (when (and (>= my top) (<= my bottom))
                  idx)))
            (range (count pendulums))))))

(defn prompt-angle-input!
  "Shows a dialog to input a new angle for the pendulum at the given index."
  [idx]
  (let [{:keys [system]} @*state
        pendulum (get-in system [:pendulums idx])
        current-degrees (Math/toDegrees (:theta pendulum))
        input (JOptionPane/showInputDialog
                nil
                (format "Enter angle for pendulum %d (degrees):" (inc idx))
                "Set Angle"
                JOptionPane/PLAIN_MESSAGE
                nil
                nil
                (format "%.2f" current-degrees))]
    (when (and input (not (empty? (str input))))
      (try
        (let [new-degrees (Double/parseDouble (str input))
              new-theta (Math/toRadians new-degrees)]
          (swap! *state update :system engine/set-pendulum-angle idx new-theta))
        (catch NumberFormatException _
          (JOptionPane/showMessageDialog
            nil
            "Please enter a valid number."
            "Invalid Input"
            JOptionPane/ERROR_MESSAGE))))))

(defn handle-mouse-down [mx my button]
  (let [{:keys [running system zoom pan]} @*state]
    (cond
      ;; Right-click or middle-click starts panning
      (or (= button 2) (= button 3))
      (swap! *state assoc :panning true :pan-start [mx my])

      ;; Left-click
      (= button 1)
      (cond
        ;; When not running, check for angle display interaction first
        (and (not running) (hit-test-angle-display system mx my))
        (prompt-angle-input! (hit-test-angle-display system mx my))

        ;; When not running, check for bob selection for dragging
        (and (not running) (hit-test-bob system mx my zoom pan))
        (swap! *state assoc :selected (hit-test-bob system mx my zoom pan) :dragging true)

        ;; Otherwise (empty space), start panning
        :else
        (swap! *state assoc :panning true :pan-start [mx my] :selected nil)))))

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

(defn draw-trails
  "Draws fading trails for each pendulum bob."
  [^Graphics2D g trails trail-duration zoom pan]
  (let [now (System/currentTimeMillis)
        duration-ms (* trail-duration 1000)]
    (.setStroke g (BasicStroke. (float (* 2.0 zoom))))
    (doseq [[idx trail] (map-indexed vector trails)]
      (let [color (nth colors (mod idx (count colors)))]
        (doseq [[i {:keys [pos time]}] (map-indexed vector trail)]
          (let [age (- now time)
                alpha (max 0.0 (- 1.0 (/ (double age) duration-ms)))
                [x y] pos
                [sx sy] (world->screen pos zoom pan)
                radius (* ui/trail-dot-radius zoom)]
            (when (> alpha 0.0)
              (.setColor g (Color. (.getRed color) (.getGreen color) (.getBlue color) (int (* 255 alpha))))
              (.fill g (Ellipse2D$Double. (- sx radius) (- sy radius)
                                          (* 2 radius) (* 2 radius))))))))))

(defn draw-pendulum-system [^Graphics2D g system running zoom pan]
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
              {:keys [mass]} (nth pendulums idx)
              base-radius (ui/bob-radius mass)
              radius (* base-radius zoom)]

          ;; Draw arm
          (.setColor g arm-color)
          (.setStroke g (BasicStroke. (float (* ui/arm-stroke-width zoom))))
          (.draw g (Line2D$Double. prev-x prev-y screen-x screen-y))

          ;; Draw bob
          (.setColor g color)
          (.fill g (Ellipse2D$Double. (- screen-x radius) (- screen-y radius)
                                      (* 2 radius) (* 2 radius)))

          ;; Draw outline
          (.setColor g bob-outline-color)
          (.setStroke g (BasicStroke. (float (* ui/bob-outline-width zoom))))
          (.draw g (Ellipse2D$Double. (- screen-x radius) (- screen-y radius)
                                      (* 2 radius) (* 2 radius)))

          (recur screen-x screen-y (inc idx) (rest bobs)))))

    ;; Draw pivot
    (let [pivot-radius (* ui/pivot-radius zoom)]
      (.setColor g pivot-color)
      (.fill g (Ellipse2D$Double. (- piv-sx pivot-radius) (- piv-sy pivot-radius)
                                  (* 2 pivot-radius) (* 2 pivot-radius))))))

;; -----------------------------------------------------------------------------
;; Angle Display
;; -----------------------------------------------------------------------------

(defn draw-angle-display
  "Draws a tabular display of pendulum angles in the top left of the viewport."
  [^Graphics2D g system]
  (let [pendulums (:pendulums system)
        font (Font. "Monospaced" Font/PLAIN 14)
        padding 10
        line-height 20
        header-y (+ padding line-height)]
    (.setFont g font)
    ;; Header
    (.setColor g (Color. 200 200 200))
    (.drawString g "Pendulum    Angle" padding header-y)
    ;; Draw each pendulum's angle
    (doseq [[idx {:keys [theta]}] (map-indexed vector pendulums)]
      (let [y (+ header-y (* (inc idx) line-height))
            color (nth colors (mod idx (count colors)))
            degrees (Math/toDegrees theta)
            angle-str (format "%+7.2f°" degrees)]
        ;; Draw color indicator
        (.setColor g color)
        (.fillRect g padding (- y 10) 12 12)
        (.setColor g Color/WHITE)
        (.drawRect g padding (- y 10) 12 12)
        ;; Draw label and angle
        (.setColor g (Color. 200 200 200))
        (.drawString g (format "    %d      %s" (inc idx) angle-str) (+ padding 12) y)))))

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
                  (let [{:keys [system running zoom pan trails trail-duration]} @*state]
                    (.setColor g bg-color)
                    (.fillRect g 0 0 canvas-width canvas-height)
                    (draw-trails g trails trail-duration zoom pan)
                    (draw-pendulum-system g system running zoom pan)
                    (draw-angle-display g system))))]
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

(defn create-trail-slider [*state]
  (let [slider (JSlider. 0 100 30)  ; 0-10 seconds, starting at 3s (value / 10)
        label (JLabel. "Trail: 3.0s")]
    (.setBackground slider (Color. 0x1a 0x1a 0x1a))
    (.setForeground label btn-fg-color)
    (.addChangeListener slider
      (reify ChangeListener
        (stateChanged [_ _]
          (let [value (/ (.getValue slider) 10.0)]
            (.setText label (str "Trail: " (format "%.1f" value) "s"))
            (swap! *state assoc :trail-duration value)))))
    {:slider slider :label label}))

(defn create-control-panel [*state canvas play-btn]
  (let [panel (JPanel.)
        {:keys [slider label]} (create-trail-slider *state)]
    (.setBackground panel (Color. 0x1a 0x1a 0x1a))
    (.add panel play-btn)
    (.add panel (create-button "Reset"
                  (fn []
                    (reset-simulation!)
                    (.setText play-btn "Play")
                    (.repaint canvas))))
    (.add panel (create-button "- Pendulum"
                  (fn []
                    (remove-pendulum!)
                    (.repaint canvas))))
    (.add panel (create-button "+ Pendulum"
                  (fn []
                    (add-pendulum!)
                    (.repaint canvas))))
    (.add panel (create-button "Center"
                  (fn []
                    (center-view!)
                    (.repaint canvas))))
    (.add panel label)
    (.add panel slider)
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
