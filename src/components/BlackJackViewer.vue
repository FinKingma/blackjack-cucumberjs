<template>
  <div>
    <h1>{{ msg }}</h1>
    <table id="cardDeck" v-if="cards">
      <tr>
        <td id="card" v-for="card in cards" :key="card.id">
          {{ card.rank }}
          of
          {{ card.suite }}
        </td>
      </tr>
    </table>
    <p>{{ score }}</p>
    <button v-on:click="newGame">new game</button>
    <button v-if="playing" v-on:click="hit">hit</button>
    <button v-if="playing" v-on:click="stand">stand</button>
    <p v-if="won">Congratulations! You have won!</p>
    <p v-if="won == false">Awwwe, you have lost</p>
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
      won: undefined
    }
  },
  mounted () {

  },
  methods: {
    newGame () {
      this.game.newGame()
      this.cards = this.game.cards
      this.score = this.game.calculateScore()
      this.playing = true
      this.won = undefined
    },
    hit () {
      this.game.drawCard()
      this.score = this.game.calculateScore()
      if (this.score > 21) {
        this.playing = false
        this.won = false
      }
    },
    stand () {
      this.playing = false
      this.won = this.game.haveYouWon()
    }
  }
}
</script>

<style src="../assets/style.css">
