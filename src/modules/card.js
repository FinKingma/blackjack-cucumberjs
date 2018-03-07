const suits = ['hearts', 'spades', 'diamonds', 'clubs']
const ranks = ['7', '8', '9', '10', 'jack', 'queen', 'king', 'ace']

export class Card {
  constructor () {
    this.rank = newRank()
    this.points = getPoints(this.rank)
    this.suite = newSuit()
  }
}

var newSuit = () => {
  const nr = Math.floor(Math.random() * suits.length)
  return suits[nr]
}
var newRank = () => {
  const nr = Math.floor(Math.random() * ranks.length)
  return ranks[nr]
}
var getPoints = (rank) => {
  let points
  switch (rank) {
    case '7':
      points = 7
      break
    case '8':
      points = 8
      break
    case '9':
      points = 9
      break
    case '10':
      points = 10
      break
    case 'jack':
    case 'queen':
    case 'king':
      points = 10
      break
    case 'ace':
      points = 11
      break
    default:
      throw new Error(rank + ' could not be converted to points')
  }
  console.log(points)
  return points
}
