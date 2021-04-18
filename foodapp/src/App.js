
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home.js'
import Cart from './Cart';
import Menuilist from './Menuilist.js'

function App() {
  return (
    <div >
      <Router>
     <div className="App">
       <Switch>
       <Route path="/Menulist">
           <Menuilist/>
         </Route>
       <Route path="/Cart">
           <Cart/>
         </Route>
        <Route path="/">
           <Home/>
         </Route>
      </Switch>
     </div>
    </Router>
    </div>
  );
}

export default App;
