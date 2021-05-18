pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
servos.P1.setAngle(30)
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        servos.P1.setAngle(150)
    }
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        for (let index = 0; index < 2; index++) {
            servos.P1.setAngle(150)
            basic.pause(400)
            servos.P1.setAngle(30)
            basic.pause(400)
        }
    }
    while (pins.digitalReadPin(DigitalPin.P0) == 0) {
        servos.P1.setAngle(150)
    }
    servos.P1.setAngle(30)
})
