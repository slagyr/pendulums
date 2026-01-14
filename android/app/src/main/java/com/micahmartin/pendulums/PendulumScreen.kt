package com.micahmartin.pendulums

import androidx.compose.foundation.Canvas
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.gestures.awaitEachGesture
import androidx.compose.foundation.gestures.awaitFirstDown
import androidx.compose.foundation.gestures.calculateCentroid
import androidx.compose.foundation.gestures.calculateCentroidSize
import androidx.compose.foundation.gestures.calculatePan
import androidx.compose.foundation.gestures.calculateZoom
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.text.KeyboardActions
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.Slider
import androidx.compose.material3.SliderDefaults
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.material3.TextField
import androidx.compose.material3.TextFieldDefaults
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableFloatStateOf
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Path
import androidx.compose.ui.graphics.drawscope.DrawScope
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.graphics.nativeCanvas
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.platform.LocalLifecycleOwner
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleEventObserver
import clojure.lang.IPersistentMap
import clojure.lang.IPersistentVector
import kotlinx.coroutines.delay
import kotlin.math.sqrt

// Color extensions
private fun Int.toComposeColor() = Color(this)

// State class for pendulum simulation
data class PendulumState(
    val system: IPersistentMap? = null,
    val trails: IPersistentVector = clojure.lang.PersistentVector.EMPTY,
    val zoom: Float = PendulumUI.DEFAULT_ZOOM,
    val panX: Float = 0f,
    val panY: Float = 0f,
    val running: Boolean = false,
    val trailDuration: Double = PendulumUI.DEFAULT_TRAIL_DURATION.toDouble(),
    val editingAngleIndex: Int? = null
)

@Composable
fun PendulumScreen() {
    var state by remember { mutableStateOf(PendulumState()) }
    var initialized by remember { mutableStateOf(false) }

    // Initialize Clojure runtime
    LaunchedEffect(Unit) {
        PendulumEngine.initialize()
        PendulumUI.initialize()

        val p1 = PendulumEngine.createPendulum(theta = 0.8, length = 1.0)
        val p2 = PendulumEngine.createPendulum(theta = 0.5, length = 1.0)
        val system = PendulumEngine.createSystem(listOf(p1, p2))

        state = state.copy(system = system, running = true)
        initialized = true
    }

    // Simulation loop
    LaunchedEffect(state.running, state.system) {
        if (state.running && state.system != null) {
            while (state.running) {
                val now = System.currentTimeMillis()
                val (newSystem, newTrails) = PendulumEngine.stepWithTrails(
                    state.system!!,
                    PendulumUI.DT.toDouble(),
                    state.trailDuration,
                    state.trails,
                    now
                )
                state = state.copy(system = newSystem, trails = newTrails)
                delay(16) // ~60fps
            }
        }
    }

    // Lifecycle handling
    val lifecycleOwner = LocalLifecycleOwner.current
    DisposableEffect(lifecycleOwner) {
        val observer = LifecycleEventObserver { _, event ->
            when (event) {
                Lifecycle.Event.ON_PAUSE -> state = state.copy(running = false)
                Lifecycle.Event.ON_RESUME -> if (initialized && state.system != null) {
                    state = state.copy(running = true)
                }
                else -> {}
            }
        }
        lifecycleOwner.lifecycle.addObserver(observer)
        onDispose {
            lifecycleOwner.lifecycle.removeObserver(observer)
        }
    }

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(PendulumUI.BG_COLOR.toComposeColor())
    ) {
        // Pendulum canvas with gestures
        PendulumCanvas(
            state = state,
            onStateChange = { state = it }
        )

        // Angle display overlay
        AngleDisplay(
            state = state,
            onAngleTap = { index ->
                if (!state.running) {
                    state = state.copy(editingAngleIndex = index)
                }
            }
        )

        // Control buttons (bottom right)
        ControlButtons(
            isPlaying = state.running,
            onPlayPause = { state = state.copy(running = !state.running) },
            onAdd = {
                state.system?.let { sys ->
                    val newPendulum = PendulumEngine.createPendulum(theta = 0.3, length = 1.0)
                    state = state.copy(
                        system = PendulumEngine.addPendulum(sys, newPendulum),
                        trails = clojure.lang.PersistentVector.EMPTY
                    )
                }
            },
            onRemove = {
                state.system?.let { sys ->
                    state = state.copy(
                        system = PendulumEngine.removePendulum(sys),
                        trails = clojure.lang.PersistentVector.EMPTY
                    )
                }
            },
            onCenter = {
                state = state.copy(
                    zoom = PendulumUI.DEFAULT_ZOOM,
                    panX = 0f,
                    panY = 0f
                )
            },
            modifier = Modifier
                .align(Alignment.BottomEnd)
                .padding(24.dp)
        )

        // Trail duration slider (bottom left)
        TrailSlider(
            duration = state.trailDuration.toFloat(),
            onDurationChange = { duration ->
                state = state.copy(
                    trailDuration = duration.toDouble(),
                    trails = clojure.lang.PersistentVector.EMPTY
                )
            },
            modifier = Modifier
                .align(Alignment.BottomStart)
                .padding(24.dp)
        )

        // Angle input dialog
        if (state.editingAngleIndex != null) {
            val index = state.editingAngleIndex!!
            state.system?.let { sys ->
                val pendulums = PendulumEngine.getPendulums(sys)
                if (index < pendulums.count()) {
                    val pendulum = pendulums.nth(index) as IPersistentMap
                    val theta = PendulumEngine.getPendulumTheta(pendulum).toFloat()
                    val displayAngle = PendulumUI.normalizeAngle(theta)

                    AngleInputDialog(
                        index = index,
                        currentAngle = displayAngle,
                        onSubmit = { newAngle ->
                            val newTheta = PendulumUI.displayAngleToTheta(newAngle)
                            state = state.copy(
                                system = PendulumEngine.setPendulumAngle(sys, index, newTheta.toDouble()),
                                trails = clojure.lang.PersistentVector.EMPTY,
                                editingAngleIndex = null
                            )
                        },
                        onDismiss = {
                            state = state.copy(editingAngleIndex = null)
                        }
                    )
                }
            }
        }
    }
}

