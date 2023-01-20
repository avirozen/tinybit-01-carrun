basic.forever(function () {
    basic.showArrow(ArrowNames.South)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
    basic.pause(1000)
    basic.showArrow(ArrowNames.North)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Back)
    basic.pause(1000)
    basic.showArrow(ArrowNames.East)
    Tinybit.CarCtrl(Tinybit.CarState.Car_SpinLeft)
    basic.pause(1000)
    basic.showArrow(ArrowNames.West)
    Tinybit.CarCtrl(Tinybit.CarState.Car_SpinRight)
    basic.pause(1000)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        # # # # #
        . # . # .
        `)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    basic.pause(1000)
})
