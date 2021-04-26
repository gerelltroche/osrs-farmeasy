import React, {useState, useEffect} from 'react'

import classes from './Body.module.css'

import Interface from "./Interface/Interface";
import InventoryGenerator from "./InventoryGenerator/InventoryGenerator";
import Inventory from './Inventory/Inventory'
import Generator from "./InventoryGenerator/Generator/Generator";

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

    useEffect(() => {
        Generator()
    }, [])

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
                    InvGen={InventoryGenerator}
                    setInv={setInventory}
                />
            </div>
            <div className={classes.Inventory}><Inventory inventory={inventory}/></div>
        </div>
    )
}

export default Body