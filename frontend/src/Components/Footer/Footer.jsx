import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instgram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="Company Logo" />
        <p>MegaMart</p>
      </div>

      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="footer-social-icons">
        <div className="footer-icon-container">
          <img src={instgram_icon} alt="Instagram Icon" />
        </div>
        <div className="footer-icon-container">
          <img src={whatsapp_icon} alt="WhatsApp Icon" />
        </div>
        <div className="footer-icon-container">
          <img src={pintester_icon} alt="Pinterest Icon" />
        </div>
      </div>

      <div className="footer-copyright">
        <p>&copy; 2024 - All Rights Reserved by Harish Semwal.</p>
      </div>
    </div>
  );
}

export default Footer;
