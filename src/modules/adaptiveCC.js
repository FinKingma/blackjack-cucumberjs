var adaptiveCC = {
  adjustToFrontCar: (speed, pos, watchedCar) => {
    if (watchedCar.pos - pos < 50 && watchedCar.speed < speed) {
      return watchedCar.speed
    } else {
      return speed
    }
  }
}

module.exports = adaptiveCC
