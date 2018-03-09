Feature: Score

Scenario Outline: Your score is calculated when the game has ended
	Given John has <cards> in his hands
	When John ends his game
	Then your score is <endScore>

Examples:
| cards 		| endScore  |
| a, j, 7	  | 18		    |
| a, j	    | 21		    |
| 10, 10, j	| 30		    |
