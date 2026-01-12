(ns com.micahmartin.pendulums.engine-spec
  (:require [speclj.core :refer-macros [describe it should should= should-not= should<]]
            [com.micahmartin.pendulums.engine :as engine]
            [com.micahmartin.pendulums.math :as math]))

(def ^:const g 9.81)
(def ^:const tolerance 0.0001)

(describe "Pendulum Engine (CLJS)"

  (describe "make-pendulum"
    (it "creates a pendulum with default values"
      (let [p (engine/make-pendulum)]
        (should= 0.0 (:theta p))
        (should= 0.0 (:omega p))
        (should= 1.0 (:length p))
        (should= 1.0 (:mass p))))

    (it "creates a pendulum with specified values"
      (let [p (engine/make-pendulum {:theta 0.5 :omega 0.1 :length 2.0})]
        (should= 0.5 (:theta p))
        (should= 0.1 (:omega p))
        (should= 2.0 (:length p))
        (should= 1.0 (:mass p)))))

  (describe "make-system"
    (it "creates a system with one pendulum"
      (let [sys (engine/make-system [(engine/make-pendulum {:theta 0.5})])]
        (should= 1 (count (:pendulums sys)))
        (should= g (:gravity sys))))

    (it "creates a coupled system with multiple pendulums"
      (let [sys (engine/make-system [(engine/make-pendulum {:theta 0.5})
                                      (engine/make-pendulum {:theta 0.3})])]
        (should= 2 (count (:pendulums sys))))))

  (describe "single pendulum physics"
    (it "has zero acceleration at rest position (theta=0)"
      (let [p (engine/make-pendulum {:theta 0.0})
            sys (engine/make-system [p])
            accels (engine/accelerations sys)]
        (should< (math/abs (first accels)) tolerance)))

    (it "has negative acceleration when displaced positively"
      (let [p (engine/make-pendulum {:theta 0.5})
            sys (engine/make-system [p])
            accels (engine/accelerations sys)]
        (should< (first accels) 0)))

    (it "calculates correct acceleration for small angle"
      ;; For small angles: alpha ≈ -g/L * theta
      (let [theta 0.1
            length 1.0
            expected (- (/ (* g theta) length))
            p (engine/make-pendulum {:theta theta :length length})
            sys (engine/make-system [p])
            accels (engine/accelerations sys)]
        (should< (math/abs (- (first accels) expected)) 0.01))))

  (describe "step function"
    (it "advances simulation by dt using RK4"
      (let [p (engine/make-pendulum {:theta 0.5 :omega 0.0})
            sys (engine/make-system [p])
            new-sys (engine/step sys 0.01)]
        ;; Pendulum should start swinging - omega should become negative
        (should< (:omega (first (:pendulums new-sys))) 0)
        ;; Theta should decrease slightly (swinging back toward equilibrium)
        (should< (:theta (first (:pendulums new-sys))) 0.5)))

    (it "conserves energy approximately for single pendulum"
      (let [p (engine/make-pendulum {:theta 0.5 :omega 0.0 :length 1.0})
            sys (engine/make-system [p])
            initial-energy (engine/total-energy sys)
            ;; Run 100 steps
            final-sys (reduce (fn [s _] (engine/step s 0.001)) sys (range 100))
            final-energy (engine/total-energy final-sys)]
        ;; Energy should be conserved within 1%
        (should< (math/abs (- initial-energy final-energy))
                 (* 0.01 (math/abs initial-energy))))))

  (describe "double pendulum physics"
    (it "computes accelerations for double pendulum"
      (let [p1 (engine/make-pendulum {:theta 0.5 :omega 0.0})
            p2 (engine/make-pendulum {:theta 0.3 :omega 0.0})
            sys (engine/make-system [p1 p2])
            accels (engine/accelerations sys)]
        (should= 2 (count accels))
        ;; Both should have non-zero acceleration
        (should-not= 0.0 (first accels))
        (should-not= 0.0 (second accels))))

    (it "conserves energy approximately for double pendulum"
      (let [p1 (engine/make-pendulum {:theta 0.5 :omega 0.0})
            p2 (engine/make-pendulum {:theta 0.3 :omega 0.0})
            sys (engine/make-system [p1 p2])
            initial-energy (engine/total-energy sys)
            ;; Run 100 steps with small dt
            final-sys (reduce (fn [s _] (engine/step s 0.001)) sys (range 100))
            final-energy (engine/total-energy final-sys)]
        ;; Energy should be conserved within 1%
        (should< (math/abs (- initial-energy final-energy))
                 (* 0.01 (math/abs initial-energy))))))

  (describe "pendulum positions"
    (it "calculates cartesian position of single pendulum bob"
      (let [p (engine/make-pendulum {:theta 0.0 :length 1.0})
            sys (engine/make-system [p])
            positions (engine/bob-positions sys)]
        ;; At theta=0, bob is directly below pivot at (0, -1)
        (should< (math/abs (- 0.0 (first (first positions)))) tolerance)
        (should< (math/abs (- -1.0 (second (first positions)))) tolerance)))

    (it "calculates positions for double pendulum"
      (let [p1 (engine/make-pendulum {:theta 0.0 :length 1.0})
            p2 (engine/make-pendulum {:theta 0.0 :length 1.0})
            sys (engine/make-system [p1 p2])
            positions (engine/bob-positions sys)]
        (should= 2 (count positions))
        ;; First bob at (0, -1)
        (should< (math/abs (first (first positions))) tolerance)
        (should< (math/abs (- -1.0 (second (first positions)))) tolerance)
        ;; Second bob at (0, -2)
        (should< (math/abs (first (second positions))) tolerance)
        (should< (math/abs (- -2.0 (second (second positions)))) tolerance)))))
