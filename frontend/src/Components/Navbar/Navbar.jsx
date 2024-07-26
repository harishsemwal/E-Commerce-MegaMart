import React from "react";
import "./Navbar.css";
import logo from "../Assests/logo.png";
import cart_icon from "../Assests/hand_icon.png";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="MegaMart Logo" />
        <p>MegaMart</p>
      </div>
      <ul className="navbar-menu">
        <li>SHOP</li>
        <li>MEN</li>
        <li>WOMEN</li>
        <li>KIDS</li>
      </ul>
      <div className="navbar-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="Cart Icon" />
      </div>
    </div>
  );
}


export default Navbar;
