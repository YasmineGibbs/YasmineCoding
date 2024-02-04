input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Diamond)
    basic.pause(500)
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(100)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(1)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Chessboard)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showArrow(ArrowNames.East)
})
basic.showIcon(IconNames.Heart)
basic.pause(500)
basic.showIcon(IconNames.SmallHeart)
basic.pause(500)
