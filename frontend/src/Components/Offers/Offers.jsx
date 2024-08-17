import React from "react";
import "./Offers.css";
import exclusive_images from "../Assets/exclusive_image.png";
function Offers() {
  return (
    <div className="Offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLER PRODUCT</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_images} alt="" />
      </div>
    </div>
  );
}

export default Offers;
