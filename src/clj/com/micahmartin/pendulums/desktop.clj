(ns com.micahmartin.pendulums.desktop
  "Desktop GUI using Swing for coupled pendulum simulation."
  (:require [com.micahmartin.pendulums.engine :as engine]
            [com.micahmartin.pendulums.ui :as ui])
  (:import [java.awt Color Graphics2D RenderingHints BasicStroke Dimension BorderLayout Font]
           [java.awt.event MouseAdapter MouseMotionAdapter MouseWheelListener ActionListener ComponentAdapter KeyAdapter KeyEvent]
           [java.awt.geom Ellipse2D$Double Line2D$Double]
           [javax.swing JFrame JPanel JButton JSlider JLabel JTextField Timer SwingUtilities UIManager]
           [javax.swing.event ChangeListener DocumentListener]))

;; -----------------------------------------------------------------------------
;; Constants (derived from shared ui.cljc)
;; -----------------------------------------------------------------------------

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
;; Application State
;; -----------------------------------------------------------------------------

(defonce *state
  (atom (assoc ui/default-state
               :canvas-width ui/default-canvas-width
               :canvas-height ui/default-canvas-height
               :editing-angle nil
               :angle-input ""
               :system (engine/make-system
                         (mapv engine/make-pendulum ui/initial-pendulums)))))

;; -----------------------------------------------------------------------------
;; Simulation Control
;; -----------------------------------------------------------------------------

(defn step-simulation! []
  (let [now (System/currentTimeMillis)]
    (swap! *state
           (fn [{:keys [system trail-duration trails] :as state}]
             (let [[new-system new-trails] (engine/step-with-trails system ui/dt trail-duration trails now)]
               (assoc state :system new-system :trails new-trails))))))

(defn toggle-simulation! []
  (swap! *state (fn [state]
                  (let [new-running (not (:running state))]
                    (if new-running
                      (assoc state :running true :selected nil :dragging false)
                      (assoc state :running false))))))

