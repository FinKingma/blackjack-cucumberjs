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

  this.adjustToFrontCar = () => {
    if (this.adaptiveCar) {
      if (this.watchedCar.pos - this.pos < 50 && this.watchedCar.speed < this.speed) {
        this.speed = this.watchedCar.speed
      }
    }
  }

  this.changePos = () => {
    this.pos += parseInt(this.speed)
  }

  this.setSpeed = (speed) => {
    this.originalSpeed = speed
    this.speed = speed
  }

  this.racing = setInterval(() => {
    this.adjustToOriginalSpeed()

    this.adjustToFrontCar()

    this.changePos()
  }, 25)
}

module.exports = Car
