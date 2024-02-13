import { useContext } from "react";
import { StoreContext } from "../context";

const Cart = () => {
  const contextObj = useContext(StoreContext);
  console.log(contextObj.store.cart);
  const items = contextObj.store.cart.map((item, i) => (
   <li key={i}>  <h3 >{item.productName}</h3></li> 
  )
);
  return(
  <div className="cart">
 <ul>{items}</ul>
 </div>  
  )
};

export default Cart;