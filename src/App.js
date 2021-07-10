import { useState } from "react";
import { Store, StoreContext } from "./context";

import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Direct from "./components/Direct";
import Contact from "./components/Contact";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";




//import Cart from "./components/Cart";
function App() {
  console.log(StoreContext);
  // Method number one: you add more keys to the passed object, here I added a state
  //const [filteredData, setFilteredData] = useState([]);
  //  <StoreContext.Provider value={{ Store, filteredData, setFilteredData }}>

  // Method number two: you add your Store to a state, so you get the Benefit of the functionality to update your state in this case Store
  const [store, setStore] = useState(Store);
  return (
    <StoreContext.Provider value={{ store, setStore }}>

      <Router>
      <Direct />

      <h1 className="title">Online Store</h1>


      <Switch>
     <Route path="/cart" exact component ={Cart}/> 
   
  
     
      <Route path="/productlist" exact component ={ProductList}/>
      <Route path="/about" exact component ={About}/>
      <Route path="/contact" exact component ={Contact}/>
      <Route path={() => "/main" || "/admin" || "/any-other-word"}>
        </Route>  




      </Switch>
      </Router>

    </StoreContext.Provider>
  );
}

export default App;

