package com.micahmartin.pendulums

import clojure.lang.IFn
import clojure.lang.IPersistentMap
import clojure.lang.IPersistentVector

object PendulumEngine {
    private const val NS = "com.micahmartin.pendulums.engine"

    private lateinit var makePendulum: IFn
    private lateinit var makeSystem: IFn
    private lateinit var bobPositions: IFn
    private lateinit var step: IFn
    private lateinit var stepWithTrails: IFn
    private lateinit var addPendulum: IFn
    private lateinit var removePendulum: IFn
    private lateinit var setPendulumAngle: IFn
    private lateinit var resetVelocities: IFn
    private lateinit var pendulumCount: IFn
    private lateinit var totalEnergy: IFn
    private lateinit var kineticEnergy: IFn
    private lateinit var potentialEnergy: IFn

    fun initialize() {
        ClojureRuntime.initialize()
        makePendulum = ClojureRuntime.getVar(NS, "make-pendulum")
        makeSystem = ClojureRuntime.getVar(NS, "make-system")
        bobPositions = ClojureRuntime.getVar(NS, "bob-positions")
        step = ClojureRuntime.getVar(NS, "step")
        stepWithTrails = ClojureRuntime.getVar(NS, "step-with-trails")
        addPendulum = ClojureRuntime.getVar(NS, "add-pendulum")
        removePendulum = ClojureRuntime.getVar(NS, "remove-pendulum")
        setPendulumAngle = ClojureRuntime.getVar(NS, "set-pendulum-angle")
        resetVelocities = ClojureRuntime.getVar(NS, "reset-velocities")
        pendulumCount = ClojureRuntime.getVar(NS, "pendulum-count")
        totalEnergy = ClojureRuntime.getVar(NS, "total-energy")
        kineticEnergy = ClojureRuntime.getVar(NS, "kinetic-energy")
        potentialEnergy = ClojureRuntime.getVar(NS, "potential-energy")
    }

    fun createPendulum(
        theta: Double = 0.0,
        omega: Double = 0.0,
        length: Double = 1.0,
        mass: Double = 1.0
    ): IPersistentMap {
        val config = clojure.lang.PersistentHashMap.create(
            ClojureRuntime.keyword("theta"), theta,
            ClojureRuntime.keyword("omega"), omega,
            ClojureRuntime.keyword("length"), length,
            ClojureRuntime.keyword("mass"), mass
        )
        return makePendulum.invoke(config) as IPersistentMap
    }

    fun createSystem(pendulums: List<IPersistentMap>, gravity: Double = 9.81): IPersistentMap {
        val vec = clojure.lang.PersistentVector.create(pendulums)
        return makeSystem.invoke(vec, gravity) as IPersistentMap
    }

    fun getBobPositions(system: IPersistentMap): List<Pair<Float, Float>> {
        val positions = bobPositions.invoke(system) as IPersistentVector
        return (0 until positions.count()).map { i ->
            val pos = positions.nth(i) as IPersistentVector
            pos.toFloatPair()
        }
    }

    fun step(system: IPersistentMap, dt: Double): IPersistentMap {
        return step.invoke(system, dt) as IPersistentMap
    }

    fun stepWithTrails(
        system: IPersistentMap,
        dt: Double,
        trailDuration: Double,
        trails: IPersistentVector,
        now: Long
    ): Pair<IPersistentMap, IPersistentVector> {
        val result = stepWithTrails.invoke(system, dt, trailDuration, trails, now) as IPersistentVector
        @Suppress("UNCHECKED_CAST")
        return Pair(
            result.nth(0) as IPersistentMap,
            result.nth(1) as IPersistentVector
        )
    }

    fun addPendulum(system: IPersistentMap, pendulum: IPersistentMap): IPersistentMap {
        return addPendulum.invoke(system, pendulum) as IPersistentMap
    }

    fun removePendulum(system: IPersistentMap): IPersistentMap {
        return removePendulum.invoke(system) as IPersistentMap
    }

    fun setPendulumAngle(system: IPersistentMap, idx: Int, theta: Double): IPersistentMap {
        return setPendulumAngle.invoke(system, idx, theta) as IPersistentMap
    }

    fun resetVelocities(system: IPersistentMap): IPersistentMap {
        return resetVelocities.invoke(system) as IPersistentMap
    }

    fun getPendulumCount(system: IPersistentMap): Int {
        return (pendulumCount.invoke(system) as Number).toInt()
    }

    fun getTotalEnergy(system: IPersistentMap): Double {
        return (totalEnergy.invoke(system) as Number).toDouble()
    }

    fun getKineticEnergy(system: IPersistentMap): Double {
        return (kineticEnergy.invoke(system) as Number).toDouble()
    }

    fun getPotentialEnergy(system: IPersistentMap): Double {
        return (potentialEnergy.invoke(system) as Number).toDouble()
    }

    fun getPendulums(system: IPersistentMap): IPersistentVector {
        return system.getVector("pendulums")
    }

    fun getPendulumTheta(pendulum: IPersistentMap): Double {
        return pendulum.getDouble("theta")
    }

    fun getPendulumOmega(pendulum: IPersistentMap): Double {
        return pendulum.getDouble("omega")
    }

    fun getPendulumLength(pendulum: IPersistentMap): Double {
        return pendulum.getDouble("length")
    }

    fun getPendulumMass(pendulum: IPersistentMap): Double {
        return pendulum.getDouble("mass")
    }
}
