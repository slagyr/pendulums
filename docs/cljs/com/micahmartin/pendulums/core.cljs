(ns com.micahmartin.pendulums.core
  "Web UI entry point using Reagent."
  (:require [c3kit.apron.time :as time]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            [com.micahmartin.pendulums.engine :as engine]
            [com.micahmartin.pendulums.ui :as ui]))

;; -----------------------------------------------------------------------------
;; Constants (derived from shared ui.cljc)
;; -----------------------------------------------------------------------------

(def colors ui/pendulum-colors-css)


;; -----------------------------------------------------------------------------
;; Application State
;; -----------------------------------------------------------------------------

(defonce app-state
  (r/atom (merge ui/default-state
                 {:animation-id nil
                  :editing-angle nil
                  :angle-input ""
                  :canvas-width ui/default-canvas-width
                  :canvas-height ui/default-canvas-height})))

;; -----------------------------------------------------------------------------
;; Simulation Control
;; -----------------------------------------------------------------------------

(defn step-simulation! []
  (let [now (time/now)]
    (swap! app-state
           (fn [{:keys [system trail-duration trails] :as state}]
             (let [[new-system new-trails] (engine/step-with-trails system ui/dt trail-duration trails now)]
               (assoc state :system new-system :trails new-trails))))))

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

(defn add-pendulum! []
  (swap! app-state ui/add-pendulum))

(defn remove-pendulum! []
  (swap! app-state ui/remove-pendulum))

(defn center-view! []
  (swap! app-state ui/center-view))

;; -----------------------------------------------------------------------------
;; Mouse Interaction
;; -----------------------------------------------------------------------------

(defn get-canvas-coords
  "Converts mouse event to canvas coordinates."
  [e canvas]
  (let [rect (.getBoundingClientRect canvas)]
    [(- (.-clientX e) (.-left rect))
     (- (.-clientY e) (.-top rect))]))

(defn handle-mouse-down [e canvas]
  (let [[mx my] (get-canvas-coords e canvas)]
    (swap! app-state ui/handle-mouse-down mx my)))

(defn handle-mouse-move [e canvas]
  (let [[mx my] (get-canvas-coords e canvas)]
    (swap! app-state ui/handle-mouse-move mx my)))

(defn handle-mouse-up [_e _canvas]
  (swap! app-state ui/handle-mouse-up))

(defn handle-mouse-wheel [e canvas]
  (let [[mx my] (get-canvas-coords e canvas)
        rotation (.-deltaY e)]
    (.preventDefault e)
    (swap! app-state ui/handle-mouse-wheel mx my rotation)))

;; -----------------------------------------------------------------------------
;; Angle Display
;; -----------------------------------------------------------------------------



(defn draw-angle-display
  "Draws a tabular display of pendulum angles in the top left of the canvas."
  [ctx system editing-angle]
  (let [pendulums (:pendulums system)
        header-y (+ ui/angle-display-padding ui/angle-display-line-height)
        swatch-width 12
        num-x (+ ui/angle-display-padding swatch-width 4)  ; 4px gap after swatch
        angle-x (+ num-x 24)]                           ; space for "N " then angle
    (set! (.-font ctx) "14px monospace")
    ;; Header
    (set! (.-fillStyle ctx) "#c8c8c8")
    (.fillText ctx "#" num-x header-y)
    (.fillText ctx "Angle" angle-x header-y)
    ;; Draw each pendulum's angle
    (doseq [[idx {:keys [theta]}] (map-indexed vector pendulums)]
      (let [y (+ header-y (* (inc idx) ui/angle-display-line-height))
            color (nth colors (mod idx (count colors)))
            display-angle (ui/normalize-angle theta)
            angle-str (str (.toFixed display-angle 2) "°")
            is-editing (= idx editing-angle)]
        ;; Draw color indicator box
        (set! (.-fillStyle ctx) color)
        (.fillRect ctx ui/angle-display-padding (- y 10) swatch-width swatch-width)
        (set! (.-strokeStyle ctx) "#ffffff")
        (set! (.-lineWidth ctx) 1)
        (.strokeRect ctx ui/angle-display-padding (- y 10) swatch-width swatch-width)
        ;; Draw number right after swatch
        (set! (.-fillStyle ctx) "#c8c8c8")
        (.fillText ctx (str (inc idx)) num-x y)
        ;; Draw angle (if not editing)
        (when-not is-editing
          (.fillText ctx angle-str angle-x y))))))


