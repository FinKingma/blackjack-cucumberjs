var sinon = require('sinon')
var clock = sinon.useFakeTimers()

function World () {
  this.clock = clock
}

module.exports = function () {
  this.World = World
}
