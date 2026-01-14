package com.micahmartin.pendulums

import android.content.Context
import android.graphics.Canvas
import android.graphics.Paint
import android.util.AttributeSet
import android.view.MotionEvent
import android.view.ScaleGestureDetector
import android.view.View
import clojure.lang.IPersistentMap
import clojure.lang.IPersistentVector
import kotlin.math.sqrt

class PendulumView @JvmOverloads constructor(
    context: Context,
    attrs: AttributeSet? = null,
    defStyleAttr: Int = 0
) : View(context, attrs, defStyleAttr) {

    interface Listener {
        fun onBobDragStart(index: Int)
        fun onBobDrag(index: Int, theta: Float)
        fun onBobDragEnd()
        fun onAngleDisplayTapped(index: Int)
    }

    private val armPaint = Paint(Paint.ANTI_ALIAS_FLAG).apply {
        color = PendulumUI.ARM_COLOR
        strokeWidth = PendulumUI.ARM_STROKE_WIDTH
        style = Paint.Style.STROKE
        strokeCap = Paint.Cap.ROUND
    }

    private val bobFillPaint = Paint(Paint.ANTI_ALIAS_FLAG).apply {
        style = Paint.Style.FILL
    }

    private val bobOutlinePaint = Paint(Paint.ANTI_ALIAS_FLAG).apply {
        color = PendulumUI.BOB_OUTLINE_COLOR
        strokeWidth = PendulumUI.BOB_OUTLINE_WIDTH
        style = Paint.Style.STROKE
    }

    private val pivotPaint = Paint(Paint.ANTI_ALIAS_FLAG).apply {
        color = PendulumUI.PIVOT_COLOR
        style = Paint.Style.FILL
    }

    private val trailPaint = Paint(Paint.ANTI_ALIAS_FLAG).apply {
        style = Paint.Style.FILL
    }

    private val textPaint = Paint(Paint.ANTI_ALIAS_FLAG).apply {
        color = PendulumUI.TEXT_COLOR
        textSize = 36f  // Will be adjusted for density
        typeface = android.graphics.Typeface.MONOSPACE
    }

    private val swatchPaint = Paint(Paint.ANTI_ALIAS_FLAG).apply {
        style = Paint.Style.FILL
    }

    private val swatchOutlinePaint = Paint(Paint.ANTI_ALIAS_FLAG).apply {
        color = PendulumUI.BOB_OUTLINE_COLOR
        strokeWidth = 2f
        style = Paint.Style.STROKE
    }

    var editingAngle: Int? = null

    var system: IPersistentMap? = null
        set(value) {
            field = value
            invalidate()
        }

    var trails: IPersistentVector = clojure.lang.PersistentVector.EMPTY
        set(value) {
            field = value
            invalidate()
        }

    var zoom: Float = PendulumUI.DEFAULT_ZOOM
        set(value) {
            field = value.coerceIn(0.1f, 10f)
            invalidate()
        }

    var panX: Float = 0f
        set(value) {
            field = value
            invalidate()
        }

    var panY: Float = 0f
        set(value) {
            field = value
            invalidate()
        }

    var listener: Listener? = null
    var isSimulationRunning: Boolean = true

    private var selectedBob: Int? = null
    private var isDraggingBob: Boolean = false
    private var isPanning: Boolean = false
    private var lastTouchX: Float = 0f
    private var lastTouchY: Float = 0f
    private var potentialAngleTap: Int? = null  // Track potential angle display tap
    private var touchStartX: Float = 0f
    private var touchStartY: Float = 0f

    private val scaleGestureDetector = ScaleGestureDetector(
        context,
        object : ScaleGestureDetector.SimpleOnScaleGestureListener() {
            override fun onScale(detector: ScaleGestureDetector): Boolean {
                val scaleFactor = detector.scaleFactor
                val focusX = detector.focusX
                val focusY = detector.focusY

                // Calculate new zoom
                val newZoom = (zoom * scaleFactor).coerceIn(0.1f, 10f)
                val scaleRatio = newZoom / zoom

                // Adjust pan to keep focus point stationary
                panX = focusX - scaleRatio * (focusX - panX)
                panY = focusY - scaleRatio * (focusY - panY)
                zoom = newZoom

                return true
            }
        }
    )

    override fun onTouchEvent(event: MotionEvent): Boolean {
        scaleGestureDetector.onTouchEvent(event)

        // Don't process single-touch events during scale gesture
        if (scaleGestureDetector.isInProgress) {
            return true
        }

        val x = event.x
        val y = event.y

        when (event.actionMasked) {
            MotionEvent.ACTION_DOWN -> {
                lastTouchX = x
                lastTouchY = y
                touchStartX = x
                touchStartY = y
                potentialAngleTap = null

                // Only allow interactions when simulation is stopped
                if (!isSimulationRunning) {
                    // Check for angle display hit first
                    val sys = system
                    if (sys != null) {
                        val pendulumCount = PendulumEngine.getPendulumCount(sys)
                        val angleHit = PendulumUI.hitTestAngleDisplay(x, y, pendulumCount)
                        if (angleHit != null) {
                            potentialAngleTap = angleHit
                            return true
                        }
                    }

                    // Check for bob drag
                    val hitBob = hitTestBob(x, y)
                    if (hitBob != null) {
                        selectedBob = hitBob
                        isDraggingBob = true
                        listener?.onBobDragStart(hitBob)
                        return true
                    }
                }

                // Start panning
                isPanning = true
                return true
            }

            MotionEvent.ACTION_MOVE -> {
                if (isDraggingBob && selectedBob != null) {
                    val pivotPos = getPivotForBob(selectedBob!!)
                    if (pivotPos != null) {
                        val theta = PendulumUI.angleFromPivot(pivotPos.first, pivotPos.second, x, y)
                        listener?.onBobDrag(selectedBob!!, theta)
                    }
                    return true
                }

                if (isPanning) {
                    val dx = x - lastTouchX
                    val dy = y - lastTouchY
                    panX += dx
                    panY += dy
                    lastTouchX = x
                    lastTouchY = y
                    invalidate()
                    return true
                }
            }

            MotionEvent.ACTION_UP, MotionEvent.ACTION_CANCEL -> {
                // Check if this was a tap on the angle display
                if (event.actionMasked == MotionEvent.ACTION_UP && potentialAngleTap != null) {
                    val dx = x - touchStartX
                    val dy = y - touchStartY
                    val distance = sqrt(dx * dx + dy * dy)
                    // If finger didn't move much, treat as a tap
                    if (distance < 20) {
                        listener?.onAngleDisplayTapped(potentialAngleTap!!)
                    }
                }

                if (isDraggingBob) {
                    listener?.onBobDragEnd()
                }
                isDraggingBob = false
                isPanning = false
                selectedBob = null
                potentialAngleTap = null
                return true
            }
        }

        return super.onTouchEvent(event)
    }

    private fun hitTestBob(x: Float, y: Float): Int? {
        val sys = system ?: return null
        val canvasWidth = width.toFloat()
        val pendulums = PendulumEngine.getPendulums(sys)
        val positions = PendulumEngine.getBobPositions(sys)

        for (i in 0 until pendulums.count()) {
            val pendulum = pendulums.nth(i) as IPersistentMap
            val mass = PendulumEngine.getPendulumMass(pendulum).toFloat()
            val (worldX, worldY) = positions[i]
            val (screenX, screenY) = PendulumUI.worldToScreen(
                worldX, worldY, zoom, panX, panY, canvasWidth
            )

            val bobRadius = PendulumUI.bobRadius(mass) * zoom
            val dx = x - screenX
            val dy = y - screenY
            val dist = sqrt(dx * dx + dy * dy)

            if (dist <= bobRadius + 10) { // 10px extra for easier touch
                return i
            }
        }
        return null
    }

    private fun getPivotForBob(bobIndex: Int): Pair<Float, Float>? {
        val sys = system ?: return null
        val canvasWidth = width.toFloat()

        return if (bobIndex == 0) {
            PendulumUI.pivotScreenPos(zoom, panX, panY, canvasWidth)
        } else {
            val positions = PendulumEngine.getBobPositions(sys)
            if (bobIndex <= positions.size) {
                val (worldX, worldY) = positions[bobIndex - 1]
                PendulumUI.worldToScreen(worldX, worldY, zoom, panX, panY, canvasWidth)
            } else {
                null
            }
        }
    }

    override fun onDraw(canvas: Canvas) {
        super.onDraw(canvas)

        // Draw background
        canvas.drawColor(PendulumUI.BG_COLOR)

        val sys = system ?: return
        val canvasWidth = width.toFloat()
        val now = System.currentTimeMillis()

        // Draw trails first (behind everything else)
        drawTrails(canvas, canvasWidth, now)

        // Get pivot screen position
        val (pivotScreenX, pivotScreenY) = PendulumUI.pivotScreenPos(zoom, panX, panY, canvasWidth)

        // Draw pivot point
        canvas.drawCircle(pivotScreenX, pivotScreenY, PendulumUI.PIVOT_RADIUS * zoom, pivotPaint)

        // Get pendulums and bob positions
        val pendulums = PendulumEngine.getPendulums(sys)
        val positions = PendulumEngine.getBobPositions(sys)

        if (pendulums.count() == 0) return

        // Draw arms and bobs
        var prevX = pivotScreenX
        var prevY = pivotScreenY

        for (i in 0 until pendulums.count()) {
            val pendulum = pendulums.nth(i) as IPersistentMap
            val mass = PendulumEngine.getPendulumMass(pendulum).toFloat()
            val (worldX, worldY) = positions[i]

            // Convert to screen coordinates
            val (screenX, screenY) = PendulumUI.worldToScreen(
                worldX, worldY, zoom, panX, panY, canvasWidth
            )

            // Draw arm
            armPaint.strokeWidth = PendulumUI.ARM_STROKE_WIDTH * zoom
            canvas.drawLine(prevX, prevY, screenX, screenY, armPaint)

            // Draw bob
            val bobRadius = PendulumUI.bobRadius(mass) * zoom
            bobFillPaint.color = PendulumUI.getPendulumColor(i)
            canvas.drawCircle(screenX, screenY, bobRadius, bobFillPaint)

            // Draw bob outline
            bobOutlinePaint.strokeWidth = PendulumUI.BOB_OUTLINE_WIDTH * zoom
            canvas.drawCircle(screenX, screenY, bobRadius, bobOutlinePaint)

            prevX = screenX
            prevY = screenY
        }

        // Draw angle display (not affected by zoom/pan)
        drawAngleDisplay(canvas)
    }

    private fun drawTrails(canvas: Canvas, canvasWidth: Float, now: Long) {
        if (trails.count() == 0) return

        val trailDurationMs = PendulumUI.DEFAULT_TRAIL_DURATION * 1000

        for (trailIdx in 0 until trails.count()) {
            val trail = trails.nth(trailIdx) as? IPersistentVector ?: continue
            val color = PendulumUI.getPendulumColor(trailIdx)

            for (pointIdx in 0 until trail.count()) {
                val point = trail.nth(pointIdx) as? IPersistentMap ?: continue
                val pos = point.valAt(ClojureRuntime.keyword("pos")) as? IPersistentVector ?: continue
                val time = (point.valAt(ClojureRuntime.keyword("time")) as? Number)?.toLong() ?: continue

                val worldX = (pos.nth(0) as Number).toFloat()
                val worldY = (pos.nth(1) as Number).toFloat()

                val (screenX, screenY) = PendulumUI.worldToScreen(
                    worldX, worldY, zoom, panX, panY, canvasWidth
                )

                // Calculate opacity based on age (newer = more opaque)
                val age = now - time
                val alpha = ((1.0f - (age / trailDurationMs)) * 200).toInt().coerceIn(0, 200)

                if (alpha > 0) {
                    trailPaint.color = (color and 0x00FFFFFF) or (alpha shl 24)
                    canvas.drawCircle(screenX, screenY, PendulumUI.TRAIL_DOT_RADIUS * zoom, trailPaint)
                }
            }
        }
    }

    private fun drawAngleDisplay(canvas: Canvas) {
        val sys = system ?: return
        val pendulums = PendulumEngine.getPendulums(sys)
        if (pendulums.count() == 0) return

        val padding = PendulumUI.ANGLE_DISPLAY_PADDING
        val lineHeight = PendulumUI.ANGLE_DISPLAY_LINE_HEIGHT
        val headerY = padding + lineHeight
        val swatchSize = 24f
        val numX = padding + swatchSize + 8f
        val angleX = numX + 40f

        // Header
        textPaint.color = PendulumUI.TEXT_COLOR
        canvas.drawText("#", numX, headerY, textPaint)
        canvas.drawText("Angle", angleX, headerY, textPaint)

        // Draw each pendulum's angle row
        for (idx in 0 until pendulums.count()) {
            val pendulum = pendulums.nth(idx) as IPersistentMap
            val theta = PendulumEngine.getPendulumTheta(pendulum).toFloat()
            val displayAngle = PendulumUI.normalizeAngle(theta)
            val y = headerY + (idx + 1) * lineHeight
            val isEditing = editingAngle == idx

            // Draw color swatch
            swatchPaint.color = PendulumUI.getPendulumColor(idx)
            canvas.drawRect(padding, y - 20f, padding + swatchSize, y + 4f, swatchPaint)
            canvas.drawRect(padding, y - 20f, padding + swatchSize, y + 4f, swatchOutlinePaint)

            // Draw pendulum number
            textPaint.color = PendulumUI.TEXT_COLOR
            canvas.drawText("${idx + 1}", numX, y, textPaint)

            // Draw angle (skip if this row is being edited)
            if (!isEditing) {
                val angleStr = String.format("%.2f°", displayAngle)
                canvas.drawText(angleStr, angleX, y, textPaint)
            }
        }
    }
}
