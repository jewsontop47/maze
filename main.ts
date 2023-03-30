basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        let score = 0
        game.addScore(1)
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
        basic.showNumber(score)
        WaitUntilBlocks.waitUntilPinReleased(TouchPin.P2)
        basic.pause(2000)
        basic.showIcon(IconNames.Yes)
    }
})
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
    	
    }
})
