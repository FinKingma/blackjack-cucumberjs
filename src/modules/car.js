var AdaptiveCC = require('./adaptiveCC')

function Car () {
  this.speed = 0
  this.carInFront = undefined
  this.originalSpeed = 0

  this.updatePos = () => {
    this.pos += this.speed
  }

  this.setPosition = (pos) => {
    this.pos = pos
  }

  this.setSpeed = (speed) => {
    this.speed = parseInt(speed)
  }

  this.spotCar = (car) => {
    this.carInFront = car
  }

  this.racing = setInterval(() => {
    if (this.carInFront) {
      this.speed = this.carInFront.speed
    }
    this.updatePos()
  }, 25)
}

module.exports = Car
