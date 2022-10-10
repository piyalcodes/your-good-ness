input.onButtonPressed(Button.A, function () {
    music.playMelody("G B A G C5 B A B ", 120)
})
input.onSound(DetectedSound.Loud, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("G B A G C5 B A B ", 40)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("C5 A B G A F G E ", 120)
})
radio.setGroup(1)
music.setVolume(255)
basic.forever(function () {
    radio.setGroup(1)
})
