import { useContext } from "react";
import { StoreContext } from "../context";



const Cart = () => {
  // Not finished yet :)
  // This will be your task
  const contextObj = useContext(StoreContext);
  console.log(contextObj.store.cart);
  const items = contextObj.store.cart.map((item, i) => (
   <li key={i}>  <h3 >{item.productName}</h3></li> 
  
  )
  
);
  return(
  <div className="cart">
 <ul className="">{items}</ul>
 </div>


  
     
  )

  
};

export default Cart;