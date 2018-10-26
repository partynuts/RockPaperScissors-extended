const fs = require("fs");;
const constants = {
    weapons: {
        ROCK: "rock",
        PAPER: "paper",
        SCISSORS: "scissors"
    }
};

eval(fs.readFileSync("./logic/gamePlay.js").toString());;

const {
    ROCK,
    PAPER,
    SCISSORS
} = require("../logic/weapons");

const assert = require("chai").assert;

describe("playRound", function() {
    it("returns correct result for all weapon combinations", () => {
        const rounds = [
            [ROCK, ROCK, 0],
            [ROCK, SCISSORS, 1],
            [ROCK, PAPER, 2],
            [PAPER, PAPER, 0],
            [PAPER, ROCK, 1],
            [PAPER, SCISSORS, 2],
            [SCISSORS, SCISSORS, 0],
            [SCISSORS, PAPER, 1],
            [SCISSORS, ROCK, 2]
        ];
        rounds.forEach(round => {
            const result = playRound(round[0], round[1]);
            assert.equal(result, round[2]);
        });
    });
});

describe("announceWinner", function() {
    it("returns correct string for different winner", () => {
        const winners = [
            [0, "hc", "Tie Game"],
            [0, "cc", "Tie Game"],
            [1, "hc", "You win!"],
            [1, "cc", "R2-D2 wins!"],
            [2, "hc", "The computer wins"],
            [2, "cc", "C-3PO wins"]
        ];
        winners.forEach(winner => {
            const result = announceWinner(winner[0], winner[1]);
            assert.equal(result, winner[2]);
        });
    });
});