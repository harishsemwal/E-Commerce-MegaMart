import React, { useContext, useState, useRef } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png"; 
import cart_icon from "../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from "../Assets/nav_dropdown.png";

function Navbar() {
  const [menu, setMenu] = useState("Shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="MegaMart Logo" />
        <p>MegaMart</p>
      </div>
      <img className="nav-dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt="Dropdown Icon" />
      <ul ref={menuRef} className="navbar-menu">
        <li onClick={() => setMenu("Shop")}>
          <a href="/" style={{ textDecoration: "none" }}>
            SHOP{menu === "Shop" && <hr />}
          </a>
        </li>
        <li onClick={() => setMenu("Mens")}>
          <a href="/mens" style={{ textDecoration: "none" }}>
            MEN{menu === "Mens" && <hr />}
          </a>
        </li>
        <li onClick={() => setMenu("Womens")}>
          <a href="/womens" style={{ textDecoration: "none" }}>
            WOMEN{menu === "Womens" && <hr />}
          </a>
        </li>
        <li onClick={() => setMenu("Kids")}>
          <a href="/kids" style={{ textDecoration: "none" }}>
            KIDS{menu === "Kids" && <hr />}
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
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;