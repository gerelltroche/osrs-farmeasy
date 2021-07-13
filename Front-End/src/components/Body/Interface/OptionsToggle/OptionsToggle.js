import React from "react";
import classes from './OptionsToggle.module.css'

const OptionsToggle = ({ toggle, showOptions }) => {

    const toggleOptions = () => {
        toggle(!showOptions)
    }

    return (
        <button className={classes.Button} onClick={toggleOptions}>Options</button>
    )
}

export default OptionsToggle