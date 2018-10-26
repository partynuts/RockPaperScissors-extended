import React from "react";
import {weapons, weaponImgs} from "../../const";

export default function(props) {
    return (
        <div className="battleImages">
            <div className="weaponImg pl1">
                <img src={weaponImgs[props.pl1_weapon] || weaponImgs[weapons.ROCK]} alt={props.pl1_weapon} />
            </div>
            <div className="pl2 weaponImg">
                <img src={weaponImgs[props.pl2_weapon] || weaponImgs[weapons.ROCK]} alt={props.pl2_weapon} />
            </div>
        </div>
    )
}
