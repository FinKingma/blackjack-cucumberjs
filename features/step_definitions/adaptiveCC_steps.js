var assert = require('chai').assert

module.exports = function () {
  this.Given(/^Jim is driving at (\d+)mph$/, (speed, done) => {
    var sinon = require('sinon')
    this.clock = sinon.useFakeTimers()

    var Car = require('../../src/modules/car.js')
    this.jim = new Car()
    this.jim.setSpeed(speed)
    done()
  })
  
  this.Given(/^John is driving at (\d+)mph$/, (speed, done) => {
    var Car = require('../../src/modules/car.js')
    this.john = new Car(this.jim)
    this.john.setSpeed(speed)
    done()
  })

  this.When(/^John's car approaches Jims'$/, (done) => {
    this.clock.tick(2000)
    done()
  })

  this.Then(/^John's car adjusts its speed to Jim's car$/, (done) => {
    assert.equal(this.john.speed, this.jim.speed, 'johns car has not been adjusted')
    done()
  })
}