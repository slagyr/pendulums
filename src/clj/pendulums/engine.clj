(ns pendulums.engine
  "Physics engine for coupled pendulum simulation.
   This namespace contains pure functions for pendulum mechanics.

   Coordinate system:
   - Origin at the root pivot point
   - Positive x to the right
   - Positive y downward (for computational convenience)
   - Angles measured from vertical (hanging down), positive clockwise")

(def ^:const default-gravity 9.81)

;; -----------------------------------------------------------------------------
;; Data Structures
;; -----------------------------------------------------------------------------

(defn make-pendulum
  "Creates a pendulum with the given parameters.
   - theta: angle from vertical (radians), positive = clockwise
   - omega: angular velocity (rad/s)
   - length: arm length (meters)
   - mass: bob mass (kg), defaults to 1.0"
  ([] (make-pendulum {}))
  ([{:keys [theta omega length mass]
     :or {theta 0.0 omega 0.0 length 1.0 mass 1.0}}]
   {:theta theta
    :omega omega
    :length length
    :mass mass}))

(defn make-system
  "Creates a pendulum system with the given pendulums and optional gravity.
   Pendulums are ordered root-first: first pendulum is attached to fixed pivot,
   each subsequent pendulum is attached to the bob of the previous one."
  ([pendulums] (make-system pendulums default-gravity))
  ([pendulums gravity]
   {:pendulums (vec pendulums)
    :gravity gravity}))

;; -----------------------------------------------------------------------------
;; Position Calculations
;; -----------------------------------------------------------------------------

(defn bob-positions
  "Calculates the (x, y) position of each bob in the system.
   Returns a vector of [x y] pairs, one for each pendulum.
   Coordinate system: origin at root pivot, y positive downward."
  [{:keys [pendulums]}]
  (loop [pends pendulums
         x 0.0
         y 0.0
         positions []]
    (if (empty? pends)
      positions
      (let [{:keys [theta length]} (first pends)
            new-x (+ x (* length (Math/sin theta)))
            new-y (- y (* length (Math/cos theta)))]
        (recur (rest pends)
               new-x
               new-y
               (conj positions [new-x new-y]))))))

;; -----------------------------------------------------------------------------
;; Energy Calculations
;; -----------------------------------------------------------------------------

(defn kinetic-energy
  "Calculates total kinetic energy of the system."
  [{:keys [pendulums] :as sys}]
  (let [n (count pendulums)
        positions (bob-positions sys)]
    ;; For each pendulum, we need velocity of its bob
    ;; v = d/dt of position, which depends on all angles above it
    (loop [i 0
           total-ke 0.0]
      (if (>= i n)
        total-ke
        (let [;; Calculate velocity components for bob i
              ;; Bob i position depends on angles 0..i
              ;; x_i = sum(L_j * sin(theta_j)) for j=0..i
              ;; y_i = -sum(L_j * cos(theta_j)) for j=0..i
              ;; vx_i = sum(L_j * cos(theta_j) * omega_j)
              ;; vy_i = sum(L_j * sin(theta_j) * omega_j)
              {:keys [mass]} (nth pendulums i)
              [vx vy] (reduce (fn [[vx vy] j]
                                (let [{:keys [theta omega length]} (nth pendulums j)]
                                  [(+ vx (* length (Math/cos theta) omega))
                                   (+ vy (* length (Math/sin theta) omega))]))
                              [0.0 0.0]
                              (range (inc i)))
              v-squared (+ (* vx vx) (* vy vy))
              ke (* 0.5 mass v-squared)]
          (recur (inc i) (+ total-ke ke)))))))

(defn potential-energy
  "Calculates total potential energy of the system.
   Reference: y=0 at the root pivot."
  [{:keys [pendulums gravity] :as sys}]
  (let [positions (bob-positions sys)]
    (reduce + (map (fn [{:keys [mass]} [_ y]]
                     (* mass gravity y))  ; y is negative (below pivot), so PE is negative
                   pendulums
                   positions))))

(defn total-energy
  "Calculates total mechanical energy (KE + PE) of the system."
  [sys]
  (+ (kinetic-energy sys) (potential-energy sys)))

;; -----------------------------------------------------------------------------
;; Acceleration Calculations
;; -----------------------------------------------------------------------------

(defn- single-pendulum-acceleration
  "Calculates angular acceleration for a single pendulum.
   alpha = -g/L * sin(theta)"
  [{:keys [gravity]} {:keys [theta length]}]
  (- (/ (* gravity (Math/sin theta)) length)))

(defn- n-pendulum-accelerations
  "Calculates angular accelerations for n coupled pendulums.
   Uses the mass matrix formulation: M * alpha = F
   Where M is the mass matrix and F is the force vector."
  [{:keys [gravity pendulums]}]
  (let [n (count pendulums)
        thetas (mapv :theta pendulums)
        omegas (mapv :omega pendulums)
        lengths (mapv :length pendulums)
        masses (mapv :mass pendulums)

        ;; Total mass from pendulum i to end
        mass-sums (vec (reverse (reductions + (reverse masses))))

        ;; Build mass matrix M where M[i][j] = sum(m_k for k >= max(i,j)) * L_i * L_j * cos(theta_i - theta_j)
        M (vec (for [i (range n)]
                 (vec (for [j (range n)]
                        (let [k-max (max i j)
                              mass-sum (nth mass-sums k-max)
                              delta (- (nth thetas i) (nth thetas j))]
                          (* mass-sum
                             (nth lengths i)
                             (nth lengths j)
                             (Math/cos delta)))))))

        ;; Build force vector F
        ;; F_i = -sum(m_k for k >= i) * g * L_i * sin(theta_i)
        ;;       - sum over j: sum(m_k for k >= max(i,j)) * L_i * L_j * omega_j^2 * sin(theta_i - theta_j)
        F (vec (for [i (range n)]
                 (let [grav-term (- (* (nth mass-sums i)
                                       gravity
                                       (nth lengths i)
                                       (Math/sin (nth thetas i))))
                       vel-terms (reduce + (for [j (range n)
                                                 :when (not= i j)]
                                             (let [k-max (max i j)
                                                   delta (- (nth thetas i) (nth thetas j))]
                                               (- (* (nth mass-sums k-max)
                                                     (nth lengths i)
                                                     (nth lengths j)
                                                     (Math/pow (nth omegas j) 2)
                                                     (Math/sin delta))))))]
                   (+ grav-term vel-terms))))

        ;; Solve M * alpha = F using Gaussian elimination
        ;; Augment M with F
        augmented (vec (map-indexed (fn [i row]
                                      (conj (vec row) (nth F i)))
                                    M))

        ;; Forward elimination
        reduced (loop [aug augmented
                       k 0]
                  (if (>= k n)
                    aug
                    (let [;; Partial pivoting
                          pivot-row (apply max-key #(Math/abs (get-in aug [% k])) (range k n))
                          aug (if (= pivot-row k)
                                aug
                                (-> aug
                                    (assoc k (nth aug pivot-row))
                                    (assoc pivot-row (nth aug k))))
                          pivot-val (get-in aug [k k])]
                      (if (< (Math/abs pivot-val) 1e-10)
                        aug  ; Singular matrix, return as is
                        (let [aug (reduce (fn [a i]
                                            (let [factor (/ (get-in a [i k]) pivot-val)]
                                              (assoc a i
                                                     (vec (map-indexed
                                                           (fn [j val]
                                                             (if (< j k)
                                                               val
                                                               (- val (* factor (get-in a [k j])))))
                                                           (nth a i))))))
                                          aug
                                          (range (inc k) n))]
                          (recur aug (inc k)))))))

        ;; Back substitution
        alphas (loop [result (vec (repeat n 0.0))
                      i (dec n)]
                 (if (< i 0)
                   result
                   (let [sum (reduce + (for [j (range (inc i) n)]
                                         (* (get-in reduced [i j]) (nth result j))))
                         alpha-i (/ (- (get-in reduced [i n]) sum)
                                    (get-in reduced [i i]))]
                     (recur (assoc result i alpha-i) (dec i)))))]
    alphas))

(defn accelerations
  "Calculates angular accelerations for all pendulums in the system.
   Returns a vector of accelerations (rad/s^2), one per pendulum."
  [{:keys [pendulums] :as sys}]
  (case (count pendulums)
    0 []
    1 [(single-pendulum-acceleration sys (first pendulums))]
    ;; Use general solver for 2+ pendulums
    (n-pendulum-accelerations sys)))

;; -----------------------------------------------------------------------------
;; Integration (RK4)
;; -----------------------------------------------------------------------------

(defn- state-vector
  "Extracts state vector [theta1, omega1, theta2, omega2, ...] from system."
  [{:keys [pendulums]}]
  (vec (mapcat (juxt :theta :omega) pendulums)))

(defn- apply-state
  "Applies state vector back to system, returning updated system."
  [sys state]
  (let [pairs (partition 2 state)
        new-pendulums (vec (map (fn [p [theta omega]]
                                  (assoc p :theta theta :omega omega))
                                (:pendulums sys)
                                pairs))]
    (assoc sys :pendulums new-pendulums)))

(defn- derivatives
  "Calculates derivatives of state: [omega1, alpha1, omega2, alpha2, ...]"
  [sys]
  (let [alphas (accelerations sys)]
    (vec (mapcat (fn [{:keys [omega]} alpha]
                   [omega alpha])
                 (:pendulums sys)
                 alphas))))

(defn step
  "Advances the simulation by dt seconds using RK4 integration."
  [sys dt]
  (let [y0 (state-vector sys)
        k1 (derivatives sys)

        y1 (mapv + y0 (map #(* 0.5 dt %) k1))
        sys1 (apply-state sys y1)
        k2 (derivatives sys1)

        y2 (mapv + y0 (map #(* 0.5 dt %) k2))
        sys2 (apply-state sys y2)
        k3 (derivatives sys2)

        y3 (mapv + y0 (map #(* dt %) k3))
        sys3 (apply-state sys y3)
        k4 (derivatives sys3)

        ;; RK4 weighted average
        dy (mapv (fn [a b c d]
                   (* (/ dt 6.0) (+ a (* 2 b) (* 2 c) d)))
                 k1 k2 k3 k4)

        y-final (mapv + y0 dy)]
    (apply-state sys y-final)))

;; -----------------------------------------------------------------------------
;; System Manipulation
;; -----------------------------------------------------------------------------

(defn add-pendulum
  "Adds a new pendulum to the end of the chain."
  [sys pendulum]
  (update sys :pendulums conj pendulum))

(defn remove-pendulum
  "Removes the last pendulum from the chain. Returns unchanged if only one pendulum."
  [sys]
  (if (> (count (:pendulums sys)) 1)
    (update sys :pendulums pop)
    sys))

(defn reset-velocities
  "Resets all angular velocities to zero, keeping current angles."
  [sys]
  (update sys :pendulums
          (fn [pends]
            (mapv #(assoc % :omega 0.0) pends))))

(defn pendulum-count
  "Returns the number of pendulums in the system."
  [sys]
  (count (:pendulums sys)))

