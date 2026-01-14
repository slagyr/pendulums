package com.micahmartin.pendulums

import clojure.java.api.Clojure
import clojure.lang.IFn
import clojure.lang.IPersistentMap
import clojure.lang.IPersistentVector
import clojure.lang.Keyword

object ClojureRuntime {
    private val require: IFn = Clojure.`var`("clojure.core", "require")

    private var initialized = false

    fun initialize() {
        if (initialized) return
        require.invoke(Clojure.read("com.micahmartin.pendulums.engine"))
        require.invoke(Clojure.read("com.micahmartin.pendulums.ui"))
        initialized = true
    }

    fun getVar(ns: String, name: String): IFn {
        return Clojure.`var`(ns, name)
    }

    fun keyword(name: String): Keyword {
        return Keyword.intern(name)
    }
}

fun IPersistentMap.getDouble(key: String): Double {
    return (this.valAt(ClojureRuntime.keyword(key)) as Number).toDouble()
}

fun IPersistentMap.getInt(key: String): Int {
    return (this.valAt(ClojureRuntime.keyword(key)) as Number).toInt()
}

fun IPersistentMap.getLong(key: String): Long {
    return (this.valAt(ClojureRuntime.keyword(key)) as Number).toLong()
}

fun IPersistentMap.getBoolean(key: String): Boolean {
    return this.valAt(ClojureRuntime.keyword(key)) as Boolean
}

@Suppress("UNCHECKED_CAST")
fun IPersistentMap.getVector(key: String): IPersistentVector {
    return this.valAt(ClojureRuntime.keyword(key)) as IPersistentVector
}

@Suppress("UNCHECKED_CAST")
fun IPersistentMap.getMap(key: String): IPersistentMap {
    return this.valAt(ClojureRuntime.keyword(key)) as IPersistentMap
}

fun IPersistentVector.toDoubleArray(): DoubleArray {
    return DoubleArray(this.count()) { i ->
        (this.nth(i) as Number).toDouble()
    }
}

fun IPersistentVector.toFloatPair(): Pair<Float, Float> {
    return Pair(
        (this.nth(0) as Number).toFloat(),
        (this.nth(1) as Number).toFloat()
    )
}
