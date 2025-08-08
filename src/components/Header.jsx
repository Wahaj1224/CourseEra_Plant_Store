import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';
import { FaShoppingCart } from 'react-icons/fa'; 
import { useSelector } from "react-redux";



const Header = () => {

   const cart = useSelector((state) => state.items);
   let NumberOfItems = 0;

   if (cart && cart.length > 0) {
  NumberOfItems = cart.length; 
} else {
  NumberOfItems = 0;
}
   console.log("Number of items in cart:", NumberOfItems);
  



  return (
    <header className="navbar">
      <div className="navbar-container">

        <div className="brand" style={{ color: "white", fontWeight: "bold", fontSize: "1.2rem",marginLeft: "20px" }}>
          Plantique
          <div>
          <img src="/logo1.png" alt="" height="50" style={{ marginLeft: "20px" }} />
          </div>
        </div>



        

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
                   <Link to="/cart">
            <FaShoppingCart style={{ marginRight: "5px" }} />
            {/* Cart (100) */}
            Cart ({NumberOfItems})
          </Link>

        </nav>
      </div>
    </header>
  );
};

export default Header;
