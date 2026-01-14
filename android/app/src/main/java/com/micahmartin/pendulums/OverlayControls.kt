package com.micahmartin.pendulums

import android.content.Context
import android.graphics.Canvas
import android.graphics.Paint
import android.graphics.RectF
import android.util.AttributeSet
import android.view.Gravity
import android.view.MotionEvent
import android.view.View
import android.widget.FrameLayout
import android.widget.LinearLayout
import android.widget.SeekBar
import kotlin.math.min

class OverlayControls @JvmOverloads constructor(
    context: Context,
    attrs: AttributeSet? = null,
    defStyleAttr: Int = 0
) : FrameLayout(context, attrs, defStyleAttr) {

    interface Listener {
        fun onPlayPauseClicked()
        fun onAddClicked()
        fun onRemoveClicked()
        fun onCenterClicked()
        fun onTrailDurationChanged(duration: Float)
    }

    var listener: Listener? = null
    var isPlaying: Boolean = true
        set(value) {
            field = value
            playPauseButton.isPlaying = value
        }

    private val playPauseButton: PlayPauseButton
    private val addButton: CircleButton
    private val removeButton: CircleButton
    private val centerButton: CircleButton
    private val trailSlider: SeekBar

    init {
        // Bottom right controls
        val bottomRightLayout = LinearLayout(context).apply {
            orientation = LinearLayout.VERTICAL
            gravity = Gravity.END
        }

        playPauseButton = PlayPauseButton(context).apply {
            setOnClickListener { listener?.onPlayPauseClicked() }
        }
        bottomRightLayout.addView(playPauseButton, LinearLayout.LayoutParams(120, 120).apply {
            bottomMargin = 16
        })

        addButton = CircleButton(context, "+").apply {
            setOnClickListener { listener?.onAddClicked() }
        }
        bottomRightLayout.addView(addButton, LinearLayout.LayoutParams(100, 100).apply {
            bottomMargin = 16
        })

        removeButton = CircleButton(context, "-").apply {
            setOnClickListener { listener?.onRemoveClicked() }
        }
        bottomRightLayout.addView(removeButton, LinearLayout.LayoutParams(100, 100).apply {
            bottomMargin = 16
        })

        centerButton = CircleButton(context, "[ ]").apply {
            setOnClickListener { listener?.onCenterClicked() }
        }
        bottomRightLayout.addView(centerButton, LinearLayout.LayoutParams(100, 100))

        addView(bottomRightLayout, LayoutParams(
            LayoutParams.WRAP_CONTENT,
            LayoutParams.WRAP_CONTENT
        ).apply {
            gravity = Gravity.BOTTOM or Gravity.END
            marginEnd = 24
            bottomMargin = 24
        })

        // Bottom left trail slider
        val sliderLayout = LinearLayout(context).apply {
            orientation = LinearLayout.VERTICAL
        }

        trailSlider = SeekBar(context).apply {
            max = 100
            progress = 50 // Default 3 seconds = 50%
            setOnSeekBarChangeListener(object : SeekBar.OnSeekBarChangeListener {
                override fun onProgressChanged(seekBar: SeekBar?, progress: Int, fromUser: Boolean) {
                    if (fromUser) {
                        // Map 0-100 to 0-6 seconds
                        val duration = progress / 100f * 6f
                        listener?.onTrailDurationChanged(duration)
                    }
                }
                override fun onStartTrackingTouch(seekBar: SeekBar?) {}
                override fun onStopTrackingTouch(seekBar: SeekBar?) {}
            })
        }
        sliderLayout.addView(trailSlider, LinearLayout.LayoutParams(200, LayoutParams.WRAP_CONTENT))

        addView(sliderLayout, LayoutParams(
            LayoutParams.WRAP_CONTENT,
            LayoutParams.WRAP_CONTENT
        ).apply {
            gravity = Gravity.BOTTOM or Gravity.START
            marginStart = 24
            bottomMargin = 24
        })
    }
}