@Composable
private fun PendulumCanvas(
    state: PendulumState,
    onStateChange: (PendulumState) -> Unit
) {
    var draggedBobIndex by remember { mutableStateOf<Int?>(null) }
    var wasRunningBeforeDrag by remember { mutableStateOf(false) }

    Canvas(
        modifier = Modifier
            .fillMaxSize()
            .pointerInput(state.running) {
                awaitEachGesture {
                    val down = awaitFirstDown()
                    val downPos = down.position
                    var dragStarted = false

                    // Check for bob hit when simulation is stopped
                    if (!state.running && state.system != null) {
                        val hitBob = hitTestBob(
                            downPos.x, downPos.y,
                            state.system!!, state.zoom, state.panX, state.panY,
                            size.width.toFloat()
                        )
                        if (hitBob != null) {
                            draggedBobIndex = hitBob
                            wasRunningBeforeDrag = state.running
                            dragStarted = true
                        }
                    }

                    var prevCentroid = downPos
                    var prevSpan = 0f
                    var pointerCount = 1

                    do {
                        val event = awaitPointerEvent()
                        val changes = event.changes

                        pointerCount = changes.size
                        val centroid = event.calculateCentroid()
                        val span = event.calculateCentroidSize()

                        if (draggedBobIndex != null && pointerCount == 1) {
                            // Bob dragging
                            val pos = changes.first().position
                            val pivotPos = getPivotForBob(
                                draggedBobIndex!!,
                                state.system!!,
                                state.zoom, state.panX, state.panY,
                                size.width.toFloat()
                            )
                            if (pivotPos != null) {
                                val theta = PendulumUI.angleFromPivot(
                                    pivotPos.first, pivotPos.second,
                                    pos.x, pos.y
                                )
                                val newSystem = PendulumEngine.setPendulumAngle(
                                    state.system!!, draggedBobIndex!!, theta.toDouble()
                                )
                                onStateChange(state.copy(
                                    system = newSystem,
                                    trails = clojure.lang.PersistentVector.EMPTY
                                ))
                            }
                        } else if (pointerCount >= 2 && prevSpan > 0f && span > 0f) {
                            // Pinch zoom
                            val zoomFactor = span / prevSpan
                            val newZoom = (state.zoom * zoomFactor).coerceIn(0.1f, 10f)
                            val scaleRatio = newZoom / state.zoom

                            val newPanX = centroid.x - scaleRatio * (centroid.x - state.panX)
                            val newPanY = centroid.y - scaleRatio * (centroid.y - state.panY)

                            onStateChange(state.copy(
                                zoom = newZoom,
                                panX = newPanX,
                                panY = newPanY
                            ))
                        } else if (!dragStarted && pointerCount == 1) {
                            // Pan
                            val pan = event.calculatePan()
                            if (pan != Offset.Zero) {
                                onStateChange(state.copy(
                                    panX = state.panX + pan.x,
                                    panY = state.panY + pan.y
                                ))
                            }
                        }

                        prevCentroid = centroid
                        prevSpan = span
                        changes.forEach { it.consume() }
                    } while (changes.any { it.pressed })

                    draggedBobIndex = null
                }
            }
    ) {
        val sys = state.system ?: return@Canvas
        val now = System.currentTimeMillis()

        // Draw trails
        drawTrails(state.trails, state.zoom, state.panX, state.panY, size.width, now)

        // Get pivot screen position
        val (pivotScreenX, pivotScreenY) = PendulumUI.pivotScreenPos(
            state.zoom, state.panX, state.panY, size.width
        )

        // Draw pivot
        drawCircle(
            color = PendulumUI.PIVOT_COLOR.toComposeColor(),
            radius = PendulumUI.PIVOT_RADIUS * state.zoom,
            center = Offset(pivotScreenX, pivotScreenY)
        )

        // Draw pendulums
        val pendulums = PendulumEngine.getPendulums(sys)
        val positions = PendulumEngine.getBobPositions(sys)

        if (pendulums.count() == 0) return@Canvas

        var prevX = pivotScreenX
        var prevY = pivotScreenY

        for (i in 0 until pendulums.count()) {
            val pendulum = pendulums.nth(i) as IPersistentMap
            val mass = PendulumEngine.getPendulumMass(pendulum).toFloat()
            val (worldX, worldY) = positions[i]

            val (screenX, screenY) = PendulumUI.worldToScreen(
                worldX, worldY, state.zoom, state.panX, state.panY, size.width
            )

            // Draw arm
            drawLine(
                color = PendulumUI.ARM_COLOR.toComposeColor(),
                start = Offset(prevX, prevY),
                end = Offset(screenX, screenY),
                strokeWidth = PendulumUI.ARM_STROKE_WIDTH * state.zoom
            )

            // Draw bob fill
            val bobRadius = PendulumUI.bobRadius(mass) * state.zoom
            drawCircle(
                color = PendulumUI.getPendulumColor(i).toComposeColor(),
                radius = bobRadius,
                center = Offset(screenX, screenY)
            )

            // Draw bob outline
            drawCircle(
                color = PendulumUI.BOB_OUTLINE_COLOR.toComposeColor(),
                radius = bobRadius,
                center = Offset(screenX, screenY),
                style = Stroke(width = PendulumUI.BOB_OUTLINE_WIDTH * state.zoom)
            )

            prevX = screenX
            prevY = screenY
        }
    }
}

