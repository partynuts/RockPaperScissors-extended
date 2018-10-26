import React from "react"

export default function (props) {
    return (
        <div className="scoreNameBox">
            <div className="pl1ScoreName">
                <span className="score">{props.pl1_score}</span>
                <span className="name pl1"> PLAYER1: {props.pl1_name}</span>
            </div>
            <div className="pl2ScoreName">
                <span className="name pl2"> PLAYER2: {props.pl2_name}</span>
                <span className="score" >{props.pl2_score}</span>
            </div>
        </div>
    )
}
