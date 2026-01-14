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
;; DesktopUI Protocol Implementation
;; -----------------------------------------------------------------------------

(deftype DesktopUI [*state ^Timer timer]
  ui/UI
  (start [_]
    (when-not (:running? @*state)
      (swap! *state ui/prepare-start)))
  (stop [_]
    (swap! *state ui/prepare-stop)))

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
(def text-color (hex->color ui/text-color))


;; -----------------------------------------------------------------------------
;; Application State
;; -----------------------------------------------------------------------------

(defonce *state
  (atom (assoc ui/default-state
               :canvas-width ui/default-canvas-width
               :canvas-height ui/default-canvas-height
               :editing-angle nil
               :angle-input ""
               :ui nil
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
  (if-let [desktop-ui (:ui @*state)]
    (if (:running? @*state)
      (ui/stop desktop-ui)
      (ui/start desktop-ui))
    ;; Fallback if UI not yet initialized
    (swap! *state (fn [state]
                    (let [new-running (not (:running? state))]
                      (if new-running
                        (assoc state :running? true :selected nil :dragging? false)
                        (assoc state :running? false)))))))

;; TODO - MDM: delete me if not used
(defn reset-simulation! []
  (swap! *state (fn [{:keys [canvas-width canvas-height]}]
                  (assoc ui/default-state
                         :canvas-width canvas-width
                         :canvas-height canvas-height
                         :editing-angle nil
                         :angle-input ""
                         :system (engine/make-system
                                   (mapv engine/make-pendulum ui/initial-pendulums))))))

;; TODO - MDM: move to ui
(defn add-pendulum! []
  (swap! *state ui/add-pendulum))

;; TODO - MDM: move to ui
(defn remove-pendulum! []
  (swap! *state ui/remove-pendulum))

;; TODO - MDM: move to ui
(defn center-view! []
  (swap! *state ui/center-view))

;; -----------------------------------------------------------------------------
;; Mouse Interaction
;; -----------------------------------------------------------------------------

;; TODO - MDM: move to ui
(defn cancel-angle-edit! []
  (swap! *state ui/cancel-angle-edit))

(defn submit-angle-edit! []
  (let [{:keys [editing-angle angle-input]} @*state]
    (if editing-angle
      (try
        (swap! *state ui/submit-angle-edit (Double/parseDouble angle-input))
        (catch NumberFormatException _
          (cancel-angle-edit!)))
      (cancel-angle-edit!))))

(defn handle-mouse-down [mx my button]
  (cond
    ;; Right-click or middle-click starts panning
    (or (= button 2) (= button 3))
    (swap! *state assoc :panning? true :pan-start [mx my])

    ;; Left-click uses shared handler
    (= button 1)
    (swap! *state ui/handle-mouse-down mx my)))

;; TODO - MDM: move to ui with a !
(defn handle-mouse-move [mx my]
  (swap! *state ui/handle-mouse-move mx my))

;; TODO - MDM: move to ui with a !
(defn handle-mouse-up []
  (swap! *state ui/handle-mouse-up))

;; TODO - MDM: move to ui with a !
(defn handle-mouse-wheel [mx my rotation]
  (swap! *state ui/handle-mouse-wheel mx my rotation))

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
        header-y (+ ui/angle-display-padding ui/angle-display-line-height)]
    (.setFont g font)
    ;; Header
    (.setColor g text-color)
    (.drawString g "Pendulum    Angle" ui/angle-display-padding header-y)
    ;; Draw each pendulum's angle
    (doseq [[idx {:keys [theta]}] (map-indexed vector pendulums)]
      (let [y (+ header-y (* (inc idx) ui/angle-display-line-height))
            color (nth colors (mod idx (count colors)))
            display-angle (ui/normalize-angle theta)
            angle-str (format "%7.2f°" display-angle)
            is-editing (= idx editing-angle)]
        ;; Draw color indicator
        (.setColor g color)
        (.fillRect g ui/angle-display-padding (- y 10) 12 12)
        (.setColor g bob-outline-color)
        (.drawRect g ui/angle-display-padding (- y 10) 12 12)
        ;; Draw label and angle (skip angle value if editing)
        (.setColor g text-color)
        (if is-editing
          (.drawString g (format "    %d      " (inc idx)) (+ ui/angle-display-padding 12) y)
          (.drawString g (format "    %d      %s" (inc idx) angle-str) (+ ui/angle-display-padding 12) y))))))