(defn start-angle-edit! [idx]
  (swap! app-state ui/start-angle-edit idx))

(defn cancel-angle-edit! []
  (swap! app-state ui/cancel-angle-edit))

(defn submit-angle-edit! []
  (let [{:keys [editing-angle angle-input]} @app-state]
    (if (and editing-angle
             (not (js/isNaN (js/parseFloat angle-input))))
      (swap! app-state ui/submit-angle-edit (js/parseFloat angle-input))
      (cancel-angle-edit!))))

;; -----------------------------------------------------------------------------
;; Canvas Rendering
;; -----------------------------------------------------------------------------

(defn draw-trails
  "Draws fading trails for each pendulum bob."
  [ctx trails trail-duration zoom pan canvas-width]
  (let [now (time/now)
        duration-ms (* trail-duration 1000)]
    (set! (.-lineWidth ctx) (* 2 zoom))
    (doseq [[idx trail] (map-indexed vector trails)]
      (let [color (nth ui/pendulum-colors (mod idx (count ui/pendulum-colors)))
            [r g b] (ui/hex->rgb color)]
        (doseq [{:keys [pos time]} trail]
          (let [age (- now time)
                alpha (max 0.0 (- 1.0 (/ age duration-ms)))
                [sx sy] (ui/world->screen pos zoom pan canvas-width)
                radius (* ui/trail-dot-radius zoom)]
            (when (> alpha 0.0)
              (set! (.-fillStyle ctx) (str "rgba(" r "," g "," b "," alpha ")"))
              (.beginPath ctx)
              (.arc ctx sx sy radius 0 (* 2 js/Math.PI))
              (.fill ctx))))))))

(defn draw-pendulum-system [ctx system running trails trail-duration zoom pan canvas-width canvas-height editing-angle]
  (let [positions (engine/bob-positions system)
        pendulums (:pendulums system)
        [piv-sx piv-sy] (ui/pivot-screen-pos zoom pan canvas-width)]
    ;; Clear canvas
    (.clearRect ctx 0 0 canvas-width canvas-height)

    ;; Draw trails first (behind the pendulums)
    (draw-trails ctx trails trail-duration zoom pan canvas-width)

    ;; Draw from pivot through each bob
    (loop [prev-x piv-sx
           prev-y piv-sy
           idx 0
           bobs positions]
      (when (seq bobs)
        (let [[x y] (first bobs)
              [screen-x screen-y] (ui/world->screen [x y] zoom pan canvas-width)
              color (nth colors (mod idx (count colors)))]

          ;; Draw arm
          (set! (.-strokeStyle ctx) ui/arm-color-css)
          (set! (.-lineWidth ctx) (* ui/arm-stroke-width zoom))
          (.beginPath ctx)
          (.moveTo ctx prev-x prev-y)
          (.lineTo ctx screen-x screen-y)
          (.stroke ctx)

          ;; Draw bob
          (let [{:keys [mass]} (nth pendulums idx)
                base-radius (ui/bob-radius mass)
                radius (* base-radius zoom)]
            (set! (.-fillStyle ctx) color)
            (.beginPath ctx)
            (.arc ctx screen-x screen-y radius 0 (* 2 js/Math.PI))
            (.fill ctx)

            ;; Bob outline
            (set! (.-strokeStyle ctx) ui/bob-outline-color-css)
            (set! (.-lineWidth ctx) (* ui/bob-outline-width zoom))
            (.stroke ctx))

          (recur screen-x screen-y (inc idx) (rest bobs)))))

    ;; Draw pivot point
    (let [pivot-radius (* ui/pivot-radius zoom)]
      (set! (.-fillStyle ctx) ui/pivot-color-css)
      (.beginPath ctx)
      (.arc ctx piv-sx piv-sy pivot-radius 0 (* 2 js/Math.PI))
      (.fill ctx))

    ;; Draw angle display (not affected by zoom/pan)
    (draw-angle-display ctx system editing-angle)))

