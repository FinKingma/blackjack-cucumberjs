Feature: Score

Scenario Outline: Your score is calculated when the game has ended
	Given John has <cards>
	When John ends his game
	And your score is <endScore>

Examples:
| cards 		| endScore 	|
| ace, jack, 7	| 18		|
| ace, jack	    | 21		|
| 10, 10, jack	| 30		|
