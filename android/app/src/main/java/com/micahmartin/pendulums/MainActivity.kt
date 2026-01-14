package com.micahmartin.pendulums

import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.widget.FrameLayout
import androidx.appcompat.app.AppCompatActivity
import clojure.lang.IPersistentMap
import clojure.lang.IPersistentVector

class MainActivity : AppCompatActivity(), PendulumView.Listener, OverlayControls.Listener, AngleInputOverlay.Listener {

    private lateinit var pendulumView: PendulumView
    private lateinit var overlayControls: OverlayControls
    private lateinit var angleInputOverlay: AngleInputOverlay
    private val handler = Handler(Looper.getMainLooper())

    private var system: IPersistentMap? = null
    private var trails: IPersistentVector = clojure.lang.PersistentVector.EMPTY
    private var trailDuration: Double = PendulumUI.DEFAULT_TRAIL_DURATION.toDouble()
    private var running = false
    private var wasRunningBeforeDrag = false

    private val simulationRunnable = object : Runnable {
        override fun run() {
            if (running && system != null) {
                val now = System.currentTimeMillis()
                val (newSystem, newTrails) = PendulumEngine.stepWithTrails(
                    system!!,
                    PendulumUI.DT.toDouble(),
                    trailDuration,
                    trails,
                    now
                )
                system = newSystem
                trails = newTrails
                pendulumView.system = system
                pendulumView.trails = trails
                handler.postDelayed(this, 16) // ~60fps
            }
        }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Set up views
        pendulumView = PendulumView(this).apply {
            listener = this@MainActivity
        }

        overlayControls = OverlayControls(this).apply {
            listener = this@MainActivity
        }

        angleInputOverlay = AngleInputOverlay(this).apply {
            listener = this@MainActivity
        }

        val layout = FrameLayout(this).apply {
            addView(pendulumView, FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.MATCH_PARENT,
                FrameLayout.LayoutParams.MATCH_PARENT
            ))
            addView(overlayControls, FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.MATCH_PARENT,
                FrameLayout.LayoutParams.MATCH_PARENT
            ))
            addView(angleInputOverlay, FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.MATCH_PARENT,
                FrameLayout.LayoutParams.MATCH_PARENT
            ))
        }
        setContentView(layout)

        // Initialize Clojure runtime on background thread
        Thread {
            PendulumEngine.initialize()
            PendulumUI.initialize()

            // Create initial system with two pendulums
            val p1 = PendulumEngine.createPendulum(theta = 0.8, length = 1.0)
            val p2 = PendulumEngine.createPendulum(theta = 0.5, length = 1.0)
            system = PendulumEngine.createSystem(listOf(p1, p2))

            runOnUiThread {
                pendulumView.system = system
                startSimulation()
            }
        }.start()
    }

    fun startSimulation() {
        running = true
        pendulumView.isSimulationRunning = true
        overlayControls.isPlaying = true
        handler.post(simulationRunnable)
    }

    fun stopSimulation() {
        running = false
        pendulumView.isSimulationRunning = false
        overlayControls.isPlaying = false
        handler.removeCallbacks(simulationRunnable)
    }

    fun toggleSimulation() {
        if (running) {
            stopSimulation()
        } else {
            startSimulation()
        }
    }

    fun addPendulum() {
        system?.let { sys ->
            val newPendulum = PendulumEngine.createPendulum(theta = 0.3, length = 1.0)
            system = PendulumEngine.addPendulum(sys, newPendulum)
            trails = clojure.lang.PersistentVector.EMPTY
            pendulumView.system = system
            pendulumView.trails = trails
        }
    }

    fun removePendulum() {
        system?.let { sys ->
            system = PendulumEngine.removePendulum(sys)
            trails = clojure.lang.PersistentVector.EMPTY
            pendulumView.system = system
            pendulumView.trails = trails
        }
    }

    fun centerView() {
        pendulumView.zoom = PendulumUI.DEFAULT_ZOOM
        pendulumView.panX = 0f
        pendulumView.panY = 0f
    }

    // PendulumView.Listener implementation
    override fun onBobDragStart(index: Int) {
        wasRunningBeforeDrag = running
        stopSimulation()
    }

    override fun onBobDrag(index: Int, theta: Float) {
        system?.let { sys ->
            system = PendulumEngine.setPendulumAngle(sys, index, theta.toDouble())
            trails = clojure.lang.PersistentVector.EMPTY
            pendulumView.system = system
            pendulumView.trails = trails
        }
    }

    override fun onBobDragEnd() {
        // Optionally restart simulation after drag
        // For now, leave it stopped so user can position pendulums
    }

    override fun onAngleDisplayTapped(index: Int) {
        system?.let { sys ->
            val pendulums = PendulumEngine.getPendulums(sys)
            if (index < pendulums.count()) {
                val pendulum = pendulums.nth(index) as IPersistentMap
                val theta = PendulumEngine.getPendulumTheta(pendulum).toFloat()
                val displayAngle = PendulumUI.normalizeAngle(theta)
                pendulumView.editingAngle = index
                angleInputOverlay.showForIndex(index, displayAngle)
            }
        }
    }

    // OverlayControls.Listener implementation
    override fun onPlayPauseClicked() {
        toggleSimulation()
    }

    override fun onAddClicked() {
        addPendulum()
    }

    override fun onRemoveClicked() {
        removePendulum()
    }

    override fun onCenterClicked() {
        centerView()
    }

    override fun onTrailDurationChanged(duration: Float) {
        trailDuration = duration.toDouble()
        trails = clojure.lang.PersistentVector.EMPTY
        pendulumView.trails = trails
    }

    // AngleInputOverlay.Listener implementation
    override fun onAngleSubmitted(index: Int, angle: Float) {
        system?.let { sys ->
            val theta = PendulumUI.displayAngleToTheta(angle)
            system = PendulumEngine.setPendulumAngle(sys, index, theta.toDouble())
            trails = clojure.lang.PersistentVector.EMPTY
            pendulumView.system = system
            pendulumView.trails = trails
            pendulumView.editingAngle = null
        }
    }

    override fun onAngleEditCancelled() {
        pendulumView.editingAngle = null
    }

    override fun onPause() {
        super.onPause()
        stopSimulation()
    }

    override fun onResume() {
        super.onResume()
        if (system != null && !running) {
            startSimulation()
        }
    }

    override fun onDestroy() {
        super.onDestroy()
        stopSimulation()
    }
}
