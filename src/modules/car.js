// var AdaptiveCC = require('./adaptiveCC')

function Car () {
  this.speed = 0
  this.pos = 0
  this.carInFront = undefined
  this.originalSpeed = undefined
  this.CruiseControlAdjustment = false

  this.updatePos = () => {
    this.pos += this.speed
  }

  this.setPosition = (pos) => {
    this.pos = pos
  }

  this.setSpeed = (speed) => {
    this.speed = parseInt(speed)
  }

  this.trackCar = (car) => {
    this.carInFront = car
  }

  this.checkForIncomingCars = () => {
    if (this.carInFront) {
      if (this.carInFront.speed <= this.speed && this.carInFront.pos - +this.pos <= 50) {
        this.CruiseControlAdjustment = true
      } else {
        this.CruiseControlAdjustment = false
      }
    }
  }

  this.adjustSpeedIfNecessary = () => {
    if (!this.originalSpeed) {
      this.originalSpeed = this.speed
    }
    if (this.CruiseControlAdjustment) {
      if (!this.carInFront) throw new Error('no car found to adjust to')
      this.speed = this.carInFront.speed
    } else {
      this.speed = this.originalSpeed
      this.originalSpeed = undefined
    }
  }

  this.racing = setInterval(() => {
    this.checkForIncomingCars()
    this.adjustSpeedIfNecessary()
    this.updatePos()
  }, 25)
}

module.exports = Car
