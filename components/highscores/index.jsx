import React from "react";
import { results } from "../../const";

export default function (props) {
    // console.log("HIGH", props.highscoreData)
    // console.log(Object.keys(props.highscoreData));
    // console.log(Object.values(props.highscoreData))

    const entries = Object.entries(props.highscoreData);
    // console.log("Entry", entries)

    // const resultsHS = [];
    // for (const [highscore, score] of entries) {
    //     console.log("SHOW EM", highscore, score)
    //     console.log("highscore", highscore, "score", score)
    //     resultsHS.push(<li> <span>{highscore}</span><span>{score}</span></li>)
    // }

    function sortItems(a, b) {
        if (a[1] < b[1]) return 1;
        if (a[1] > b[1]) return -1;
        return 0
    }
 
    const highscoreResults = entries.sort(sortItems).slice(0,10).map(([name, score]) => <li><div className="highscoreList"><span className="score">{name}</span> <span className="score">{score}</span></div></li>)

    return (
        <div onClick={props.hideHighscores} className="highScoresOverlay">
            <div className="highScoresContentBox">
                <h2 className="highscoreTitle">
                    Highscores
                </h2>
                <p>The top ten players with the highest scores:</p>
                <div className="highscoreTable">
                    <div className="highscoreTableContent">
                        <span className="score">Name</span> <span className="score">Score</span>
                    </div>

                    <div className="highscoreTableContent">
                        <ol>{highscoreResults}</ol>
                    </div>

                </div>
            </div>
        </div>
    )
}