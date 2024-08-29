import React, { useContext, useState, useRef } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from "../Assets/nav_dropdown.png";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState("Shop"); // Track the active menu item
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const toggleDropdown = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName); // Update the active menu item on click
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="MegaMart Logo" />
        <p>MegaMart</p>
      </div>
      <img
        className="nav-dropdown"
        onClick={toggleDropdown}
        src={nav_dropdown}
        alt="Dropdown Icon"
      />
      <ul ref={menuRef} className="navbar-menu">
        {["Shop", "Mens", "Womens", "Kids"].map((menuName) => (
          <li
            key={menuName}
            onClick={() => handleMenuClick(menuName)}
          >
            <a
              href={`/${menuName.toLowerCase()}`}
              style={{ textDecoration: "none" }}
              className={activeMenu === menuName ? "active" : ""}
            >
              {menuName.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
      <div className="navbar-login-cart">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <a href="/login">
            <button>Login</button>
          </a>
        )}

        <a href="/cart">
          <img src={cart_icon} alt="Cart Icon" />
        </a>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;
