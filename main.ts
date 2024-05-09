input.onButtonPressed(Button.B, function () {
    music.ringTone(523)
    led.plot(randint(0, 4), randint(0, 4))
    제한 += 1
    basic.pause(100)
    music.stopAllSounds()
    if (완료 == 25) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
        basic.showString("YOU WIN")
        basic.pause(2000)
        music.stopAllSounds()
        basic.clearScreen()
    }
    if (80 == 제한) {
        music.stopAllSounds()
        basic.clearScreen()
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Baddy), music.PlaybackMode.InBackground)
        basic.showString("GAME OVER")
        basic.showLeds(`
            # # # # #
            . . . . #
            # # # # #
            . . . . #
            . . . . #
            `)
        basic.pause(2000)
        basic.clearScreen()
        music.stopAllSounds()
    }
})
let 완료 = 0
let 제한 = 0
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
basic.forever(function () {
    if (led.point(0, 0)) {
        완료 += 1
    }
    if (led.point(0, 1)) {
        완료 += 1
    }
    if (led.point(0, 2)) {
        완료 += 1
    }
    if (led.point(0, 3)) {
        완료 += 1
    }
    if (led.point(0, 4)) {
        완료 += 1
    }
    if (led.point(1, 0)) {
        완료 += 1
    }
    if (led.point(1, 1)) {
        완료 += 1
    }
    if (led.point(1, 2)) {
        완료 += 1
    }
    if (led.point(1, 3)) {
        완료 += 1
    }
    if (led.point(1, 4)) {
        완료 += 1
    }
    if (led.point(2, 0)) {
        완료 += 1
    }
    if (led.point(2, 1)) {
        완료 += 1
    }
    if (led.point(2, 2)) {
        완료 += 1
    }
    if (led.point(2, 3)) {
        완료 += 1
    }
    if (led.point(2, 4)) {
        완료 += 1
    }
    if (led.point(3, 0)) {
        완료 += 1
    }
    if (led.point(3, 1)) {
        완료 += 1
    }
    if (led.point(3, 2)) {
        완료 += 1
    }
    if (led.point(3, 3)) {
        완료 += 1
    }
    if (led.point(3, 4)) {
        완료 += 1
    }
    if (led.point(4, 0)) {
        완료 += 1
    }
    if (led.point(4, 1)) {
        완료 += 1
    }
    if (led.point(4, 2)) {
        완료 += 1
    }
    if (led.point(4, 3)) {
        완료 += 1
    }
    if (led.point(4, 4)) {
        완료 += 1
    }
    basic.pause(200)
    완료 = 0
})
