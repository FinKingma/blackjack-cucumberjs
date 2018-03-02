var assert = require('chai').assert
var Car = require('../../src/modules/car.js')

module.exports = function () {
    this.Given(/^John drives at (\d+) mph$/, function (speed, callback) {
        this.John = new Car()
        this.John.setSpeed(speed)
        callback()
    });

    this.Given(/^William drives at (\d+) mph$/, function (speed, callback) {
        this.William = new Car()
        this.William.setSpeed(speed)
        callback()
    });

    this.When(/^William nears John$/, function (callback) {
        this.John.setPosition(1000)
        this.William.setPosition(900)
        this.William.spotCar(this.John)
        callback()
    });

    this.Then(/^Williams car will adjust its speed to (\d+) mph$/, function (expectedSpeed, callback) {
        this.clock.tick(2000)
        assert(this.William.speed == expectedSpeed, 'Williams car does not drive with expected speed')
        callback()
    });
}
