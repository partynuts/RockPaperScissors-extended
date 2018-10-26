import React from "react";
import Highscores from "../highscores";


export default class Footer extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            highscoresIsVisible: false
        }
    }

    showHighscores() {
        this.setState({ highscoresIsVisible: !this.state.highscoresIsVisible });
    }

    hideHighscores() {
        this.setState({ highscoresIsVisible: false });
    }

    render() {

        return (
            <div className="footer">
                <button onClick={() => this.props.resetGame()}>Reset Game</button>
                <button onClick={() => this.showHighscores()}>High Scores</button>
                <button onClick={() => this.props.goToStartScreen()}>Home</button>
                {this.state.highscoresIsVisible && (
                    <Highscores hideHighscores={this.hideHighscores.bind(this)} highscoreData={this.props.highscoreData}/>
                )}
            </div>
        )
    }
}