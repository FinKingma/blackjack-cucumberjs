var assert = require('chai').assert
var Car = require('../../src/modules/car.js')

module.exports = function () {
  this.Given(/^Jim is driving at (\d+)mph$/, function (speed, done) {
    this.jim = new Car()
    this.jim.setSpeed(speed)
    done()
  })
  
  this.Given(/^John is driving at (\d+)mph$/, function (speed, done) {
    this.john = new Car(this.jim)
    this.john.setSpeed(speed)
    done()
  })

  this.When(/^John's car approaches Jims'$/, function (done) {
    this.clock.tick(2000)
    done()
  })

  this.Then(/^John's car adjusts its speed to Jim's car$/, function (done) {
    assert.equal(this.john.speed, this.jim.speed, 'johns car has not been adjusted')
    done()
  })
}
