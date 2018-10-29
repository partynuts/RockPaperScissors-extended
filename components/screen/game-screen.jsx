import React from "react";
import { initialState } from ".";
import Score from "../score"
import GameField from "../game-field"
import Footer from "../footer";
import { weapons, results, rules, weaponImgs } from "../../const";

export default function (props) {
    return (
        <div className="weaponChoicePage">
            <Score
                pl1_score={props.pl1_score}
                pl1_name={props.pl1_name}
                pl2_name={props.pl2_name}
                pl2_score={props.pl2_score} />
            <h1 className="weaponChoice">{props.message}</h1>
            <GameField pl1_name={props.pl1_name} pl2_name={props.pl2_name} mode={props.mode} pl1_weapon={props.pl1_weapon} pl2_weapon={props.pl2_weapon} chooseWeapon={chooseWeapon} />
            <Footer resetGame={resetGame} goToStartScreen={goToStartScreen} highscoreData={props.highscoreData}/>
        </div>
    );

    function resetGame() {
        props.updateState({
            pl1_score: initialState.pl1_score,
            pl2_score: initialState.pl2_score,
            pl1_weapon: initialState.pl1_weapon,
            pl2_weapon: initialState.pl2_weapon,
            message: "Choose a weapon!"
        })
    }

    function goToStartScreen() {
        props.updateState({
            ...initialState,
            highscoreData: props.highscoreData
        });
    }

    function setGameResult(pl1_weapon, pl2_weapon) {
        const highscorePl1 = props.highscoreData[props.pl1_name] || 0;
        const highscorePl2 = props.highscoreData[props.pl2_name] || 0;
        const gameResult = getResult(pl1_weapon, pl2_weapon);
        const messages = {
            [results.WIN]: `${props.pl1_name} wins!`,
            [results.LOSE]: `${props.pl2_name} wins!`,
            [results.TIE]: `Tie game!`
        }
        const score = {
            [results.WIN]: { pl1_score: props.pl1_score + 1 },
            [results.LOSE]: { pl2_score: props.pl2_score + 1 },
            [results.TIE]: {}
        }

        props.updateState({
            ...score[gameResult],
            result: gameResult,
            message: messages[gameResult],
            highscoreData:{
                ...props.highscoreData,
                [props.pl1_name]: Math.max(score[gameResult].pl1_score || props.pl1_score, highscorePl1), 
                [props.pl2_name]: Math.max(score[gameResult].pl2_score || props.pl2_score, highscorePl2), 
            }
        })
    }

    function chooseWeapon(pl1_weapon, pl2_weapon) {
        const newPl1Weapon = pl1_weapon || genWeapon();
        const newPl2Weapon = pl2_weapon || genWeapon();
        animateImgs(newPl1Weapon, 'pl1_weapon');
        animateImgs(newPl2Weapon, 'pl2_weapon');
        getResult(newPl1Weapon, newPl2Weapon);
        setTimeout(() => {
            setGameResult(newPl1Weapon, newPl2Weapon);
        }, 1700)
    }

    function getResult(pl1_weapon, pl2_weapon) {
        if (pl1_weapon === pl2_weapon) return results.TIE;
        return rules[pl1_weapon].includes(pl2_weapon) ? results.WIN : results.LOSE;
    }

    function animateImgs(weapon, prop) {
        let prevWeapon;

        function getRandomImage() {
            prevWeapon = genWeapon(prevWeapon)
            props.updateState({
                [prop]: prevWeapon
            })
        }
        for (let counter = 0; counter < 10; counter++) {
            const callback = counter < 9 ? getRandomImage : () => {
                props.updateState({
                    [prop]: weapon
                })
            }
            setTimeout(callback, 150 * counter);
        }

    }
}

function genWeapon(prevWeapon) {
    const randomIndex = Math.floor(Math.random() * Object.keys(weapons).length)
    const randomWeapon = [weapons.ROCK, weapons.PAPER, weapons.SCISSORS][randomIndex]
    return randomWeapon === prevWeapon ? genWeapon(prevWeapon) : randomWeapon
}



