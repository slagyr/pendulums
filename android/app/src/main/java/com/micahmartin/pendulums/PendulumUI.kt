package com.micahmartin.pendulums

import clojure.lang.IFn
import clojure.lang.IPersistentMap
import clojure.lang.IPersistentVector
import kotlin.math.atan2

object PendulumUI {
    private const val NS = "com.micahmartin.pendulums.ui"

    // Simulation constants
    const val DT = 0.016f
    const val SCALE = 100.0f
    const val PIVOT_Y_OFFSET = 150.0f

    // Drawing constants
    const val BOB_BASE_RADIUS = 8.0f
    const val BOB_RADIUS_PER_MASS = 4.0f
    const val ARM_STROKE_WIDTH = 3.0f
    const val BOB_OUTLINE_WIDTH = 2.0f
    const val PIVOT_RADIUS = 6.0f
    const val TRAIL_DOT_RADIUS = 2.0f

    // Colors (as Android Color int format: 0xAARRGGBB)
    val PENDULUM_COLORS = intArrayOf(
        0xFFef4444.toInt(), // red
        0xFF3b82f6.toInt(), // blue
        0xFF22c55e.toInt(), // green
        0xFFf97316.toInt(), // orange
        0xFFa855f7.toInt(), // purple
        0xFFeab308.toInt(), // yellow
        0xFF06b6d4.toInt(), // cyan
        0xFFec4899.toInt(), // pink
        0xFF6366f1.toInt(), // indigo
        0xFF84cc16.toInt()  // lime
    )

    const val ARM_COLOR = 0xFF525252.toInt()
    const val BOB_OUTLINE_COLOR = 0xFFffffff.toInt()
    const val PIVOT_COLOR = 0xFF737373.toInt()
    const val BG_COLOR = 0xFF121212.toInt()
    const val BTN_BG_COLOR = 0xFF404040.toInt()
    const val BTN_FG_COLOR = 0xFFffffff.toInt()
    const val TEXT_COLOR = 0xFFc8c8c8.toInt()

    // Angle display constants
    const val ANGLE_DISPLAY_PADDING = 10f
    const val ANGLE_DISPLAY_LINE_HEIGHT = 20f
    const val ANGLE_DISPLAY_ROW_WIDTH = 180f

    // Default state values
    const val DEFAULT_ZOOM = 1.0f
    const val DEFAULT_TRAIL_DURATION = 3.0f

    // Clojure functions
    private lateinit var worldToScreen: IFn
    private lateinit var screenToWorld: IFn
    private lateinit var defaultState: IFn
    private lateinit var stepState: IFn

    fun initialize() {
        ClojureRuntime.initialize()
        worldToScreen = ClojureRuntime.getVar(NS, "world->screen")
        screenToWorld = ClojureRuntime.getVar(NS, "screen->world")
        defaultState = ClojureRuntime.getVar(NS, "default-state")
        stepState = ClojureRuntime.getVar(NS, "step-state")
    }

    fun bobRadius(mass: Float): Float {
        return BOB_BASE_RADIUS + BOB_RADIUS_PER_MASS * mass
    }

    fun getPendulumColor(index: Int): Int {
        return PENDULUM_COLORS[index % PENDULUM_COLORS.size]
    }

    fun getPivotPosition(canvasWidth: Float): Pair<Float, Float> {
        return Pair(canvasWidth / 2f, PIVOT_Y_OFFSET)
    }

    fun worldToScreen(
        worldX: Float,
        worldY: Float,
        zoom: Float,
        panX: Float,
        panY: Float,
        canvasWidth: Float
    ): Pair<Float, Float> {
        val (pivotX, pivotY) = getPivotPosition(canvasWidth)
        val screenX = ((pivotX + worldX * SCALE) * zoom) + panX
        val screenY = ((pivotY - worldY * SCALE) * zoom) + panY
        return Pair(screenX, screenY)
    }

    fun screenToWorld(
        screenX: Float,
        screenY: Float,
        zoom: Float,
        panX: Float,
        panY: Float,
        canvasWidth: Float
    ): Pair<Float, Float> {
        val (pivotX, pivotY) = getPivotPosition(canvasWidth)
        val unzoomedX = (screenX - panX) / zoom
        val unzoomedY = (screenY - panY) / zoom
        val worldX = (unzoomedX - pivotX) / SCALE
        val worldY = (pivotY - unzoomedY) / SCALE
        return Pair(worldX, worldY)
    }

    fun pivotScreenPos(zoom: Float, panX: Float, panY: Float, canvasWidth: Float): Pair<Float, Float> {
        val (pivotX, pivotY) = getPivotPosition(canvasWidth)
        return Pair(pivotX * zoom + panX, pivotY * zoom + panY)
    }

    fun angleFromPivot(pivotX: Float, pivotY: Float, mouseX: Float, mouseY: Float): Float {
        val dx = mouseX - pivotX
        val dy = mouseY - pivotY
        return atan2(dx.toDouble(), dy.toDouble()).toFloat()
    }

    fun getDefaultState(): IPersistentMap {
        return defaultState.invoke() as IPersistentMap
    }

    fun stepState(state: IPersistentMap, now: Long): IPersistentMap {
        return stepState.invoke(state, now) as IPersistentMap
    }

    fun emptyTrails(): IPersistentVector {
        return clojure.lang.PersistentVector.EMPTY
    }

    /**
     * Converts physics theta to display angle where 0°=up, 90°=right, 180°=down, 270°=left.
     * Like a compass heading where angles increase clockwise.
     */
    fun normalizeAngle(theta: Float): Float {
        // Negate theta because physics convention is counter-clockwise, compass is clockwise
        val degrees = -theta * (180f / Math.PI.toFloat())
        // Add 180 so that theta=0 (down) becomes 180°, theta=π (up) becomes 0°
        val shifted = degrees + 180f
        // Normalize to 0-360 range
        var normalized = shifted % 360f
        if (normalized < 0) normalized += 360f
        return normalized
    }

    /**
     * Converts display angle (0°=up, 90°=right, 180°=down, 270°=left) back to physics theta.
     */
    fun displayAngleToTheta(displayAngle: Float): Float {
        return (180f - displayAngle) * (Math.PI.toFloat() / 180f)
    }

    /**
     * Hit tests the angle display area to determine which row was tapped.
     * Returns the index of the pendulum row that was hit, or null if not hit.
     */
    fun hitTestAngleDisplay(mx: Float, my: Float, pendulumCount: Int): Int? {
        if (mx > ANGLE_DISPLAY_ROW_WIDTH) return null

        val headerY = ANGLE_DISPLAY_PADDING + ANGLE_DISPLAY_LINE_HEIGHT

        for (idx in 0 until pendulumCount) {
            val rowY = headerY + (idx + 1) * ANGLE_DISPLAY_LINE_HEIGHT
            val top = rowY - 12
            val bottom = rowY + 4

            if (my >= top && my <= bottom) {
                return idx
            }
        }
        return null
    }
}
