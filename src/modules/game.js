import { Card } from './card'

function Game () {
  this.cards = []
  this.newGame = () => {
    this.cards = []
    this.cards.push(new Card())
    this.cards.push(new Card())
    this.calculateScore()
  }
  this.drawCard = () => {
    this.cards.push(new Card())
    this.calculateScore()
  }
  this.calculateScore = () => {
    let score = 0
    let aces = 0
    for (let card of this.cards) {
      score += card.points
      if (card.rank === 'ace') aces++
    }
    while (score > 21 && aces > 0) {
      score -= 10
      aces -= 1
    }

    return score
  }
  this.haveYouWon = () => {
    const computerScore = this.generateComputerScore()
    const playerScore = this.calculateScore()
    return playerScore > computerScore
  }
  this.generateComputerScore = () => {
    const possibleScores = [16, 17, 18, 18, 19, 19, 19, 20, 20, 21]
    const nr = Math.floor(Math.random() * possibleScores.length - 1)
    return possibleScores[nr]
  }
}

export default Game
