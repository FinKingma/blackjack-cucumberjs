var assert = require('chai').assert
var Game = require('../../src/modules/game')
var Card = require('../../src/modules/card')

module.exports = function () {
  this.Given(/^John has (.*) in his hands$/, function (cards, callback) {
    this.game = new Game()
    var cardData = cards.split(', ')
    for (var cardName of cardData) {
      var card = new Card(cardName)
      this.game.cards.push(card)
    }
    callback();
  });

  this.When(/^John ends his game$/, function (callback) {
    this.game.stand()
    callback();
  });

  this.Then(/^your score is (.*)$/, function (endScore, callback) {
    assert(this.game.playerScore === +endScore, 'your endscore (' + this.game.playerScore + ') did not match the expected result')
    callback();
  });
}
