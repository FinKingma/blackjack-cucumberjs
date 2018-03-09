var assert = require('chai').assert
var Game = require('../../src/modules/game')
var Card = require('../../src/modules/card')

module.exports = function () {
  this.When(/^John is playing blackjack$/, function (callback) {
    this.game = new Game()
    this.game.startGame()
    callback();
  });

  this.Then(/^John has two cards$/, function (callback) {
    assert(this.game.cards.length === 2, 'John has ' + this.game.cards.length + ' in his hands, but expected was 2')
    callback();
  });


  this.When(/^John asks for a new card$/, function (callback) {
    this.game.drawCard()
    callback();
  });

  this.Then(/^John has three cards$/, function (callback) {
    assert(this.game.cards.length === 3, 'John has ' + this.game.cards.length + ' in his hands, but expected was 3')
    callback();
  });


  this.Given(/^John has a score of 14$/, function (callback) {
    this.game = new Game()
    this.game.startGame('7', '7')

    callback();
  });

  this.When(/^John gets a card with the score (.*)$/, function (newCardScore, callback) {
    this.game.drawCard(newCardScore)
    callback();
  });

  this.Then(/^the game is (.*)$/, function (over, callback) {
    assert(this.game.playing === (over !== 'over'), 'expected game to be ' + over)
    callback();
  });
}
