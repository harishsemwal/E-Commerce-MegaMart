import React from "react";
import "./Breadcrums.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";

function Breadcrums({ product }) {
  return (
    <div className="Breadcrums">
      HOME <img src={arrow_icon} alt="" /> SHOP{" "}
      <img src={arrow_icon} alt="" />
      {product?.category} <img src={arrow_icon} alt="" />
      {product?.name} <img src={arrow_icon} alt="" />
    </div>
  );
}

export default Breadcrums;
