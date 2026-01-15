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
import androidx.compose.runtime.rememberUpdatedState
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
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.statusBars
import androidx.compose.foundation.layout.asPaddingValues
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

        // Get status bar padding for top controls
        val statusBarPadding = WindowInsets.statusBars.asPaddingValues()
        val topPadding = statusBarPadding.calculateTopPadding() + 10.dp

        // Top center: +/- buttons with pendulum count and trail slider
        TopControls(
            pendulumCount = state.system?.let { PendulumEngine.getPendulumCount(it) } ?: 0,
            trailDuration = state.trailDuration.toFloat(),
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
            onTrailDurationChange = { duration ->
                state = state.copy(
                    trailDuration = duration.toDouble(),
                    trails = clojure.lang.PersistentVector.EMPTY
                )
            },
            modifier = Modifier
                .align(Alignment.TopCenter)
                .padding(top = topPadding)
        )

        // Top right: Center button
        CenterButton(
            onClick = {
                state = state.copy(
                    zoom = PendulumUI.DEFAULT_ZOOM,
                    panX = 0f,
                    panY = 0f
                )
            },
            modifier = Modifier
                .align(Alignment.TopEnd)
                .padding(top = topPadding, end = 10.dp)
        )

        // Bottom center: Play/Pause button
        PlayPauseButton(
            isPlaying = state.running,
            onClick = { state = state.copy(running = !state.running) },
            modifier = Modifier
                .align(Alignment.BottomCenter)
                .padding(bottom = 24.dp)
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
    // Use rememberUpdatedState to avoid stale state capture in gesture handlers
    val currentState by rememberUpdatedState(state)
    val currentOnStateChange by rememberUpdatedState(onStateChange)

    Canvas(
        modifier = Modifier
            .fillMaxSize()
            .pointerInput(Unit) {
                awaitEachGesture {
                    val down = awaitFirstDown()
                    val downPos = down.position
                    var dragStarted = false

                    // Check for bob hit when simulation is stopped
                    if (!currentState.running && currentState.system != null) {
                        val hitBob = hitTestBob(
                            downPos.x, downPos.y,
                            currentState.system!!, currentState.zoom, currentState.panX, currentState.panY,
                            size.width.toFloat(), size.height.toFloat()
                        )
                        if (hitBob != null) {
                            draggedBobIndex = hitBob
                            wasRunningBeforeDrag = currentState.running
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
                                currentState.system!!,
                                currentState.zoom, currentState.panX, currentState.panY,
                                size.width.toFloat(), size.height.toFloat()
                            )
                            if (pivotPos != null) {
                                val theta = PendulumUI.angleFromPivot(
                                    pivotPos.first, pivotPos.second,
                                    pos.x, pos.y
                                )
                                val newSystem = PendulumEngine.setPendulumAngle(
                                    currentState.system!!, draggedBobIndex!!, theta.toDouble()
                                )
                                currentOnStateChange(currentState.copy(
                                    system = newSystem,
                                    trails = clojure.lang.PersistentVector.EMPTY
                                ))
                            }
                        } else if (pointerCount >= 2 && prevSpan > 0f && span > 0f) {
                            // Pinch zoom
                            val zoomFactor = span / prevSpan
                            val newZoom = (currentState.zoom * zoomFactor).coerceIn(0.1f, 10f)

                            currentOnStateChange(currentState.copy(
                                zoom = newZoom
                            ))
                        } else if (!dragStarted && pointerCount == 1) {
                            // Pan
                            val pan = event.calculatePan()
                            if (pan != Offset.Zero) {
                                currentOnStateChange(currentState.copy(
                                    panX = currentState.panX + pan.x,
                                    panY = currentState.panY + pan.y
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
        drawTrails(state.trails, state.zoom, state.panX, state.panY, size.width, size.height, now)

        // Get pivot screen position
        val (pivotScreenX, pivotScreenY) = PendulumUI.pivotScreenPos(
            state.zoom, state.panX, state.panY, size.width, size.height
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
                worldX, worldY, state.zoom, state.panX, state.panY, size.width, size.height
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
    canvasHeight: Float,
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
                worldX, worldY, zoom, panX, panY, canvasWidth, canvasHeight
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
    canvasWidth: Float, canvasHeight: Float
): Int? {
    val pendulums = PendulumEngine.getPendulums(system)
    val positions = PendulumEngine.getBobPositions(system)

    for (i in 0 until pendulums.count()) {
        val pendulum = pendulums.nth(i) as IPersistentMap
        val mass = PendulumEngine.getPendulumMass(pendulum).toFloat()
        val (worldX, worldY) = positions[i]
        val (screenX, screenY) = PendulumUI.worldToScreen(
            worldX, worldY, zoom, panX, panY, canvasWidth, canvasHeight
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
    canvasWidth: Float, canvasHeight: Float
): Pair<Float, Float>? {
    return if (bobIndex == 0) {
        PendulumUI.pivotScreenPos(zoom, panX, panY, canvasWidth, canvasHeight)
    } else {
        val positions = PendulumEngine.getBobPositions(system)
        if (bobIndex <= positions.size) {
            val (worldX, worldY) = positions[bobIndex - 1]
            PendulumUI.worldToScreen(worldX, worldY, zoom, panX, panY, canvasWidth, canvasHeight)
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

    // Get status bar height to avoid overlap with system time display
    val statusBarPadding = WindowInsets.statusBars.asPaddingValues()

    Column(
        modifier = Modifier
            .padding(top = statusBarPadding.calculateTopPadding() + 10.dp)
            .padding(start = 10.dp)
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

// Play button green color (rgba(34, 197, 94, 0.9))
private val PLAY_COLOR = Color(34, 197, 94, (0.9f * 255).toInt())
// Pause button orange color (rgba(245, 158, 11, 0.9))
private val PAUSE_COLOR = Color(245, 158, 11, (0.9f * 255).toInt())

@Composable
private fun TopControls(
    pendulumCount: Int,
    trailDuration: Float,
    onAdd: () -> Unit,
    onRemove: () -> Unit,
    onTrailDurationChange: (Float) -> Unit,
    modifier: Modifier = Modifier
) {
    Column(
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(8.dp),
        modifier = modifier
    ) {
        // +/- buttons with pendulum count
        Row(
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            // Remove button
            Box(
                contentAlignment = Alignment.Center,
                modifier = Modifier
                    .size(36.dp)
                    .clip(CircleShape)
                    .background(PendulumUI.BTN_BG_COLOR.toComposeColor().copy(alpha = 0.8f))
                    .clickable(enabled = pendulumCount > 1, onClick = onRemove)
            ) {
                Text(
                    "-",
                    color = if (pendulumCount > 1) PendulumUI.BTN_FG_COLOR.toComposeColor() else Color.Gray,
                    fontSize = 20.sp
                )
            }

            // Pendulum count label
            Text(
                "$pendulumCount pendulums",
                color = PendulumUI.TEXT_COLOR.toComposeColor(),
                fontSize = 12.sp
            )

            // Add button
            Box(
                contentAlignment = Alignment.Center,
                modifier = Modifier
                    .size(36.dp)
                    .clip(CircleShape)
                    .background(PendulumUI.BTN_BG_COLOR.toComposeColor().copy(alpha = 0.8f))
                    .clickable(onClick = onAdd)
            ) {
                Text("+", color = PendulumUI.BTN_FG_COLOR.toComposeColor(), fontSize = 20.sp)
            }
        }

        // Trail slider with label
        Row(
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            Text(
                "Trail:",
                color = PendulumUI.TEXT_COLOR.toComposeColor(),
                fontSize = 12.sp
            )
            Slider(
                value = trailDuration / 10f,
                onValueChange = { onTrailDurationChange(it * 10f) },
                modifier = Modifier.width(100.dp),
                colors = SliderDefaults.colors(
                    thumbColor = PendulumUI.BTN_FG_COLOR.toComposeColor(),
                    activeTrackColor = PendulumUI.BTN_FG_COLOR.toComposeColor(),
                    inactiveTrackColor = PendulumUI.BTN_BG_COLOR.toComposeColor()
                )
            )
            Text(
                String.format("%.1fs", trailDuration),
                color = PendulumUI.TEXT_COLOR.toComposeColor(),
                fontSize = 12.sp
            )
        }
    }
}

@Composable
private fun CenterButton(
    onClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    Box(
        contentAlignment = Alignment.Center,
        modifier = modifier
            .size(36.dp)
            .clip(CircleShape)
            .background(PendulumUI.BTN_BG_COLOR.toComposeColor().copy(alpha = 0.8f))
            .clickable(onClick = onClick)
    ) {
        Text("◎", color = PendulumUI.BTN_FG_COLOR.toComposeColor(), fontSize = 18.sp)
    }
}

@Composable
private fun PlayPauseButton(
    isPlaying: Boolean,
    onClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    Box(
        contentAlignment = Alignment.Center,
        modifier = modifier
            .size(48.dp)
            .clip(CircleShape)
            .background(if (isPlaying) PAUSE_COLOR else PLAY_COLOR)
            .clickable(onClick = onClick)
    ) {
        if (isPlaying) {
            // Pause icon (two vertical bars)
            Text("⏸", color = Color.Black, fontSize = 18.sp)
        } else {
            // Play icon (triangle)
            Text("▶", color = Color.Black, fontSize = 18.sp)
        }
    }
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
