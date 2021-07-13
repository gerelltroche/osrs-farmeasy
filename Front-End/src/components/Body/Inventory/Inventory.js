import React from 'react';

import classes from './Inventory.module.css'

import Slot from './Slot/Slot'


const inventory = ({ inventory }) => {



    return(
    <div className={classes.Inventory}>
        {inventory.map((el, index) => {
            return <Slot name={el.name} amount={el.amount} link={el.image} key={el.name + index + el.link}/>
        })}
    </div>
    )
};

export default inventory