class CircleButton @JvmOverloads constructor(
    context: Context,
    private val label: String = "",
    attrs: AttributeSet? = null,
    defStyleAttr: Int = 0
) : View(context, attrs, defStyleAttr) {

    private val bgPaint = Paint(Paint.ANTI_ALIAS_FLAG).apply {
        color = PendulumUI.BTN_BG_COLOR
        style = Paint.Style.FILL
    }

    private val textPaint = Paint(Paint.ANTI_ALIAS_FLAG).apply {
        color = PendulumUI.BTN_FG_COLOR
        textAlign = Paint.Align.CENTER
        textSize = 36f
    }

    override fun onDraw(canvas: Canvas) {
        super.onDraw(canvas)
        val cx = width / 2f
        val cy = height / 2f
        val radius = min(width, height) / 2f - 4f

        canvas.drawCircle(cx, cy, radius, bgPaint)
        canvas.drawText(label, cx, cy + textPaint.textSize / 3f, textPaint)
    }

    override fun onTouchEvent(event: MotionEvent): Boolean {
        when (event.action) {
            MotionEvent.ACTION_DOWN -> {
                alpha = 0.7f
                return true
            }
            MotionEvent.ACTION_UP -> {
                alpha = 1.0f
                performClick()
                return true
            }
            MotionEvent.ACTION_CANCEL -> {
                alpha = 1.0f
                return true
            }
        }
        return super.onTouchEvent(event)
    }

    override fun performClick(): Boolean {
        super.performClick()
        return true
    }
}

class PlayPauseButton @JvmOverloads constructor(
    context: Context,
    attrs: AttributeSet? = null,
    defStyleAttr: Int = 0
) : View(context, attrs, defStyleAttr) {

    var isPlaying: Boolean = true
        set(value) {
            field = value
            invalidate()
        }

    private val bgPaint = Paint(Paint.ANTI_ALIAS_FLAG).apply {
        color = PendulumUI.BTN_BG_COLOR
        style = Paint.Style.FILL
    }

    private val iconPaint = Paint(Paint.ANTI_ALIAS_FLAG).apply {
        color = PendulumUI.BTN_FG_COLOR
        style = Paint.Style.FILL
    }

    override fun onDraw(canvas: Canvas) {
        super.onDraw(canvas)
        val cx = width / 2f
        val cy = height / 2f
        val radius = min(width, height) / 2f - 4f

        canvas.drawCircle(cx, cy, radius, bgPaint)

        val iconSize = radius * 0.5f
        if (isPlaying) {
            // Draw pause icon (two rectangles)
            val barWidth = iconSize * 0.3f
            val barHeight = iconSize * 1.2f
            val gap = iconSize * 0.25f

            canvas.drawRect(
                cx - gap - barWidth,
                cy - barHeight / 2,
                cx - gap,
                cy + barHeight / 2,
                iconPaint
            )
            canvas.drawRect(
                cx + gap,
                cy - barHeight / 2,
                cx + gap + barWidth,
                cy + barHeight / 2,
                iconPaint
            )
        } else {
            // Draw play icon (triangle)
            val path = android.graphics.Path().apply {
                moveTo(cx - iconSize * 0.4f, cy - iconSize * 0.6f)
                lineTo(cx + iconSize * 0.6f, cy)
                lineTo(cx - iconSize * 0.4f, cy + iconSize * 0.6f)
                close()
            }
            canvas.drawPath(path, iconPaint)
        }
    }

    override fun onTouchEvent(event: MotionEvent): Boolean {
        when (event.action) {
            MotionEvent.ACTION_DOWN -> {
                alpha = 0.7f
                return true
            }
            MotionEvent.ACTION_UP -> {
                alpha = 1.0f
                performClick()
                return true
            }
            MotionEvent.ACTION_CANCEL -> {
                alpha = 1.0f
                return true
            }
        }
        return super.onTouchEvent(event)
    }

    override fun performClick(): Boolean {
        super.performClick()
        return true
    }
}
