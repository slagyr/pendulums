;; Stub namespace for Android compatibility
;; The real clojure.core.server requires clojure.spec.alpha which is not available.
;; This stub satisfies the require during RT initialization.
(ns clojure.core.server
  "Stub server namespace for Android - real functionality not available.")

;; Define empty stubs for functions that might be called
(defn start-server [& _])
(defn stop-server [& _])
(defn start-servers [& _])
(defn stop-servers [& _])
