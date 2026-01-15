(ns build
  "Build script for AOT compilation and JAR packaging.

  Usage:
    clj -T:build aot          ; AOT compile engine and ui namespaces
    clj -T:build jar          ; Create JAR with AOT-compiled classes
    clj -T:build android-jar  ; Create uber JAR with Clojure runtime for Android
    clj -T:build clean        ; Clean build artifacts"
  (:require [clojure.tools.build.api :as b]
            [clojure.java.io :as io])
  (:import [java.util.jar JarFile JarEntry]
           [java.io File]))

(def lib 'com.micahmartin/pendulums-engine)
(def version "1.0.0")
(def class-dir "target/classes")
(def jar-file (format "target/%s-%s.jar" (name lib) version))

;; Namespaces to AOT compile for Android consumption
(def aot-namespaces
  '[clojure.core
    clojure.core.protocols
    clojure.core-instant18  ; AOT-compilable version of Java 8+ time support
    clojure.core.server     ; Stub for Android (real one requires spec.alpha)
    clojure.edn
    clojure.instant
    clojure.uuid
    clojure.string
    clojure.set
    clojure.java.io
    com.micahmartin.pendulums.math
    com.micahmartin.pendulums.engine
    com.micahmartin.pendulums.ui])

(def basis (delay (b/create-basis {:project "deps.edn"})))

(defn clean
  "Clean build artifacts."
  [_]
  (println "Cleaning" class-dir "and" jar-file)
  (b/delete {:path class-dir})
  (b/delete {:path jar-file}))

;; Clojure namespaces to exclude from Android JAR (from the Clojure JAR)
;; We provide our own stubs for some of these
(def excluded-patterns
  [#"^clojure/core/server"     ; We provide our own stub
   #"^clojure/spec"            ; not included in our deps
   #"^clojure/test"            ; not needed at runtime
   #"^clojure/repl"            ; not needed at runtime
   #"^clojure/pprint"          ; not needed - adds significant size
   #"^clojure/inspector"       ; not needed
   #"^clojure/reflect"         ; not needed
   #"^clojure/stacktrace"      ; not needed
   #"^clojure/template"        ; not needed
   #"^clojure/walk"            ; not needed
   #"^clojure/xml"             ; not needed
   #"^clojure/zip"             ; not needed
   #"^clojure/data"            ; not needed
   #"^clojure/parallel"])      ; not needed

(defn- excluded? [name]
  (some #(re-find % name) excluded-patterns))

(defn- extract-jar
  "Extract JAR contents to target directory, excluding META-INF and
   namespaces that require unavailable dependencies."
  [jar-path target-dir]
  (with-open [jar (JarFile. (io/file jar-path))]
    (doseq [^JarEntry entry (enumeration-seq (.entries jar))]
      (let [name (.getName entry)]
        (when (and (not (.startsWith name "META-INF/"))
                   (not (.isDirectory entry))
                   (not (excluded? name)))
          (let [target-file (io/file target-dir name)]
            (.mkdirs (.getParentFile target-file))
            (with-open [in (.getInputStream jar entry)
                        out (io/output-stream target-file)]
              (io/copy in out))))))))

(defn- find-clojure-jar
  "Find the Clojure JAR in the classpath."
  []
  (let [libs (:libs @basis)]
    (->> libs
         (filter (fn [[k _]] (= 'org.clojure/clojure k)))
         first
         second
         :paths
         first)))

(defn aot
  "AOT compile engine and ui namespaces."
  [_]
  (println "AOT compiling:" aot-namespaces)
  (b/delete {:path class-dir})
  (b/compile-clj {:basis @basis
                  :ns-compile aot-namespaces
                  :class-dir class-dir}))

(defn jar
  "Create JAR with AOT-compiled classes (without Clojure runtime)."
  [_]
  (aot nil)
  (println "Creating JAR:" jar-file)
  (b/copy-dir {:src-dirs ["src/cljc"]
               :target-dir class-dir})
  (b/jar {:class-dir class-dir
          :jar-file jar-file}))

(defn android-jar
  "Create uber JAR with AOT-compiled classes AND bundled Clojure runtime for Android."
  [_]
  (aot nil)
  (println "Bundling Clojure runtime...")
  (let [clj-jar (find-clojure-jar)]
    (println "  Found Clojure JAR:" clj-jar)
    (extract-jar clj-jar class-dir))
  (println "Creating Android JAR:" jar-file)
  (b/copy-dir {:src-dirs ["src/cljc"]
               :target-dir class-dir})
  (b/jar {:class-dir class-dir
          :jar-file jar-file}))
