<template>
  <div>
    <h1>{{ msg }}</h1>

    <div class="playingCards rotateHand">
      <div v-for="card in cards" :key="card.id" :class="'card rank-' + card.rank + ' ' + card.suit">
        <span class="rank">{{ card.rank }}</span>
        <span v-if="card.suit === 'spades'" class="suit">&spades;</span>
        <span v-if="card.suit === 'hearts'" class="suit">&hearts;</span>
        <span v-if="card.suit === 'clubs'" class="suit">&clubs;</span>
        <span v-if="card.suit === 'diams'" class="suit">&diams;</span>
      </div>
    </div>
    <p id="score">Score: {{ score }}</p>
    <button id="newGameBtn" v-on:click="newGame">new game</button>
    <button id="hitBtn" v-if="playing" v-on:click="hit">hit</button>
    <button id="standBtn" v-if="playing" v-on:click="stand">stand</button>
    <p v-if="won">Congratulations! You have won! (House had {{ houseScore }})</p>
    <p v-if="won == false & score > 21">Awwwe, you have lost. You were busted.</p>
    <p v-if="won == false & score <= 21">Awwwe, you have lost. The house won with {{ houseScore }}</p>
  </div>
</template>

<script>
import Game from '@/modules/game'
export default {
  name: 'BlackJackViewer',
  data () {
    return {
      msg: 'Black Jack',
      game: new Game(),
      cards: undefined,
      score: 0,
      playing: false,
      won: undefined,
      houseScore: undefined
    }
  },
  mounted () {

  },
  methods: {
    newGame () {
      this.game.startGame()
      this.cards = this.game.cards
      this.game.calculateplayerScore()
      this.score = this.game.playerScore
      this.houseScore = this.game.houseScore
      this.playing = this.game.playing
      this.won = this.game.won
    },
    hit () {
      this.game.drawCard()
      this.game.calculateplayerScore()
      this.score = this.game.playerScore
      this.playing = this.game.playing
      this.won = this.game.won
    },
    stand () {
      this.game.stand()
      this.playing = this.game.playing
      this.houseScore = this.game.houseScore
      this.won = this.game.won
      console.log('won: ' + this.won)
      console.log('housescore: ' + this.houseScore)
    }
  }
}
</script>

<style lang="css">
@import '../assets/style.css';
@import '../assets/cards.css';
</style>
