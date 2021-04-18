import React from 'react'
import {IconButton,Button} from '@material-ui/core';
import BackspaceIcon from '@material-ui/icons/Backspace';
import './cart.css'
import Cartitems from './Cartitems';
import {useHistory } from "react-router-dom";
import {useStateValue} from './StateProvider.js'
import{Totalamount} from './reducer.js'

function Cart() {
    const [{items},dispatch]=useStateValue();
    const history=useHistory();
    const move1=()=>{
        console.log(items);
        history.push('/');
    }
    return (
        <div>
             <div className="navv">
                <div className="logoo"><img src="https://cdn.dribbble.com/users/751806/screenshots/3100907/lovefood-01.png" alt="error" ></img>
            </div> 
            <IconButton onClick={move1} style={{ marginRight: '2vw' }}> <BackspaceIcon fontSize="large" color="secondary" /></IconButton>
            </div>
            <div className="cartbody">
                <div style={{ wordBreak: 'break-word' }}><h1>Thanks for shopping....</h1></div>

                {items.map((item) =>(
                              <Cartitems name={item.name}  Qt={item.Qt} size={item.Size} amt={item.Total} />))}
        
                <div className="cartbottom"><h1>Total:-Rs  {Totalamount(items)}</h1><Button variant="contained" color="secondary">Pay and checkout</Button></div>
            </div>
        </div>
    )
}

export default Cart
