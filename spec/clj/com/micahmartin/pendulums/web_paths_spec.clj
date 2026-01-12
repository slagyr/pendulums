(ns com.micahmartin.pendulums.web-paths-spec
  "Tests that all resources referenced by web/index.html exist."
  (:require [clojure.java.io :as io]
            [clojure.string :as str]
            [speclj.core :refer :all]))

(def project-root (System/getProperty "user.dir"))
(def web-dir (io/file project-root "web"))
(def index-html (io/file web-dir "index.html"))

(defn extract-paths
  "Extracts href and src attribute values from HTML content."
  [html]
  (let [href-pattern #"href=\"([^\"]+)\""
        src-pattern #"src=\"([^\"]+)\""]
    (concat (map second (re-seq href-pattern html))
            (map second (re-seq src-pattern html)))))

(defn valid-resource-path?
  "Checks if a path references a local file (not http/https) and if that file exists."
  [path]
  (if (or (str/starts-with? path "http://")
          (str/starts-with? path "https://"))
    true  ; external URLs are not validated
    (let [file (io/file web-dir path)]
      (.exists file))))

(describe "Web interface paths"

  (it "index.html exists"
    (should (.exists index-html)))

  (it "all referenced CSS files exist"
    (let [html (slurp index-html)
          paths (extract-paths html)
          css-paths (filter #(str/ends-with? % ".css") paths)]
      (doseq [path css-paths]
        (should (valid-resource-path? path)))))

  (it "all referenced JS files exist"
    (let [html (slurp index-html)
          paths (extract-paths html)
          js-paths (filter #(str/ends-with? % ".js") paths)]
      (doseq [path js-paths]
        (should (valid-resource-path? path)))))

  (it "pendulum.css exists"
    (should (.exists (io/file web-dir "pendulum.css"))))

  (it "cljs/pendulums.js exists"
    (should (.exists (io/file web-dir "cljs" "pendulums.js"))))

  (it "cljs/out/goog/base.js exists"
    (should (.exists (io/file web-dir "cljs" "out" "goog" "base.js")))))
