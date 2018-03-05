var assert = require('chai').assert
var Car = require('../../src/modules/car.js')

module.exports = function () {
    this.Given(/^John drives at (\d+) mph$/, function (speed, callback) {
        this.John = new Car()
        this.John.setSpeed(+speed)
        callback()
    });

    this.Given(/^William drives at (\d+) mph$/, function (speed, callback) {
        this.William = new Car()
        this.William.setSpeed(+speed)
        callback()
    });

    this.When(/^William nears John$/, function (callback) {
        this.William.trackCar(this.John)
        this.William.CruiseControlAdjustment = true
        callback()
    });

    this.Then(/^Williams car will adjust its speed to (\d+) mph$/, function (expectedSpeed, callback) {
        this.clock.tick(2000)
        assert(this.William.speed == expectedSpeed, 'Williams car does not drive with expected speed')
        callback()
    });



    this.Given(/^Johns is at the (\d+)m marker$/, function (pos, callback) {
        this.John = new Car()
        this.John.setPosition(+pos)
        callback();
    });

    this.When(/^William is approaching John at the (\d+)m marker$/, function (pos, callback) {
        this.William = new Car()
        this.William.setPosition(+pos)
        this.William.trackCar(this.John)
        callback();
    });

    this.Then(/^Williams cruise control adjustment is activated$/, function (callback) {
        this.clock.tick(1000)
        assert(this.William.CruiseControlAdjustment == true, 'Williams cruise control adjustment is not active')
        callback();
    });

    this.Given(/^William nears John at (\d+) mph$/, function (speed, callback) {
        this.William = new Car()
        this.William.setSpeed(+speed)
        this.William.trackCar(this.John)

        this.clock.tick(2000)
        assert(this.William.speed == 60, 'Williams car does not slow down  as expected')
        callback();
    });

    this.When(/^John speeds up to (\d+) mph$/, function (speed, callback) {
        this.John.setSpeed(speed)
        callback();
    });

    this.Then(/^Williams car will adjust its speed back to (\d+) mph$/, function (speed, callback) {
        this.clock.tick(2000)
        assert(this.William.speed == speed, 'Williams car does not speed up as expected')
        callback();
    });
}
