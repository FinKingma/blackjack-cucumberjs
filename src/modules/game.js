import Card from './card'

function Game () {
  this.cards = []
  this.houseScore = undefined
  this.playerScore = undefined
  this.playing = false
  this.won = undefined

  this.startGame = (fixedCard1, fixedCard2) => {
    this.cards = []
    if (fixedCard1) this.cards.push(new Card(fixedCard1))
    else this.cards.push(new Card())

    if (fixedCard2) this.cards.push(new Card(fixedCard2))
    else this.cards.push(new Card())

    this.playing = true
    this.won = undefined
    this.calculateplayerScore()
  }
  this.drawCard = (fixedCard) => {
    if (fixedCard) this.cards.push(new Card(fixedCard))
    else this.cards.push(new Card())

    this.calculateplayerScore()
    if (this.playerScore > 21) {
      this.playing = false
      this.won = false
    }
  }
  this.calculateplayerScore = () => {
    let score = 0
    let aces = 0
    for (let card of this.cards) {
      score += card.points
      if (card.rank === 'a') aces++
    }
    while (score > 21 && aces > 0) {
      score -= 10
      aces -= 1
    }

    this.playerScore = score
  }
  this.stand = () => {
    this.calculateplayerScore()
    this.calculateHouseEndScore()
    this.playing = false
    this.won = this.playerScore > this.houseScore
  }
  this.calculateHouseEndScore = () => {
    const possibleScores = [16, 17, 18, 18, 19, 19, 19, 20, 20, 21]
    const nr = Math.floor(Math.random() * (possibleScores.length - 1))
    this.houseScore = possibleScores[nr]
  }
}

module.exports = Game
