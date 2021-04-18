import React ,{useEffect}from 'react'
import Menuitems from './Menuitems.js'
import './menulist.css'
import {IconButton} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BackspaceIcon from '@material-ui/icons/Backspace';
import {useHistory } from "react-router-dom";

function Menuilist() {
    const history=useHistory();
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
     const back=()=>{
         history.push('/');
     }
     const forward=()=>{
        history.push('/Cart');
    }
    return (
        <div>
             <div className="menuieat">
                <div className="menuieatnav"><IconButton onClick={back}> <BackspaceIcon fontSize="large" color="secondary" /></IconButton><h1>Menu</h1><IconButton onClick={forward}style={{ marginRight: '2vw' }}> <ShoppingCartIcon /></IconButton></div>
                <div className="menuboxes"><Menuitems/>
                <Menuitems/>
                <Menuitems/>
                <Menuitems/>
                <Menuitems/>
                <Menuitems/>
                <Menuitems/>
                <Menuitems/>
                <Menuitems/>
                <Menuitems/>
                <Menuitems/>
                </div>
                </div>
        </div>
    )
}

export default Menuilist
