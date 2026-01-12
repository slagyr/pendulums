(ns cljs-build
  "ClojureScript build configuration."
  (:require [cljs.build.api :as cljs]))

(def build-opts
  {:main 'com.micahmartin.pendulums.core
   :output-to "web/cljs/pendulums.js"
   :output-dir "web/cljs/out"
   :asset-path "cljs/out"
   :optimizations :none
   :source-map true})

(def prod-opts
  {:main 'com.micahmartin.pendulums.core
   :output-to "web/cljs/pendulums.js"
   :output-dir "web/cljs/out"
   :optimizations :advanced})

(defn dev []
  (println "Building ClojureScript (dev)...")
  (cljs/build "src" build-opts)
  (println "Done. Output: web/cljs/pendulums.js"))

(defn prod []
  (println "Building ClojureScript (prod)...")
  (cljs/build "src" prod-opts)
  (println "Done. Output: web/cljs/pendulums.js"))

(defn watch []
  (println "Watching ClojureScript sources...")
  (cljs/watch "src" build-opts))
