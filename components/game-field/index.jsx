import React from "react";
import { weapons, modes } from "../../const";
import WeaponChoices from "../weapon-choices";
import ImageButton from "../image-button";
import BattlefieldImgs from "../battlefield-imgs";


export default function (props) {
    switch (props.mode) {
        case modes.HUMAN_PC:
            return (
                <div className="gameFieldBox">
                    <BattlefieldImgs pl1_weapon={props.pl1_weapon} pl2_weapon={props.pl2_weapon} />
                    {/* <WeaponChoices pl1_name={props.pl1_name} pl2_name={props.pl2_name} pl1_weapon={props.pl1_weapon} pl2_weapon={props.pl2_weapon} /> */}
                    <ImageButton chooseWeapon={props.chooseWeapon} />
                </div>
            );
        case modes.PC_PC:
            return (
                <div className="gameFieldBox">
                    <BattlefieldImgs pl1_weapon={props.pl1_animatedWeapon || props.pl1_weapon} pl2_weapon={props.pl2_weapon} />
                   
                    {/* <WeaponChoices pl1_name={props.pl1_name} pl2_name={props.pl2_name} pl1_weapon={props.pl1_weapon} pl2_weapon={props.pl2_weapon} /> */}
                    <div className="weaponChoiceBtns">
                        <button onClick={() => props.chooseWeapon()}>Start!</button>
                    </div>
                </div>
            );
        case modes.HUMAN_HUMAN:
            return (
                <div className="gameFieldBox">
                    <BattlefieldImgs pl1_weapon={props.pl1_weapon} pl2_weapon={props.pl2_weapon} />
                    {/* <WeaponChoices pl1_name={props.pl1_name} pl2_name={props.pl2_name} pl1_weapon={props.pl1_weapon} pl2_weapon={props.pl2_weapon} /> */}
                    <ImageButton chooseWeapon={props.chooseWeapon} />
                </div>
            )
    }
}