(defn reset-simulation! []
  (swap! *state (fn [{:keys [canvas-width canvas-height]}]
                  (assoc ui/default-state
                         :canvas-width canvas-width
                         :canvas-height canvas-height
                         :editing-angle nil
                         :angle-input ""
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
  (let [{:keys [system canvas-width canvas-height]} @*state
        pendulums (:pendulums system)
        [pivot-x pivot-y] (ui/get-pivot canvas-width)
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

(defn start-angle-edit!
  "Starts inline editing of the angle for the pendulum at the given index."
  [idx]
  (let [{:keys [system]} @*state
        pendulum (get-in system [:pendulums idx])
        display-angle (ui/normalize-angle (:theta pendulum))]
    (swap! *state assoc
           :editing-angle idx
           :angle-input (format "%.2f" display-angle))))

(defn cancel-angle-edit! []
  (swap! *state assoc :editing-angle nil :angle-input ""))

(defn submit-angle-edit! []
  (let [{:keys [editing-angle angle-input]} @*state]
    (when editing-angle
      (try
        (let [display-angle (Double/parseDouble angle-input)
              new-theta (ui/display-angle->theta display-angle)]
          (swap! *state update :system engine/set-pendulum-angle editing-angle new-theta))
        (catch NumberFormatException _)))
    (cancel-angle-edit!)))

(defn handle-mouse-down [mx my button]
  (let [{:keys [running system zoom pan canvas-width]} @*state]
    (cond
      ;; Right-click or middle-click starts panning
      (or (= button 2) (= button 3))
      (swap! *state assoc :panning true :pan-start [mx my])

      ;; Left-click
      (= button 1)
      (cond
        ;; When not running, check for angle display interaction first
        (and (not running) (hit-test-angle-display system mx my))
        (start-angle-edit! (hit-test-angle-display system mx my))

        ;; When not running, check for bob selection for dragging
        (and (not running) (ui/hit-test-bob system mx my zoom pan canvas-width))
        (swap! *state assoc :selected (ui/hit-test-bob system mx my zoom pan canvas-width) :dragging true)

        ;; Otherwise (empty space), start panning
        :else
        (swap! *state assoc :panning true :pan-start [mx my] :selected nil)))))

(defn handle-mouse-move [mx my]
  (let [{:keys [dragging panning running system selected zoom pan pan-start canvas-width]} @*state]
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
      (let [pivot (ui/pivot-for-pendulum system selected zoom pan canvas-width)
            new-theta (ui/angle-from-pivot pivot [mx my])]
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
  [^Graphics2D g trails trail-duration zoom pan canvas-width]
  (let [now (System/currentTimeMillis)
        duration-ms (* trail-duration 1000)]
    (.setStroke g (BasicStroke. (float (* 2.0 zoom))))
    (doseq [[idx trail] (map-indexed vector trails)]
      (let [color (nth colors (mod idx (count colors)))]
        (doseq [[i {:keys [pos time]}] (map-indexed vector trail)]
          (let [age (- now time)
                alpha (max 0.0 (- 1.0 (/ (double age) duration-ms)))
                [x y] pos
                [sx sy] (ui/world->screen pos zoom pan canvas-width)
                radius (* ui/trail-dot-radius zoom)]
            (when (> alpha 0.0)
              (.setColor g (Color. (.getRed color) (.getGreen color) (.getBlue color) (int (* 255 alpha))))
              (.fill g (Ellipse2D$Double. (- sx radius) (- sy radius)
                                          (* 2 radius) (* 2 radius))))))))))

(defn draw-pendulum-system [^Graphics2D g system running zoom pan canvas-width]
  (let [positions (engine/bob-positions system)
        pendulums (:pendulums system)
        [piv-sx piv-sy] (ui/pivot-screen-pos zoom pan canvas-width)]

    ;; Enable antialiasing
    (.setRenderingHint g RenderingHints/KEY_ANTIALIASING RenderingHints/VALUE_ANTIALIAS_ON)

    ;; Draw arms and bobs
    (loop [prev-x piv-sx
           prev-y piv-sy
           idx 0
           bobs positions]
      (when (seq bobs)
        (let [[x y] (first bobs)
              [screen-x screen-y] (ui/world->screen [x y] zoom pan canvas-width)
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
  [^Graphics2D g system editing-angle]
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
            display-angle (ui/normalize-angle theta)
            angle-str (format "%7.2f°" display-angle)
            is-editing (= idx editing-angle)]
        ;; Draw color indicator
        (.setColor g color)
        (.fillRect g padding (- y 10) 12 12)
        (.setColor g Color/WHITE)
        (.drawRect g padding (- y 10) 12 12)
        ;; Draw label and angle (skip angle value if editing)
        (.setColor g (Color. 200 200 200))
        (if is-editing
          (.drawString g (format "    %d      " (inc idx)) (+ padding 12) y)
          (.drawString g (format "    %d      %s" (inc idx) angle-str) (+ padding 12) y))))))

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
  (let [;; Create the inline angle input field
        angle-input-field (doto (JTextField. 8)
                            (.setFont (Font. "Monospaced" Font/PLAIN 12))
                            (.setBackground (Color. 0x30 0x30 0x30))
                            (.setForeground (Color. 0xc8 0xc8 0xc8))
                            (.setBorder (javax.swing.BorderFactory/createLineBorder (Color. 0x40 0x40 0x40)))
                            (.setVisible false))
        panel (proxy [JPanel] []
                (paintComponent [^Graphics2D g]
                  (proxy-super paintComponent g)
                  (let [{:keys [system running zoom pan trails trail-duration canvas-width canvas-height editing-angle]} @*state]
                    (.setColor g bg-color)
                    (.fillRect g 0 0 canvas-width canvas-height)
                    (draw-trails g trails trail-duration zoom pan canvas-width)
                    (draw-pendulum-system g system running zoom pan canvas-width)
                    (draw-angle-display g system editing-angle))))]
    ;; Use null layout for absolute positioning of the text field
    (.setLayout panel nil)
    (.add panel angle-input-field)
    (.setPreferredSize panel (Dimension. ui/default-canvas-width ui/default-canvas-height))
    (.setBackground panel bg-color)

    ;; Add key listener to the input field
    (.addKeyListener angle-input-field
      (proxy [KeyAdapter] []
        (keyPressed [e]
          (case (.getKeyCode e)
            KeyEvent/VK_ENTER (do
                                (submit-angle-edit!)
                                (.setVisible angle-input-field false)
                                (.repaint panel))
            KeyEvent/VK_ESCAPE (do
                                 (cancel-angle-edit!)
                                 (.setVisible angle-input-field false)
                                 (.repaint panel))
            nil))))

    ;; Add document listener to sync text field with state
    (.addDocumentListener (.getDocument angle-input-field)
      (reify DocumentListener
        (insertUpdate [_ _] (swap! *state assoc :angle-input (.getText angle-input-field)))
        (removeUpdate [_ _] (swap! *state assoc :angle-input (.getText angle-input-field)))
        (changedUpdate [_ _] nil)))

    ;; Watch state to show/hide and update the input field
    (add-watch *state :angle-input-watcher
      (fn [_ _ old-state new-state]
        (let [old-editing (:editing-angle old-state)
              new-editing (:editing-angle new-state)]
          (when (not= old-editing new-editing)
            (if new-editing
              ;; Show the input field positioned at the correct row
              (let [padding 10
                    line-height 20
                    header-y (+ padding line-height)
                    row-y (+ header-y (* (inc new-editing) line-height))
                    input-x 75  ; After "X     " text
                    input-y (- row-y 14)]
                (.setText angle-input-field (:angle-input new-state))
                (.setBounds angle-input-field input-x input-y 70 18)
                (.setVisible angle-input-field true)
                (.requestFocus angle-input-field)
                (.selectAll angle-input-field))
              ;; Hide the input field
              (.setVisible angle-input-field false))
            (.repaint panel)))))

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
    (.addComponentListener panel
      (proxy [ComponentAdapter] []
        (componentResized [e]
          (let [w (.getWidth panel)
                h (.getHeight panel)]
            (when (and (pos? w) (pos? h))
              (swap! *state assoc :canvas-width w :canvas-height h))))))
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
