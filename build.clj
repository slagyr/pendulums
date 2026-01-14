(ns build
  "Build script for AOT compilation and JAR packaging.

  Usage:
    clj -T:build aot          ; AOT compile engine and ui namespaces
    clj -T:build jar          ; Create JAR with AOT-compiled classes
    clj -T:build clean        ; Clean build artifacts"
  (:require [clojure.tools.build.api :as b]))

(def lib 'com.micahmartin/pendulums-engine)
(def version "1.0.0")
(def class-dir "target/classes")
(def jar-file (format "target/%s-%s.jar" (name lib) version))

;; Namespaces to AOT compile for Android consumption
(def aot-namespaces
  '[com.micahmartin.pendulums.math
    com.micahmartin.pendulums.engine
    com.micahmartin.pendulums.ui])

(def basis (delay (b/create-basis {:project "deps.edn"})))

(defn clean
  "Clean build artifacts."
  [_]
  (println "Cleaning" class-dir "and" jar-file)
  (b/delete {:path class-dir})
  (b/delete {:path jar-file}))

(defn aot
  "AOT compile engine and ui namespaces."
  [_]
  (println "AOT compiling:" aot-namespaces)
  (b/delete {:path class-dir})
  (b/compile-clj {:basis @basis
                  :ns-compile aot-namespaces
                  :class-dir class-dir}))

(defn jar
  "Create JAR with AOT-compiled classes and Clojure runtime."
  [_]
  (aot nil)
  (println "Creating JAR:" jar-file)
  (b/copy-dir {:src-dirs ["src/cljc"]
               :target-dir class-dir})
  (b/jar {:class-dir class-dir
          :jar-file jar-file}))
