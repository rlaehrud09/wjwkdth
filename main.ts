input.onButtonPressed(Button.B, function () {
    music.ringTone(523)
    led.plot(randint(0, 4), randint(0, 4))
    제한 += 1
    basic.pause(100)
    music.stopAllSounds()
    if (60 == 제한) {
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
let 제한 = 0
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