;; -----------------------------------------------------------------------------
;; Reagent Components
;; -----------------------------------------------------------------------------

(defn update-canvas-size!
  "Updates canvas size to fill the container. Sets dimensions directly on
   the canvas DOM element to avoid React re-render clearing the canvas."
  [container-ref canvas-ref]
  (when-let [container @container-ref]
    (when-let [canvas @canvas-ref]
      (let [rect (.getBoundingClientRect container)
            w (.-width rect)
            h (.-height rect)]
        (when (and (pos? w) (pos? h))
          (set! (.-width canvas) w)
          (set! (.-height canvas) h)
          (swap! app-state assoc :canvas-width w :canvas-height h))))))

(defn canvas-component []
  (let [canvas-ref (r/atom nil)
        container-ref (r/atom nil)
        resize-handler (atom nil)]
    (r/create-class
      {:display-name "pendulum-canvas"

       :component-did-mount
       (fn [_]
         ;; Set up resize listener (state update triggers watch which redraws)
         (reset! resize-handler #(update-canvas-size! container-ref canvas-ref))
         (.addEventListener js/window "resize" @resize-handler)
         ;; Set up render watch
         (when-let [canvas @canvas-ref]
           (let [ctx (.getContext canvas "2d")]
             (add-watch app-state :render
                        (fn [_ _ _ {:keys [system running trails trail-duration zoom pan canvas-width canvas-height editing-angle]}]
                          (draw-pendulum-system ctx system running trails trail-duration zoom pan canvas-width canvas-height editing-angle)))
             ;; Set canvas size directly on DOM and draw immediately
             (update-canvas-size! container-ref canvas-ref)
             (let [{:keys [system running trails trail-duration zoom pan canvas-width canvas-height editing-angle]} @app-state]
               (draw-pendulum-system ctx system running trails trail-duration zoom pan canvas-width canvas-height editing-angle))
             ;; Start simulation automatically
             (start-simulation!))))

       :component-will-unmount
       (fn [_]
         (remove-watch app-state :render)
         (when @resize-handler
           (.removeEventListener js/window "resize" @resize-handler)))

       :reagent-render
       (fn []
         (let [canvas @canvas-ref
               {:keys [running]} @app-state]
           [:div.canvas-container
            {:ref #(reset! container-ref %)
             :style {:width "100%" :height "100%"}}
            ;; Canvas dimensions set via DOM in update-canvas-size! to avoid
            ;; React re-renders clearing the canvas
            [:canvas {:ref #(reset! canvas-ref %)
                      :style {:cursor (if running "default" "pointer")
                              :display "block"}
                      :on-mouse-down #(when canvas (handle-mouse-down % canvas))
                      :on-mouse-move #(when canvas (handle-mouse-move % canvas))
                      :on-mouse-up #(when canvas (handle-mouse-up % canvas))
                      :on-mouse-leave #(when canvas (handle-mouse-up % canvas))
                      :on-wheel #(when canvas (handle-mouse-wheel % canvas))}]]))})))

(defn angle-input-component []
  (let [{:keys [editing-angle angle-input]} @app-state]
    (when editing-angle
      (let [header-y (+ ui/angle-display-padding ui/angle-display-line-height)
            row-y (+ header-y (* (inc editing-angle) ui/angle-display-line-height))
            input-top (- row-y 14)
            ;; Match angle-x from draw-angle-display: padding(10) + swatch(12) + gap(4) + num-space(24) = 50
            input-left 50]
        [:div.angle-input-overlay
         {:style {:position "absolute"
                  :top (str input-top "px")
                  :left (str input-left "px")}}
         [:input {:type "text"
                  :value angle-input
                  :auto-focus true
                  :style {:width "60px"
                          :padding "2px 4px"
                          :font-family "monospace"
                          :font-size "14px"
                          :background-color "#121212"
                          :color "#c8c8c8"
                          :border "1px solid #404040"
                          :border-radius "2px"}
                  :on-change #(swap! app-state assoc :angle-input (-> % .-target .-value))
                  :on-key-down (fn [e]
                                 (case (.-key e)
                                   "Enter" (submit-angle-edit!)
                                   "Escape" (cancel-angle-edit!)
                                   nil))
                  :on-blur cancel-angle-edit!}]
         [:span {:style {:margin-left "2px" :color "#c8c8c8" :font-family "monospace" :font-size "14px"}} "°"]]))))

(defn set-trail-duration! [duration]
  (swap! app-state assoc :trail-duration duration))

(defn play-pause-button []
  (let [{:keys [running]} @app-state]
    [:button.play-pause
     {:on-click toggle-simulation!
      :style {:position "absolute"
              :bottom "20px"
              :left "50%"
              :transform "translateX(-50%)"
              :width "48px"
              :height "48px"
              :border-radius "50%"
              :border "none"
              :background-color (if running "rgba(245, 158, 11, 0.9)" "rgba(34, 197, 94, 0.9)")
              :color "#000"
              :font-size "18px"
              :cursor "pointer"
              :display "flex"
              :align-items "center"
              :justify-content "center"
              :padding "0"}}
     [:span {:style {:display "inline-block"
                     :transform (if running "none" "translateX(2px)")}}
      (if running "⏸" "▶")]]))

(defn center-button []
  [:button {:on-click center-view!
            :title "Center screen"
            :style {:position "absolute"
                    :top "10px"
                    :right "10px"
                    :width "36px"
                    :height "36px"
                    :border-radius "50%"
                    :border "none"
                    :background-color "rgba(64, 64, 64, 0.8)"
                    :color "#fafaf9"
                    :font-size "18px"
                    :cursor "pointer"
                    :display "flex"
                    :align-items "center"
                    :justify-content "center"}}
   "◎"])

(defn add-remove-buttons []
  (let [{:keys [system]} @app-state
        n (engine/pendulum-count system)]
    [:div {:style {:position "absolute"
                   :top "10px"
                   :left "50%"
                   :transform "translateX(-50%)"
                   :display "flex"
                   :gap "8px"
                   :align-items "center"}}
     [:button {:on-click remove-pendulum!
               :disabled (< n 2)
               :style {:padding "4px 8px"
                       :cursor "pointer"
                       :background-color "rgba(64, 64, 64, 0.8)"
                       :border "none"
                       :border-radius "4px"
                       :color "#fafaf9"}} "-"]
     [:span {:style {:color "#c8c8c8" :font-size "12px"}} (str n " pendulums")]
     [:button {:on-click add-pendulum!
               :style {:padding "4px 8px"
                       :cursor "pointer"
                       :background-color "rgba(64, 64, 64, 0.8)"
                       :border "none"
                       :border-radius "4px"
                       :color "#fafaf9"}} "+"]]))

(defn trail-slider []
  (let [{:keys [trail-duration]} @app-state]
    [:div {:style {:position "absolute"
                   :top "42px"
                   :left "50%"
                   :transform "translateX(-50%)"
                   :display "flex"
                   :gap "8px"
                   :align-items "center"}}
     [:span {:style {:color "#c8c8c8" :font-size "12px"}} "Trail:"]
     [:input {:type "range"
              :min 0
              :max 100
              :value (* trail-duration 10)
              :style {:width "80px"}
              :on-change #(set-trail-duration! (/ (js/parseInt (-> % .-target .-value)) 10.0))}]
     [:span {:style {:color "#c8c8c8" :font-size "12px"}} (str (.toFixed trail-duration 1) "s")]]))


(defn app-component []
  [:div#app
   [:div.simulation-container
    {:style {:position "relative"}}
    [canvas-component]
    [angle-input-component]
    [add-remove-buttons]
    [trail-slider]
    [center-button]
    [play-pause-button]]])

;; -----------------------------------------------------------------------------
;; Entry Point
;; -----------------------------------------------------------------------------

(defn ^:export init []
  (rdom/render [app-component]
               (.getElementById js/document "app")))

(defn ^:dev/after-load reload []
  (init))
