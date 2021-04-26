import React from "react";
import classes from './PlayerForm.module.css'

const PlayerForm = ({ getLevel, name, setName }) => {

    const formSubmitHandler = async (event) => {
        event.preventDefault()
        getLevel(name)
    }

    return (
        <div>
            <form onSubmit={(event) => formSubmitHandler(event)}>
                <input
                className={classes.Input}
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <button
                    className={classes.Submit}
                    onClick={() => getLevel(name)}>
                    <strong>Fetch</strong>
                </button>
            </form>
        </div>
    )
}

export default PlayerForm