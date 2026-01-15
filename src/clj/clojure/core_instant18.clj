;; AOT-compilable version of Clojure's core_instant18 extension
;; This provides Java 8+ time support for Clojure's Inst protocol.
;; The original clojure/core_instant18.clj uses (in-ns 'clojure.core) which
;; prevents it from being AOT compiled as a standalone namespace.
;; This version creates a proper namespace that can be AOT compiled.

(ns clojure.core-instant18
  "Extends Clojure's Inst protocol to support java.time.Instant"
  (:import [java.time Instant]))

;; Extend the Inst protocol to java.time.Instant
(extend-protocol clojure.core/Inst
  java.time.Instant
  (inst-ms* [inst] (.toEpochMilli ^java.time.Instant inst)))