private fun DrawScope.drawTrails(
    trails: IPersistentVector,
    zoom: Float,
    panX: Float,
    panY: Float,
    canvasWidth: Float,
    now: Long
) {
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

            val age = now - time
            val alpha = ((1.0f - (age / trailDurationMs)) * 0.78f).coerceIn(0f, 0.78f)

            if (alpha > 0) {
                drawCircle(
                    color = color.toComposeColor().copy(alpha = alpha),
                    radius = PendulumUI.TRAIL_DOT_RADIUS * zoom,
                    center = Offset(screenX, screenY)
                )
            }
        }
    }
}

private fun hitTestBob(
    x: Float, y: Float,
    system: IPersistentMap,
    zoom: Float, panX: Float, panY: Float,
    canvasWidth: Float
): Int? {
    val pendulums = PendulumEngine.getPendulums(system)
    val positions = PendulumEngine.getBobPositions(system)

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

        if (dist <= bobRadius + 10) {
            return i
        }
    }
    return null
}

private fun getPivotForBob(
    bobIndex: Int,
    system: IPersistentMap,
    zoom: Float, panX: Float, panY: Float,
    canvasWidth: Float
): Pair<Float, Float>? {
    return if (bobIndex == 0) {
        PendulumUI.pivotScreenPos(zoom, panX, panY, canvasWidth)
    } else {
        val positions = PendulumEngine.getBobPositions(system)
        if (bobIndex <= positions.size) {
            val (worldX, worldY) = positions[bobIndex - 1]
            PendulumUI.worldToScreen(worldX, worldY, zoom, panX, panY, canvasWidth)
        } else {
            null
        }
    }
}

