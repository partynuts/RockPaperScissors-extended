import React from "react";
import { weapons, weaponImgs } from "../../const";


export default function (props) {
    return (
        <div className="weaponChoiceBtns">
            <button onClick={() => props.chooseWeapon(weapons.ROCK)}><img className="smallImg" src={weaponImgs[weapons.ROCK]} alt={props.pl1_weapon} />Rock</button>
            <button onClick={() => props.chooseWeapon(weapons.PAPER)}><img className="smallImg" src={weaponImgs[weapons.PAPER]} alt={props.pl1_weapon} />Paper</button>
            <button onClick={() => props.chooseWeapon(weapons.SCISSORS)}><img className="smallImg" src={weaponImgs[weapons.SCISSORS]} alt={props.pl1_weapon} />Scissors</button>
        </div>
    )
}
