import React,{useState,useEffect} from 'react'
import './menuitems.css'
import {IconButton,Button} from '@material-ui/core'
import{useStateValue} from './StateProvider.js'


function Menuitems() {
        const [quantity, setQut]=useState(1);
        const[size,setSize]=useState('small');
        const[total,setTotal]=useState(0);
        const[{},dispatch]=useStateValue();
    useEffect(() => {
       if(size==='small')
       {
           setTotal(quantity * 10);
       }
       else if(size==='medium')
       {
        setTotal(quantity * 15);
       }
       else{
        setTotal(quantity * 20);
       }
        
    },[quantity,size])

   const addtocart=()=>{
       dispatch({
        type: 'ADD',
        item:{
            name: '',
           Qt: quantity,
           Size: size,
           Total: total
        }
       });
       setSize('small');
       setQut('1');
       document.getElementById("select").selectedIndex = 0;
   }
        const minus =()=>{
            if(quantity>1)
            setQut(quantity - 1);
        }
        const plus =()=>{
           
            setQut(quantity + 1);
        }
    return (
        <div>
            <div className="items">
                <img className="itemsimage" src="https://i.ibb.co/tmTc5H0/977986.jpg" alt="error"></img>
                <span style={{width: '100%'}}>Allo tikki</span>
                <div className="quantity">
                  <p>Quanity</p>
                  <span style={{ alignItems : 'center'}}>
                      <IconButton onClick={minus} color="secondary">-</IconButton>
                      {quantity} 
                      <IconButton onClick={plus}color="secondary">+</IconButton>
                      </span>
                </div>
                <div className="quantity">
                    <p>Size</p>
                    <select id="select" onChange={(event)=> setSize(event.target.value) }className="selectbox">
                        <option value="small" >small</option>
                        <option value="medium" >medium</option>
                        <option value="large">large</option>
                    </select>
                </div>
                <div className="quantity">
                  <Button onClick={addtocart} variant="contained" color="secondary">Add to cart</Button>
                  <span>Total : Rs {total}</span>
                </div>
            </div>
        </div>
    )
}

export default Menuitems
