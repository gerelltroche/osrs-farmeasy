import React, {useState} from 'react'

import classes from './Body.module.css'

import Interface from "./Interface/Interface";
import InventoryGenerator from "./InventoryGenerator/InventoryGenerator";
import Inventory from './Inventory/Inventory'

const Body = props => {
    const [name, setName] = useState('Enter Username'); //this should be helper text instead of initializing it like this.
    const [level, setLevel] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [inventory, setInventory] = useState([
        {name: '', amount: null, image: null},
        {name: '', amount: null, image: null},
        {name: '', amount: null, image: null},
        {name: '', amount: null, image: null},
        {name: '', amount: null, image: null},
        {name: '', amount: null, image: null},
        {name: '', amount: null, image: null},
        {name: '', amount: null, image: null},
        {name: '', amount: null, image: null},
        {name: '', amount: null, image: null},
        {name: '', amount: null, image: null},
        {name: '', amount: null, image: null},
        {name: '', amount: null, image: null},
        {name: '', amount: null, image: null},
        {name: '', amount: null, image: null},
        {name: '', amount: null, image: null},
        {name: '', amount: null, image: null},
        {name: '', amount: null, image: null},
        {name: '', amount: null, image: null},
        {name: '', amount: null, image: null},
        {name: '', amount: null, image: null},
        {name: '', amount: null, image: null},
        {name: '', amount: null, image: null},
        {name: '', amount: null, image: null},
        {name: '', amount: null, image: null},
        {name: '', amount: null, image: null},
        {name: '', amount: null, image: null},
        {name: '', amount: null, image: null},
    ])


    return (
        <div>
            <div className={classes.Interface}>
                <Interface
                    name={name}
                    level={level}
                    isLoading={isLoading}
                    error={error}
                    setName={setName}
                    setLevel={setLevel}
                    setIsLoading={setIsLoading}
                    setError={setError}
                    setShowOptions={props.setShowOptions}
                    showOptions={props.showOptions}
                />
            </div>
            <div className={classes.Inventory}><Inventory inventory={inventory}/></div>
            <InventoryGenerator level={level} inventory={inventory} setInventory={setInventory}/>
        </div>
    )
}

export default Body