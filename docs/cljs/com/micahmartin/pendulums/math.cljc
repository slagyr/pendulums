(ns com.micahmartin.pendulums.math
  "Cross-platform math functions for pendulum simulation."
  (:refer-clojure :exclude [abs]))

(defn sin [x]
  #?(:clj (Math/sin x)
     :cljs (js/Math.sin x)))

(defn cos [x]
  #?(:clj (Math/cos x)
     :cljs (js/Math.cos x)))

(defn pow [base exp]
  #?(:clj (Math/pow base exp)
     :cljs (js/Math.pow base exp)))

(defn abs [x]
  #?(:clj (Math/abs x)
     :cljs (js/Math.abs x)))

(defn sqrt [x]
  #?(:clj (Math/sqrt x)
     :cljs (js/Math.sqrt x)))

(defn atan2 [y x]
  #?(:clj (Math/atan2 y x)
     :cljs (js/Math.atan2 y x)))

(def PI
  #?(:clj Math/PI
     :cljs js/Math.PI))
