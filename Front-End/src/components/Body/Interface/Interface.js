import React from "react";
import classes from './Interface.module.css'

import OptionsToggle from "./OptionsToggle/OptionsToggle";
import PlayerForm from "./PlayerForm/PlayerForm";

const Interface = props => {

    const getLevel = async (name) => {
        props.setIsLoading(true)
        props.setError(null);

        try {
            const response = await fetch(`http://192.168.86.41:4000/${name}`)
            const data = await response.json();

            const level = data.level
            console.log(level)
            props.setLevel(level)
        } catch (err) {
            props.setError(err.message)
        }

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
                <PlayerForm getLevel={getLevel} name={props.name} setName={props.setName}/>
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
