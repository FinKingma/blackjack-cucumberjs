Feature: Playing BlackJack

Scenario: you start the game with 2 cards
	When John is playing blackjack
	Then John has two cards

Scenario: You can get a new card during your turn
	Given John is playing blackjack
	When John asks for a new card
	Then John has three cards

Scenario Outline: Your turn is over when you reach a score above 21
	Given John has a score of 14
	When John gets a card with the score <newCard>
	Then the game is <over>

Examples:
| startScore 	| newCard 	| over 	    |
| 14			    | 8			    | over		  |
| 14			    | 7			    | not over  |

Scenario: You can end the game during your turn
	Given John is playing blackjack
	When John ends his game
	Then the game is over
