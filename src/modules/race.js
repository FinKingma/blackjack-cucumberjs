var Car = require('./car')

function SetupCarWithCC () {
  this.car1 = new Car()
  this.car2 = new Car()
  this.car1.setPosition(100)
  this.car2.setPosition(300)
}

module.exports = SetupCarWithCC
