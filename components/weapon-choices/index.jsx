import React from "react";
import { weapons, modes } from "../../const";

export default function (props) {
    return (
        <div className="weaponChoiceAnnouncement">
            <span>
                chosen weapon {props.pl1_name}: {props.pl1_weapon || "No weapon selected"}
            </span>
            <span>
                chosen weapon {props.pl2_name}: {props.pl2_weapon || "No weapon selected"}
            </span>
        </div>
        
    )
}