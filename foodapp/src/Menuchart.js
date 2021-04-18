import React from 'react'
import './menuchart.css'

import {useHistory } from "react-router-dom";

function Menuchart() {
    const history=useHistory();
      const move2=()=>{
        history.push('/Menulist');
      }
    
    return (
        <div>
            <div  className="postbox">
     <div onClick={move2} className="post">
      <img className="postimg" src="https://specials-images.forbesimg.com/imageserve/602c7d25888834de668f8a76/960x0.jpg?fit=scale" error="error"></img>
       <h1 className="postname">Burger</h1>
      </div>
      <div className="post">
      <img className="postimg" src="https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Family-Favorite-Cheeseburger-Pasta_EXPS_FT19_44476_F_1211_1.jpg" error="error"></img>
       <h1 className="postname">Pasta</h1>
      </div>

      <div className="post">
      <img className="postimg" src="https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?k=6&m=938742222&s=612x612&w=0&h=on_9ZYG1SG4Xgk7BLZSlaXJl8VYb6ZePDHTN6zukDHM=" error="error"></img>
       <h1 className="postname">Pizza</h1>
      </div>
      <div className="post">
      <img className="postimg" src="https://www.packagingdigest.com/sites/packagingdigest.com/files/styles/article_featured_retina/public/AdobeStock_279692163_Editorial_Use_Only-Beverage-FTR-new.jpg?itok=moSeFM8n" error="error"></img>
       <h1 className="postname">Beverage</h1>
      </div>
        </div>
        </div>
    )
}

export default Menuchart