;; -----------------------------------------------------------------------------
;; UI Components
;; -----------------------------------------------------------------------------

;; Colors for overlay buttons
(def play-color (Color. 34 197 94))      ; Green for play
(def pause-color (Color. 245 158 11))    ; Orange for pause
(def overlay-btn-color (Color. 64 64 64 200))  ; Semi-transparent gray

(defn create-circular-button
  "Creates a circular button with custom rendering."
  [diameter bg-color fg-color text on-click]
  (let [btn (proxy [JButton] []
              (paintComponent [^Graphics2D g]
                (.setRenderingHint g RenderingHints/KEY_ANTIALIASING RenderingHints/VALUE_ANTIALIAS_ON)
                (let [w (.getWidth this)
                      h (.getHeight this)
                      bg (if (.getModel this)
                           (if (.isPressed (.getModel this))
                             (.darker bg-color)
                             bg-color)
                           bg-color)]
                  (.setColor g bg)
                  (.fillOval g 0 0 (dec w) (dec h))
                  (.setColor g fg-color)
                  (.setFont g (Font. "Dialog" Font/PLAIN 18))
                  (let [fm (.getFontMetrics g)
                        tw (.stringWidth fm text)
                        th (.getHeight fm)
                        tx (/ (- w tw) 2)
                        ty (+ (/ (- h th) 2) (.getAscent fm))]
                    (.drawString g text (int tx) (int ty))))))]
    (doto btn
      (.setPreferredSize (Dimension. diameter diameter))
      (.setSize diameter diameter)
      (.setContentAreaFilled false)
      (.setBorderPainted false)
      (.setFocusPainted false)
      (.addActionListener
        (reify ActionListener
          (actionPerformed [_ _] (on-click)))))))

(defn create-small-button
  "Creates a small rectangular button for +/- controls."
  [text on-click]
  (let [btn (proxy [JButton] []
              (paintComponent [^Graphics2D g]
                (.setRenderingHint g RenderingHints/KEY_ANTIALIASING RenderingHints/VALUE_ANTIALIAS_ON)
                (let [w (.getWidth this)
                      h (.getHeight this)
                      bg (if (and (.getModel this) (.isPressed (.getModel this)))
                           (.darker overlay-btn-color)
                           overlay-btn-color)]
                  (.setColor g bg)
                  (.fillRoundRect g 0 0 (dec w) (dec h) 6 6)
                  (.setColor g Color/WHITE)
                  (.setFont g (Font. "Dialog" Font/BOLD 14))
                  (let [fm (.getFontMetrics g)
                        tw (.stringWidth fm text)
                        tx (/ (- w tw) 2)
                        ty (+ (/ (- h (.getHeight fm)) 2) (.getAscent fm))]
                    (.drawString g text (int tx) (int ty))))))]
    (doto btn
      (.setPreferredSize (Dimension. 28 24))
      (.setSize 28 24)
      (.setContentAreaFilled false)
      (.setBorderPainted false)
      (.setFocusPainted false)
      (.addActionListener
        (reify ActionListener
          (actionPerformed [_ _] (on-click)))))))

