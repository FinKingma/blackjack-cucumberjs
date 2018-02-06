var Car = require('./car')

function SetupCarWithCC () {
  this.car1 = new Car(undefined)
  this.car2 = new Car(this.car1)
}

module.exports = SetupCarWithCC