@Composable
private fun AngleDisplay(
    state: PendulumState,
    onAngleTap: (Int) -> Unit
) {
    val sys = state.system ?: return
    val pendulums = PendulumEngine.getPendulums(sys)
    if (pendulums.count() == 0) return

    Column(
        modifier = Modifier.padding(10.dp)
    ) {
        // Header row
        Row {
            Box(modifier = Modifier.size(24.dp)) // Swatch placeholder
            Text(
                "#",
                color = PendulumUI.TEXT_COLOR.toComposeColor(),
                fontSize = 14.sp,
                modifier = Modifier.padding(start = 8.dp)
            )
            Text(
                "Angle",
                color = PendulumUI.TEXT_COLOR.toComposeColor(),
                fontSize = 14.sp,
                modifier = Modifier.padding(start = 24.dp)
            )
        }

        // Pendulum rows
        for (idx in 0 until pendulums.count()) {
            val pendulum = pendulums.nth(idx) as IPersistentMap
            val theta = PendulumEngine.getPendulumTheta(pendulum).toFloat()
            val displayAngle = PendulumUI.normalizeAngle(theta)
            val isEditing = state.editingAngleIndex == idx

            Row(
                verticalAlignment = Alignment.CenterVertically,
                modifier = Modifier
                    .clickable(
                        enabled = !state.running,
                        indication = null,
                        interactionSource = remember { MutableInteractionSource() }
                    ) { onAngleTap(idx) }
                    .padding(vertical = 2.dp)
            ) {
                // Color swatch
                Box(
                    modifier = Modifier
                        .size(24.dp)
                        .background(PendulumUI.getPendulumColor(idx).toComposeColor())
                )

                // Index
                Text(
                    "${idx + 1}",
                    color = PendulumUI.TEXT_COLOR.toComposeColor(),
                    fontSize = 14.sp,
                    modifier = Modifier.padding(start = 8.dp)
                )

                // Angle (hide if editing)
                if (!isEditing) {
                    Text(
                        String.format("%.2f°", displayAngle),
                        color = PendulumUI.TEXT_COLOR.toComposeColor(),
                        fontSize = 14.sp,
                        modifier = Modifier.padding(start = 24.dp)
                    )
                }
            }
        }
    }
}

