import React, { useState } from "react";
import "./Navbar.css"
import logo from "../Assests/logo.png"; 
import cart_icon from "../Assests/cart_icon.png";

function Navbar() {
  const [menu, setMenu] = useState("Shop");
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="MegaMart Logo" />
        <p>MegaMart</p>
      </div>
      <ul className="navbar-menu">
        <li onClick={() => setMenu("/shop")}>
          <a href="/" style={{ textDecoration: "none" }}>
            SHOP{menu === "shop" && <hr />}
          </a>
        </li>
        <li onClick={() => setMenu("mens")}>
          <a href="/mens" style={{ textDecoration: "none" }}>
            MEN{menu === "mens" && <hr />}
          </a>
        </li>
        <li onClick={() => setMenu("womens")}>
          <a href="/womens" style={{ textDecoration: "none" }}>
            WOMEN{menu === "womens" && <hr />}
          </a>
        </li>
        <li onClick={() => setMenu("kids")}>
          <a href="/kids" style={{ textDecoration: "none" }}>
            KIDS{menu === "kids" && <hr />}
          </a>
        </li>
      </ul>
      <div className="navbar-login-cart">
        <a href="/login">
          <button>Login</button>
        </a>
        <a href="/cart">
          <img src={cart_icon} alt="Cart Icon" />
        </a>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}

export default Navbar;
