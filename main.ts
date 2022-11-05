input.onButtonPressed(Button.A, function () {
    number += 1
    basic.showNumber(number)
})
input.onGesture(Gesture.Shake, function () {
    number = 0
    target = randint(0, 10)
})
input.onButtonPressed(Button.B, function () {
    if (number == target) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . . .
            . # # # .
            . . . . .
            `)
    } else if (number < target) {
        basic.showLeds(`
            . . . . .
            . . # # .
            . # . . .
            . . # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # # . .
            . . . # .
            . # # . .
            . . . . .
            `)
    }
    number = 0
})
let target = 0
let number = 0
number = 0
target = randint(0, 10)
basic.showIcon(IconNames.Heart)
control.waitMicros(100)
basic.showIcon(IconNames.SmallHeart)
control.waitMicros(100)
basic.showIcon(IconNames.Heart)
control.waitMicros(100)
basic.showIcon(IconNames.SmallHeart)