@Composable
private fun ControlButtons(
    isPlaying: Boolean,
    onPlayPause: () -> Unit,
    onAdd: () -> Unit,
    onRemove: () -> Unit,
    onCenter: () -> Unit,
    modifier: Modifier = Modifier
) {
    Column(
        verticalArrangement = Arrangement.spacedBy(16.dp),
        horizontalAlignment = Alignment.End,
        modifier = modifier
    ) {
        // Play/Pause button
        CircleButton(
            onClick = onPlayPause,
            size = 60,
            modifier = Modifier
        ) {
            if (isPlaying) {
                // Pause icon
                Row(horizontalArrangement = Arrangement.spacedBy(4.dp)) {
                    Box(
                        modifier = Modifier
                            .size(width = 6.dp, height = 20.dp)
                            .background(PendulumUI.BTN_FG_COLOR.toComposeColor())
                    )
                    Box(
                        modifier = Modifier
                            .size(width = 6.dp, height = 20.dp)
                            .background(PendulumUI.BTN_FG_COLOR.toComposeColor())
                    )
                }
            } else {
                // Play icon (triangle)
                Canvas(modifier = Modifier.size(24.dp)) {
                    val path = Path().apply {
                        moveTo(4f, 0f)
                        lineTo(24f, 12f)
                        lineTo(4f, 24f)
                        close()
                    }
                    drawPath(path, color = PendulumUI.BTN_FG_COLOR.toComposeColor())
                }
            }
        }

        // Add button
        CircleButton(onClick = onAdd, size = 50) {
            Text("+", color = PendulumUI.BTN_FG_COLOR.toComposeColor(), fontSize = 28.sp)
        }

        // Remove button
        CircleButton(onClick = onRemove, size = 50) {
            Text("-", color = PendulumUI.BTN_FG_COLOR.toComposeColor(), fontSize = 28.sp)
        }

        // Center button
        CircleButton(onClick = onCenter, size = 50) {
            Text("[ ]", color = PendulumUI.BTN_FG_COLOR.toComposeColor(), fontSize = 16.sp)
        }
    }
}

@Composable
private fun CircleButton(
    onClick: () -> Unit,
    size: Int,
    modifier: Modifier = Modifier,
    content: @Composable () -> Unit
) {
    Box(
        contentAlignment = Alignment.Center,
        modifier = modifier
            .size(size.dp)
            .clip(CircleShape)
            .background(PendulumUI.BTN_BG_COLOR.toComposeColor())
            .clickable(onClick = onClick)
    ) {
        content()
    }
}

@Composable
private fun TrailSlider(
    duration: Float,
    onDurationChange: (Float) -> Unit,
    modifier: Modifier = Modifier
) {
    Slider(
        value = duration / 6f,
        onValueChange = { onDurationChange(it * 6f) },
        modifier = modifier.width(150.dp),
        colors = SliderDefaults.colors(
            thumbColor = PendulumUI.BTN_FG_COLOR.toComposeColor(),
            activeTrackColor = PendulumUI.BTN_FG_COLOR.toComposeColor(),
            inactiveTrackColor = PendulumUI.BTN_BG_COLOR.toComposeColor()
        )
    )
}

@Composable
private fun AngleInputDialog(
    index: Int,
    currentAngle: Float,
    onSubmit: (Float) -> Unit,
    onDismiss: () -> Unit
) {
    var text by remember { mutableStateOf(String.format("%.2f", currentAngle)) }

    AlertDialog(
        onDismissRequest = onDismiss,
        title = { Text("Edit Angle ${index + 1}") },
        text = {
            TextField(
                value = text,
                onValueChange = { text = it },
                keyboardOptions = KeyboardOptions(
                    keyboardType = KeyboardType.Decimal,
                    imeAction = ImeAction.Done
                ),
                keyboardActions = KeyboardActions(
                    onDone = {
                        text.toFloatOrNull()?.let { onSubmit(it) }
                    }
                ),
                singleLine = true,
                colors = TextFieldDefaults.colors(
                    focusedTextColor = Color.White,
                    unfocusedTextColor = Color.White
                )
            )
        },
        confirmButton = {
            TextButton(onClick = {
                text.toFloatOrNull()?.let { onSubmit(it) }
            }) {
                Text("OK")
            }
        },
        dismissButton = {
            TextButton(onClick = onDismiss) {
                Text("Cancel")
            }
        }
    )
}