(defn create-canvas [*state]
  (let [;; Create the inline angle input field
        angle-input-field (doto (JTextField. 8)
                            (.setFont (Font. "Monospaced" Font/PLAIN 12))
                            (.setBackground (Color. 0x30 0x30 0x30))
                            (.setForeground text-color)
                            (.setBorder (javax.swing.BorderFactory/createLineBorder btn-bg-color))
                            (.setVisible false))

        ;; Play/Pause button (bottom center)
        play-btn (atom nil)
        update-play-btn! (fn []
                           (when @play-btn
                             (.repaint @play-btn)))

        ;; Pendulum count label
        count-label (doto (JLabel. "2 pendulums")
                      (.setForeground text-color)
                      (.setFont (Font. "Dialog" Font/PLAIN 12)))

        ;; Trail duration label
        trail-label (doto (JLabel. "3.0s")
                      (.setForeground text-color)
                      (.setFont (Font. "Dialog" Font/PLAIN 12)))

        ;; Trail slider
        trail-slider (doto (JSlider. 0 100 30)
                       (.setOpaque false)
                       (.setPreferredSize (Dimension. 80 20)))

        panel (proxy [JPanel] []
                (paintComponent [^Graphics2D g]
                  (proxy-super paintComponent g)
                  (let [{:keys [system running? zoom pan trails trail-duration canvas-width canvas-height editing-angle]} @*state]
                    (.setColor g bg-color)
                    (.fillRect g 0 0 canvas-width canvas-height)
                    (draw-trails g trails trail-duration zoom pan canvas-width)
                    (draw-pendulum-system g system running? zoom pan canvas-width)
                    (draw-angle-display g system editing-angle))))

        ;; Function to reposition controls when canvas resizes
        reposition-controls! (fn [w h]
                               (when (and (pos? w) (pos? h) @play-btn)
                                 ;; Play button: bottom center
                                 (.setBounds @play-btn (- (/ w 2) 24) (- h 68) 48 48)
                                 ;; Center button position set below
                                 ))

        ;; Create overlay buttons (after panel is defined so we can reference it)
        minus-btn (create-small-button "-"
                    (fn []
                      (remove-pendulum!)
                      (let [n (engine/pendulum-count (:system @*state))]
                        (.setText count-label (str n " pendulums")))
                      (.repaint panel)))
        plus-btn (create-small-button "+"
                   (fn []
                     (add-pendulum!)
                     (let [n (engine/pendulum-count (:system @*state))]
                       (.setText count-label (str n " pendulums")))
                     (.repaint panel)))
        center-btn (create-circular-button 36 overlay-btn-color Color/WHITE "◎"
                     (fn []
                       (center-view!)
                       (.repaint panel)))]

    ;; Create play button with dynamic color
    (reset! play-btn
      (let [btn (proxy [JButton] []
                  (paintComponent [^Graphics2D g]
                    (.setRenderingHint g RenderingHints/KEY_ANTIALIASING RenderingHints/VALUE_ANTIALIAS_ON)
                    (let [w (.getWidth this)
                          h (.getHeight this)
                          running (:running? @*state)
                          base-color (if running pause-color play-color)
                          bg (if (and (.getModel this) (.isPressed (.getModel this)))
                               (.darker base-color)
                               base-color)
                          symbol (if running "⏸" "▶")]
                      (.setColor g bg)
                      (.fillOval g 0 0 (dec w) (dec h))
                      (.setColor g Color/BLACK)
                      (.setFont g (Font. "Dialog" Font/PLAIN 18))
                      (let [fm (.getFontMetrics g)
                            tw (.stringWidth fm symbol)
                            th (.getHeight fm)
                            tx (/ (- w tw) 2)
                            ty (+ (/ (- h th) 2) (.getAscent fm))]
                        (.drawString g symbol (int (+ tx (if running 0 2))) (int ty))))))]
        (doto btn
          (.setPreferredSize (Dimension. 48 48))
          (.setSize 48 48)
          (.setContentAreaFilled false)
          (.setBorderPainted false)
          (.setFocusPainted false)
          (.addActionListener
            (reify ActionListener
              (actionPerformed [_ _]
                (toggle-simulation!)
                (.repaint panel)))))))

    ;; Configure trail slider
    (.addChangeListener trail-slider
      (reify ChangeListener
        (stateChanged [_ _]
          (let [value (/ (.getValue trail-slider) 10.0)]
            (.setText trail-label (format "%.1fs" value))
            (swap! *state assoc :trail-duration value)))))

    ;; Use null layout for absolute positioning
    (.setLayout panel nil)
    (.setPreferredSize panel (Dimension. ui/default-canvas-width ui/default-canvas-height))
    (.setBackground panel bg-color)

    ;; Add all overlay controls to panel
    (.add panel angle-input-field)
    (.add panel @play-btn)
    (.add panel center-btn)
    (.add panel minus-btn)
    (.add panel count-label)
    (.add panel plus-btn)
    (.add panel (doto (JLabel. "Trail:")
                  (.setForeground text-color)
                  (.setFont (Font. "Dialog" Font/PLAIN 12))
                  (.setBounds 0 0 40 20)))  ; Will be repositioned
    (.add panel trail-slider)
    (.add panel trail-label)

    ;; Store references for repositioning
    (let [trail-text-label (.. panel (getComponent 6))]  ; "Trail:" label

      ;; Add key listener to the input field
      (.addKeyListener angle-input-field
        (proxy [KeyAdapter] []
          (keyPressed [e]
            (condp = (.getKeyCode e)
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
                (let [header-y (+ ui/angle-display-padding ui/angle-display-line-height)
                      row-y (+ header-y (* (inc new-editing) ui/angle-display-line-height))
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
                (swap! *state assoc :canvas-width w :canvas-height h)
                ;; Reposition overlay controls
                ;; Play button: bottom center
                (.setBounds @play-btn (- (/ w 2) 24) (- h 68) 48 48)
                ;; Center button: top right
                (.setBounds center-btn (- w 46) 10 36 36)
                ;; Add/remove controls: top center
                (let [total-width 120  ; approx width of - count +
                      start-x (- (/ w 2) (/ total-width 2))]
                  (.setBounds minus-btn (int start-x) 10 28 24)
                  (.setBounds count-label (int (+ start-x 32)) 12 70 20)
                  (.setBounds plus-btn (int (+ start-x 95)) 10 28 24))
                ;; Trail controls: below add/remove
                (let [start-x (- (/ w 2) 70)]
                  (.setBounds trail-text-label (int start-x) 42 40 20)
                  (.setBounds trail-slider (int (+ start-x 40)) 40 80 20)
                  (.setBounds trail-label (int (+ start-x 125)) 42 35 20)))))))

      ;; Initial positioning
      (let [w ui/default-canvas-width
            h ui/default-canvas-height]
        (.setBounds @play-btn (- (/ w 2) 24) (- h 68) 48 48)
        (.setBounds center-btn (- w 46) 10 36 36)
        (let [total-width 120
              start-x (- (/ w 2) (/ total-width 2))]
          (.setBounds minus-btn (int start-x) 10 28 24)
          (.setBounds count-label (int (+ start-x 32)) 12 70 20)
          (.setBounds plus-btn (int (+ start-x 95)) 10 28 24))
        (let [start-x (- (/ w 2) 70)]
          (.setBounds trail-text-label (int start-x) 42 40 20)
          (.setBounds trail-slider (int (+ start-x 40)) 40 80 20)
          (.setBounds trail-label (int (+ start-x 125)) 42 35 20))))

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
            timer (Timer. 16
                    (reify ActionListener
                      (actionPerformed [_ _]
                        (when (:running? @*state)
                          (step-simulation!)
                          (.repaint canvas)))))
            desktop-ui (DesktopUI. *state timer)]

        ;; Store UI instance in state
        (swap! *state assoc :ui desktop-ui)

        ;; Build UI - canvas fills the entire frame
        (.add (.getContentPane frame) canvas BorderLayout/CENTER)

        ;; Start animation timer
        (.start timer)

        ;; Start simulation automatically (like web UI)
        (ui/start desktop-ui)

        ;; Configure and show frame
        (.setDefaultCloseOperation frame JFrame/EXIT_ON_CLOSE)
        (.pack frame)
        (.setLocationRelativeTo frame nil)
        (.setVisible frame true)))))
