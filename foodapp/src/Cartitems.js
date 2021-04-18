import React from 'react'
import './cartitems.css'
import {Button} from '@material-ui/core';


function Cartitems({name,Qt,size,amt}) {
    

    
    return (
        <div>
            <div className="cartselection">
                  <img src="https://i.ibb.co/tmTc5H0/977986.jpg" alt="error"></img>
                  <h3>{name}</h3>
                  <p>Quantity : {Qt}</p>
                  <p>Size: {size}</p>
                  <p>Amount: {amt}</p>
                  <Button  size="small" color="secondary" variant="contained">Remove</Button>
            </div>
        </div>
    )
}

export default Cartitems
