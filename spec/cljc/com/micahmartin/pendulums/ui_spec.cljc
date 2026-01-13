(ns com.micahmartin.pendulums.ui-spec
  (:require #?(:clj [speclj.core :refer :all]
               :cljs [speclj.core :refer-macros [describe it should should= should-not-be-nil]])
            [com.micahmartin.pendulums.ui :as ui]))

(describe "UI Shared Code"

  (describe "hex->css"
    (it "converts hex integer to CSS color string"
      (should= "#ef4444" (ui/hex->css 0xef4444))
      (should= "#000000" (ui/hex->css 0x000000))
      (should= "#ffffff" (ui/hex->css 0xffffff)))

    (it "pads short hex values with leading zeros"
      (should= "#000001" (ui/hex->css 0x1))
      (should= "#0000ff" (ui/hex->css 0xff))
      (should= "#00ff00" (ui/hex->css 0xff00))))

  (describe "hex->rgb"
    (it "converts hex integer to RGB vector"
      (should= [239 68 68] (ui/hex->rgb 0xef4444))
      (should= [0 0 0] (ui/hex->rgb 0x000000))
      (should= [255 255 255] (ui/hex->rgb 0xffffff)))

    (it "correctly extracts each color channel"
      (should= [255 0 0] (ui/hex->rgb 0xff0000))
      (should= [0 255 0] (ui/hex->rgb 0x00ff00))
      (should= [0 0 255] (ui/hex->rgb 0x0000ff))))

  (describe "bob-radius"
    (it "calculates radius for unit mass"
      (should= 12.0 (ui/bob-radius 1.0)))

    (it "calculates radius for zero mass"
      (should= 8.0 (ui/bob-radius 0.0)))

    (it "calculates radius for larger mass"
      (should= 16.0 (ui/bob-radius 2.0))))

  (describe "constants"
    (it "has simulation constants"
      (should= 0.016 ui/dt)
      (should= 100.0 ui/scale))

    (it "has canvas defaults"
      (should= 800 ui/default-canvas-width)
      (should= 600 ui/default-canvas-height)
      (should= 150.0 ui/pivot-y-offset))

    (it "has drawing constants"
      (should= 8.0 ui/bob-base-radius)
      (should= 4.0 ui/bob-radius-per-mass)
      (should= 3.0 ui/arm-stroke-width)
      (should= 2.0 ui/bob-outline-width)
      (should= 6.0 ui/pivot-radius)
      (should= 2.0 ui/trail-dot-radius)))

  (describe "color definitions"
    (it "has 10 pendulum colors"
      (should= 10 (count ui/pendulum-colors)))

    (it "has pre-computed CSS colors"
      (should= 10 (count ui/pendulum-colors-css))
      (should= "#ef4444" (first ui/pendulum-colors-css)))

    (it "has UI element colors as hex integers"
      (should= 0x525252 ui/arm-color)
      (should= 0xffffff ui/bob-outline-color)
      (should= 0x737373 ui/pivot-color)
      (should= 0x121212 ui/bg-color)))

  (describe "state defaults"
    (it "has default-state with correct structure"
      (should-not-be-nil ui/default-state)
      (should= false (:running ui/default-state))
      (should= nil (:selected ui/default-state))
      (should= false (:dragging ui/default-state))
      (should= 1.0 (:zoom ui/default-state))
      (should= [0.0 0.0] (:pan ui/default-state))
      (should= false (:panning ui/default-state))
      (should= nil (:pan-start ui/default-state))
      (should= [] (:trails ui/default-state))
      (should= 3.0 (:trail-duration ui/default-state)))

    (it "has initial pendulum configurations"
      (should= 2 (count ui/initial-pendulums))
      (should= {:theta 0.8 :length 1.0} (first ui/initial-pendulums))
      (should= {:theta 0.5 :length 1.0} (second ui/initial-pendulums)))

    (it "has new pendulum config"
      (should= {:theta 0.3 :length 1.0} ui/new-pendulum-config)))

  (describe "coordinate transformations"

    (describe "get-pivot"
      (it "returns pivot at center-x and pivot-y-offset"
        (should= [400 150.0] (ui/get-pivot 800)))

      (it "centers pivot horizontally based on canvas width"
        (should= [500 150.0] (ui/get-pivot 1000))
        (should= [300 150.0] (ui/get-pivot 600))))

    (describe "world->screen"
      (it "converts origin with no zoom/pan at default canvas width"
        (let [[sx sy] (ui/world->screen [0 0] 1.0 [0.0 0.0] 800)]
          (should= 400.0 sx)
          (should= 150.0 sy)))

      (it "converts positive world-x to screen right of pivot"
        (let [[sx _] (ui/world->screen [1.0 0] 1.0 [0.0 0.0] 800)]
          ;; 1.0 meter * 100 scale = 100 pixels right of pivot
          (should= 500.0 sx)))

      (it "converts positive world-y to screen above pivot (inverted)"
        (let [[_ sy] (ui/world->screen [0 1.0] 1.0 [0.0 0.0] 800)]
          ;; 1.0 meter * 100 scale = 100 pixels up from pivot
          (should= 50.0 sy)))

      (it "applies zoom factor"
        (let [[sx sy] (ui/world->screen [0 0] 2.0 [0.0 0.0] 800)]
          (should= 800.0 sx)  ; pivot-x * zoom
          (should= 300.0 sy))) ; pivot-y * zoom

      (it "applies pan offset"
        (let [[sx sy] (ui/world->screen [0 0] 1.0 [50.0 30.0] 800)]
          (should= 450.0 sx)  ; pivot-x + pan-x
          (should= 180.0 sy)))) ; pivot-y + pan-y

    (describe "screen->world"
      (it "converts pivot screen position to world origin"
        (let [[wx wy] (ui/screen->world [400.0 150.0] 1.0 [0.0 0.0] 800)]
          (should= 0.0 wx)
          (should= 0.0 wy)))

      (it "converts screen position right of pivot to positive world-x"
        (let [[wx _] (ui/screen->world [500.0 150.0] 1.0 [0.0 0.0] 800)]
          (should= 1.0 wx)))

      (it "converts screen position above pivot to positive world-y"
        (let [[_ wy] (ui/screen->world [400.0 50.0] 1.0 [0.0 0.0] 800)]
          (should= 1.0 wy)))

      (it "is inverse of world->screen"
        (let [world-pos [1.5 -0.5]
              zoom 1.5
              pan [20.0 -10.0]
              canvas-width 800
              screen-pos (ui/world->screen world-pos zoom pan canvas-width)
              back-to-world (ui/screen->world screen-pos zoom pan canvas-width)]
          (should= (first world-pos) (first back-to-world))
          (should= (second world-pos) (second back-to-world)))))

    (describe "pivot-screen-pos"
      (it "returns pivot position at zoom 1 with no pan"
        (should= [400.0 150.0] (ui/pivot-screen-pos 1.0 [0.0 0.0] 800)))

      (it "scales pivot position with zoom"
        (should= [800.0 300.0] (ui/pivot-screen-pos 2.0 [0.0 0.0] 800)))

      (it "offsets pivot position with pan"
        (should= [450.0 180.0] (ui/pivot-screen-pos 1.0 [50.0 30.0] 800)))

      (it "applies both zoom and pan"
        ;; pivot-x=400, pivot-y=150, zoom=2, pan=[10, 20]
        ;; result = [400*2 + 10, 150*2 + 20] = [810, 320]
        (should= [810.0 320.0] (ui/pivot-screen-pos 2.0 [10.0 20.0] 800))))))
