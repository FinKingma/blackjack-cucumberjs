var adaptiveCC = {
  adjustToFrontCar: (speed, pos, watchedCar) => {
    if (watchedCar.pos - pos < 50 && watchedCar.speed < speed) {
      return watchedCar.speed
    } else {
      return speed
    }
  },
  adjustToOriginalSpeed: (speed, originalSpeed) => {
    if (originalSpeed > speed) {
      return originalSpeed
    } else {
      return speed
    }
  }
}

module.exports = adaptiveCC
