import React from "react";
import classes from "./Slot.module.css";

const slot = ({name, amount, link}) => {
    return (
        <div className={classes.Slot}>
            <img draggable={false} src={link} className={classes.SlotImage} alt={name}/>
            <div className={classes.SlotText}>{name}</div>
            <div className={classes.SlotAmount}>{amount}</div>
        </div>
    )
}

export default slot