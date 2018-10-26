import React from "react";
import {modes, screens} from "../../const";
import NameAndOpponent from "../name-and-opponent";


export default class StartScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    chooseMode(mode) {
        this.props.updateState({
            mode,
            message: `You have chosen ${mode}`,
        });
    }

    startGameWithNames(pl1_name, pl2_name) {
        this.props.updateState({
            pl1_name,
            pl2_name,
            screen: screens.GAME_SCREEN,
            message: "Choose your weapon."
        })
    }

    render () {
        return (
        <div className="startScreen">
            <h1>{this.props.message}</h1>
            <div className="btnBox">
                <button className="modeBtn" onClick={() => this.chooseMode(modes.PC_PC)}>{modes.PC_PC} </button>
                <button className="modeBtn" onClick={() => this.chooseMode(modes.HUMAN_PC)}> {modes.HUMAN_PC} </button>
                <button className="modeBtn" onClick={() => this.chooseMode(modes.HUMAN_HUMAN)}>{modes.HUMAN_HUMAN} </button>
            </div>
            <NameAndOpponent mode={this.props.mode} onSubmit={this.startGameWithNames.bind(this)} />
        </div>
        )
    }
}