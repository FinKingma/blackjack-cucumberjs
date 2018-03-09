const suits = ['hearts', 'spades', 'diams', 'clubs']
const ranks = ['7', '8', '9', '10', 'j', 'q', 'k', 'a']

function Card (fixedRank) {
  this.rank = newRank(fixedRank)
  this.points = getPoints(this.rank)
  this.suit = newSuit()
}

var newSuit = () => {
  const nr = Math.floor(Math.random() * suits.length)
  return suits[nr]
}
var newRank = (fixedRank) => {
  if (fixedRank) {
    return fixedRank
  } else {
    const nr = Math.floor(Math.random() * ranks.length)
    return ranks[nr]
  }
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
    case 'j':
    case 'q':
    case 'k':
      points = 10
      break
    case 'a':
      points = 11
      break
    default:
      throw new Error(rank + ' could not be converted to points')
  }
  return points
}

module.exports = Card
