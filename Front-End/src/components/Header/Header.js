import React from "react";
import logo from '../../assets/images/logo.svg'
import classes from './Header.module.css'

const Header = props => {
    return (
        <div className={classes.Container}>
            <img src={logo} className={classes.Logo} alt={'osrs farming logo'}/>
            <h1 className={classes.Title}>FarmEasy</h1>
        </div>
    )
}

export default Header;