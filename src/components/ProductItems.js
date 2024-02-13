import React from "react";
const ProductItems = ({ info, contextObj , filteredDataArr}) => {
  const { id, productName, icon,title,  price, inventory } = info;

  return (
    <li className={`li-store ${filteredDataArr ? `li-search`:``} `} key={id}>
      <h4>{productName} </h4>
      <img src={`${process.env.PUBLIC_URL}/${icon}`} alt={title} height="200px" width="200px"/>
      <h5>{price}€</h5>
      <h6>{inventory} items in stock</h6>
      <button className="addcart"    

        disabled={inventory === 0}
        onClick={() => {
          contextObj.setStore((prevState) => {
            return { ...prevState, cart: [...prevState.cart, info] };
          });
        }}
      >
        {inventory > 0 ? "Add to cart" : "Sold out"}
     
      </button>
    </li>
  );
      }
  export default ProductItems;