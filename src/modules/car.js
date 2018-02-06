var AdaptiveCC = require('./adaptiveCC')

function Car (car) {
  this.speed = 0
  this.originalSpeed = 0
  this.adaptiveCar = false
  this.watchedCar = undefined

  if (car) {
    this.adaptiveCar = true
    this.watchedCar = car
    this.pos = 100
  } else {
    this.pos = 300
  }

  this.adjustToOriginalSpeed = () => {
    if (this.originalSpeed > this.speed) this.speed = this.originalSpeed
  }

  this.changePos = () => {
    this.pos += this.speed
  }

  this.setSpeed = (speed) => {
    this.originalSpeed = parseInt(speed)
    this.speed = parseInt(speed)
  }

  this.racing = setInterval(() => {
    this.adjustToOriginalSpeed()

    if (this.adaptiveCar) {
      this.speed = AdaptiveCC.adjustToFrontCar(this.speed, this.pos, this.watchedCar)
    }

    this.changePos()
  }, 25)
}

module.exports = Car
