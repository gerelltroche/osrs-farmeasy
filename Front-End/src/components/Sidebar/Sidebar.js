import React from "react";
import classes from './Sidebar.module.css'

const Sidebar = props => {

    const closeSidebarHandler = () => {
        props.setShowOptions(!props.showOptions)
    }

    if (props.showOptions === true) {
        return (
            <div className={classes.Sidebar}>
                <div className={classes.Header} onClick={closeSidebarHandler}>➜ Options</div>
                <ul className={classes.OptionContainer}>
                    <li><input type={'checkbox'} name={'fairy'} className={classes.Option}/>Fairy Rings?</li>
                    <li><input type={'checkbox'} name={'fairy'} className={classes.Option}/>TeleTabs?</li>
                    <li><input type={'checkbox'} name={'fairy'} className={classes.Option}/>Craziness</li>
                    <li><input type={'checkbox'} name={'fairy'} className={classes.Option}/>Fairy Rings?</li>
                    <li><input type={'checkbox'} name={'fairy'} className={classes.Option}/>Fairy Rings?</li>
                    <li><input type={'checkbox'} name={'fairy'} className={classes.Option}/>Fairy Rings?</li>
                </ul>
            </div>
        )
    } else return null
}

export default Sidebar