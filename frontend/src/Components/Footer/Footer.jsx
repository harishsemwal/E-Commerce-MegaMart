import React from "react";
import "./Footer.css";
import footer_logo from "../Assests/logo_big.png";
import instgram_icon from "../Assests/instagram_icon.png";
import pintester_icon from "../Assests/pintester_icon.png";
import whatsapp_icon from "../Assests/whatsapp_icon.png";
function Fotter() {
  return (
    <div className="fotter">
      <div className="Fotter-logo">
        <img src={footer_logo} alt="" />
        <p></p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-socail-icon">
        <div className="footer-icon-container">
          <img src={instgram_icon} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={whatsapp_icon} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={pintester_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved by Harish Semwal.</p>
      </div>
    </div>
  );
}

export default Fotter;
