import React from 'react'
import './home.css';
import {IconButton} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Menu from './Menu.js';
import {useHistory } from "react-router-dom";
               
function Home() {
    const history=useHistory();
    const move=()=>{
        history.push('/Cart');
    }
    return (
        <div>
        <div className="body">
            <div className="nav">
                <div className="logo"><img src="https://cdn.dribbble.com/users/751806/screenshots/3100907/lovefood-01.png" alt="error" ></img>
            </div> 
            
            <IconButton onClick={move}style={{ marginRight: '2vw' }}> <ShoppingCartIcon /></IconButton>
            </div>
           <div className="text">EAT THIS MONSTER <br></br><span style={{ fontSize: '30px' }}>Order now</span></div>
         <div className="navbottom"></div>
           
            </div>
           <Menu/>
        </div>
    )
}

export default Home
