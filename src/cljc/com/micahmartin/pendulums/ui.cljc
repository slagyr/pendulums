(ns com.micahmartin.pendulums.ui)

;; -----------------------------------------------------------------------------
;; Color Definitions (as hex integers)
;; -----------------------------------------------------------------------------

;; Pendulum bob colors
(def pendulum-colors
  [0xef4444   ; red
   0x3b82f6   ; blue
   0x22c55e   ; green
   0xf97316   ; orange
   0xa855f7   ; purple
   0xeab308   ; yellow
   0x06b6d4   ; cyan
   0xec4899   ; pink
   0x6366f1   ; indigo
   0x84cc16]) ; lime

;; UI element colors
(def arm-color 0x525252)
(def bob-outline-color 0xffffff)
(def pivot-color 0x737373)
(def bg-color 0x121212)
(def btn-bg-color 0x404040)
(def btn-fg-color 0xffffff)
(def text-color 0xc8c8c8)

;; -----------------------------------------------------------------------------
;; Color Conversion Utilities
;; -----------------------------------------------------------------------------

(defn hex->css
  "Converts a hex integer to a CSS color string."
  [hex]
  #?(:clj (format "#%06x" hex)
     :cljs (str "#" (.padStart (.toString hex 16) 6 "0"))))

(defn hex->rgb
  "Converts a hex integer to [r g b] vector."
  [hex]
  [(bit-and (bit-shift-right hex 16) 0xff)
   (bit-and (bit-shift-right hex 8) 0xff)
   (bit-and hex 0xff)])

;; -----------------------------------------------------------------------------
;; UI State Defaults
;; -----------------------------------------------------------------------------

(def default-zoom 1.0)
(def default-pan [0.0 0.0])
(def default-trail-duration 3.0)

;; Initial pendulum configurations
(def initial-pendulums
  [{:theta 0.8 :length 1.0}
   {:theta 0.5 :length 1.0}])

;; Configuration for newly added pendulums
(def new-pendulum-config {:theta 0.3 :length 1.0})

;; Default state map (platform-specific keys should be merged in)
(def default-state
  {:running false
   :selected nil
   :dragging false
   :zoom default-zoom
   :pan default-pan
   :panning false
   :pan-start nil
   :trails []
   :trail-duration default-trail-duration})

;; Pre-computed CSS color strings for convenience
(def pendulum-colors-css (mapv hex->css pendulum-colors))
(def arm-color-css (hex->css arm-color))
(def bob-outline-color-css (hex->css bob-outline-color))
(def pivot-color-css (hex->css pivot-color))
(def bg-color-css (hex->css bg-color))
(def btn-bg-color-css (hex->css btn-bg-color))
(def btn-fg-color-css (hex->css btn-fg-color))
(def text-color-css (hex->css text-color))
