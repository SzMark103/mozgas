function Mozgás () {
    if (input.isGesture(Gesture.TiltLeft)) {
        X += -1
        basic.pause(400)
    }
    if (input.isGesture(Gesture.TiltRight)) {
        X += 1
        basic.pause(400)
    }
    if (input.isGesture(Gesture.LogoUp)) {
        Y += 1
        basic.pause(400)
    }
    if (input.isGesture(Gesture.LogoDown)) {
        Y += -1
        basic.pause(400)
    }
}
let Y = 2
let X = 2
let Alma_x = 0
let Alma_y = 0
let lépés = 0
soundExpression.yawn.play()
basic.showLeds(`
    # . # . #
    . # . # .
    # . # . #
    . # . # .
    # . # . #
    `)
basic.pause(200)
basic.clearScreen()
basic.pause(200)
led.plot(X, Y)
lépés += 1
basic.forever(function () {
    if (lépés == 1) {
        led.toggle(X, Y)
        basic.pause(400)
    }
})
basic.forever(function () {
    if (lépés == 1) {
        Mozgás()
    }
})
basic.forever(function () {
    if (X > 4) {
        X += -1
    }
    if (Y > 4) {
        Y += -1
    }
})
