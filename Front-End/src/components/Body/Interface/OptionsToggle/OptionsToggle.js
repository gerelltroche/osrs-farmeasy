import React from "react";
import classes from './OptionsToggle.module.css'

const OptionsToggle = ({ toggle, showOptions }) => {

    const toggleOptions = () => {
        toggle(!showOptions)
    }

    return (
        <button className={classes.Button} onClick={toggleOptions}>Open <br />Options</button>
    )
}

export default OptionsToggle