import React from "react";
import { screens, modes, weapons } from "../../const";
import StartScreen from "./start-screen"
import GameScreen from "./game-screen"

export const initialState = {
    screen: screens.START_SCREEN,
    pl1_name: undefined,
    pl2_name: undefined,
    pl1_score: 0,
    pl2_score: 0,
    pl1_weapon: undefined,
    pl2_weapon: undefined,
    mode: undefined,
    message: "Please choose a player mode.",
    result: undefined,
    highscoreData: {},
}

export default class Screen extends React.Component {
    constructor(props) {
        super(props);
        const savedGameState = JSON.parse(localStorage.getItem("playerData"));
        this.state = savedGameState ? {...initialState, ...savedGameState} : { ...initialState }
    }

    updateState(newState) {
        this.setState(newState);
        localStorage.setItem("playerData", JSON.stringify(this.state))
    }

    render() {
        switch (this.state.screen) {
            case screens.START_SCREEN:
                return <StartScreen mode={this.state.mode} message={this.state.message} updateState={this.updateState.bind(this)} />
            case screens.GAME_SCREEN:
                return <GameScreen {...this.state} updateState={this.updateState.bind(this)} />
            default:
                return (
                    <div></div>
                )
        }

    }
}
