## Rock Paper Scissors

Rock-paper-scissors (also known as **scissors-paper-rock** or other variants) is a [hand game](https://en.wikipedia.org/wiki/Hand_game) usually played between two people, in which each player simultaneously forms one of three shapes with an outstretched hand. These shapes are "rock" (a closed fist), "paper" (a flat hand), and "scissors" (a fist with the index finger and middle finger extended, forming a V). "Scissors" is identical to the two-fingered [V sign](https://en.wikipedia.org/wiki/V_sign) (aka "victory" or "peace sign") except that it is pointed horizontally instead of being held upright in the air. A [simultaneous](https://en.wikipedia.org/wiki/Simultaneous_game), [zero-sum game](https://en.wikipedia.org/wiki/Zero-sum_game), it has only two possible outcomes: a draw, or a win for one player and a loss for the other.

A player who decides to play rock will beat another player who has chosen scissors ("rock crushes scissors" or sometimes "blunts scissors"[[1\]](https://en.wikipedia.org/wiki/Rock%E2%80%93paper%E2%80%93scissors#cite_note-1)), but will lose to one who has played paper ("paper covers rock"); a play of paper will lose to a play of scissors ("scissors cuts paper"). If both players choose the same shape, the game is tied and is usually immediately replayed to break the tie.

https://en.wikipedia.org/wiki/Rock%E2%80%93paper%E2%80%93scissors

## Play Game

#### Player Mode

You can play human vs. computer or switch to computer vs. computer.

#### Game Options

In human vs. computer mode you start the game by choosing a weapon. After each round you can

*   either play another round. Scores will be added up.
*   or start a new game. Scores will be reset.

In computer vs. computer mode you start the game by clicking the start fight button. After each round you have the same options as in human vs. computer mode.

#### Basic Rules

*   Rock beats Scissors
*   Scissors beats Paper
*   Paper beats Rock

## Tech used

**Built with**

*   pure JavaScript
*   Mocha and Chai used for testing
*   no other libraries or frameworks used

Target browser was Chrome but also tested in Mozilla.

## Installation

For testing purposes install

`npm i mocha`

`npm i chai`

## How to use

There is no server in this project so simply open the index.html file and start playing.

## Tests

To run the test navigate to the test-folder in the project folder and in your command line type

`npm test`.

The tests will pass if

*   the results for all different weapon combinations are correct
*   the result text for who is the winner is displayed correct for the different player-mode / result combinations.
