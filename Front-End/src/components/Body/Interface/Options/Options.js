import React from "react";
import classes from "../../../Sidebar/Sidebar.module.css";

const Options = props => {
    return <li>
        <input {...props} className={classes.Option}/>{props.children}
    </li>
}

export default Options