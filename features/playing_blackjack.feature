Feature: Playing BlackJack

Scenario: you start the game with 2 cards
	When John starts playing blackjack
	Then John has two cards

Scenario: You can get a new card during your turn
	Given John has started playing blackjack
	When John asks for a new card
	Then John has a new card

Scenario Outline: Your turn is over when you reach a score above 21
	Given John has a score of <startScore>
	When John gets a card with the score <newCard>
	Then the game is <over>

Examples:
| startScore 	| newCard 	| over 	|
| 20			    | 2			    | yes		|
| 20			    | 1			    | no		|

Scenario: You can end the game during your turn
	Given John has started playing blackjack
	When John ends his game
	Then the game is over
