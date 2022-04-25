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
let pont = 0
let Game_over = 0
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
Alma_x = randint(0, 4)
Alma_y = randint(0, 4)
if (Alma_x == 2 && Alma_y == 2 && (Alma_x == 2 && Alma_y == 2)) {
    Alma_x = randint(0, 4)
    Alma_y = randint(0, 4)
}
let szörny_x = randint(0, 4)
let szörny_y = randint(0, 4)
if (szörny_x == 2 && szörny_y == 2) {
    szörny_x = randint(0, 4)
    szörny_y = randint(0, 4)
}
basic.forever(function () {
    if (lépés == 1) {
        if (Game_over != 1) {
            basic.clearScreen()
            led.plotBrightness(X, Y, 193)
            led.plotBrightness(Alma_x, Alma_y, 68)
            led.plotBrightness(szörny_x, szörny_y, 255)
            basic.pause(400)
        } else {
            basic.clearScreen()
        }
    }
})
basic.forever(function () {
    if (lépés == 1) {
        if (Alma_x == X && Alma_y == Y) {
            pont += 1
            Alma_x = randint(0, 4)
            Alma_y = randint(0, 4)
        }
        if (szörny_x == X && szörny_y == Y) {
            Game_over = 1
            basic.clearScreen()
            szörny_x = 7
            szörny_y = 7
            basic.clearScreen()
            music.playMelody("C5 G E C C5 C - - ", 120)
            basic.showNumber(pont)
            basic.pause(5000)
            control.reset()
        }
    }
})
basic.forever(function () {
    if (lépés == 1) {
        if (Game_over != 1) {
            if (X > 4) {
                X += -1
            }
            if (Y > 4) {
                Y += -1
            }
            if (X < 0) {
                X += 1
            }
            if (Y < 0) {
                Y += 1
            }
        } else {
            basic.clearScreen()
        }
    }
})
basic.forever(function () {
    if (lépés == 1) {
        if (Game_over != 1) {
            Mozgás()
        } else {
            basic.clearScreen()
        }
    }
})
