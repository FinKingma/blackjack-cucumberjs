// var AdaptiveCC = require('./adaptiveCC')

function Car () {
  this.speed = 0

  this.updatePos = () => {
    this.pos += this.speed
  }

  this.setPosition = (pos) => {
    this.pos = pos
  }

  this.setSpeed = (speed) => {
    this.speed = parseInt(speed)
  }

  this.racing = setInterval(() => {
    this.updatePos()
  }, 25)
}

module.exports = Car
