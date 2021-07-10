import { Link } from "react-router-dom";


const Direct = ()=>{
    return(
    <div className="head">
<nav className="nav">
   <ul className="nav-ul">
   
 < Link className="a" to="/cart">
       <li className="nav-li">Cart</li>
     <Link className="a" to="/productlist">
       <li className="nav-li">Store</li>
     </Link>
     
     </Link>
     <Link className="a" to="/contact">
       <li className="nav-li">Contact us</li>
     </Link>
     <Link className="a" to="/about">
       <li className="nav-li">About</li>
     </Link>
     
     
     </ul>
   </nav>
   </div>
        
    )}

export default Direct;