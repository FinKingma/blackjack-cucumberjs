var Car = require('./car')

function Race () {
  this.car1 = new Car(undefined)
  this.car2 = new Car(this.car1)
}

module.exports = Race
