export const screens = {
    START_SCREEN: "start-screen",
    GAME_SCREEN: "weapon-choice",
}

export const modes = {
    PC_PC: "Computer vs. Computer",
    HUMAN_PC: "Human vs. Computer",
    HUMAN_HUMAN: "Human vs. Human"
}

export const weapons = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors"
}

export const results = {
    TIE: "tie",
    WIN: "win",
    LOSE: "lose"
}

export const rules = {
    [weapons.ROCK]: [weapons.SCISSORS],
    [weapons.PAPER]: [weapons.ROCK],
    [weapons.SCISSORS]: [weapons.PAPER]
}


export const weaponImgs = {
    [weapons.ROCK]: "images/rock2.png",
    [weapons.PAPER]: "images/paper2.png",
    [weapons.SCISSORS]: "images/scissors2.png"
}