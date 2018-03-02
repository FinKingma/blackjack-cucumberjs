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
        callback()
    });

    this.Then(/^John's car will adjust its speed to (\d+) mph$/, function (expectedSpeed, callback) {
        this.clock.tick(2000)
        assert(this.John.speed === expectedSpeed, 'johns car does not drive with expected speed')
        callback()
    });
}
