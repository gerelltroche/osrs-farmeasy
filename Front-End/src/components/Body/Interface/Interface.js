import React from "react";
import classes from './Interface.module.css'

import OptionsToggle from "./OptionsToggle/OptionsToggle";
import PlayerForm from "./PlayerForm/PlayerForm";

const Interface = props => {

    const getLevel = async (name) => {
            const response = await fetch(`http://localhost:4000/${name}`)
            const data = await response.json();
            const level = data.level
            return level;
    }

    const setLevelHandler = async (name) => {
        props.setIsLoading(true)

        let level = await getLevel(name)
        props.setLevel(level)
        props.InvGen(level, props.setInv)

        props.setIsLoading(false)
    }

    let message = ''

    if (props.isLoading) {
        message = '...'
    }
    if (!props.isLoading && props.level) {
        message = props.level
    }

    return (
        <div className={classes.OptionsContainer}>
            <div>
                <PlayerForm
                    getLevel={setLevelHandler}
                    name={props.name}
                    setName={props.setName}/>
                <div className={classes.Text}>Farming Level: {message}</div>
            </div>
            <div>
                <OptionsToggle toggle={props.setShowOptions} showOptions={props.showOptions}/>
            </div>
        </div>
    )
}

export default Interface;

/*
<div className={classes.OptionsContainer}>
    <div className={classes.InputContainer}>
        <p>input</p>
        <p>button</p>
    </div>
    <div><p>option</p></div>
</div>
*/
