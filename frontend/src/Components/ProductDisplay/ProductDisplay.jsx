import React from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
function ProductDisplay(props) {
  const { Product } = props;
  return (
    <div className="ProductDisplay">
      <div className="Product-Display-left">
        <div className="Product-Display-image-list">
          <img src={Product.image} alt="" />
          <img src={Product.image} alt="" />
          <img src={Product.image} alt="" />
          <img src={Product.image} alt="" />
        </div>
        <div className="Product-Display-image">
          <img
            className="Product-Display-Main-img"
            src={Product.image}
            alt=""
          />
        </div>
      </div>
      <div className="Product-Display-right">
        <h1>{Product.name}</h1>
        <div className="Product-Display-Right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="Product-Display-Right-Prices">
          <div className="ProductDisplay-Right-Prices-Old">
            ${Product.old_price * 60}
          </div>
          <div className="ProductDisplay-Right-Price-New">
            ${Product.new_price * 20}
          </div>
        </div>
        <div className="ProductDisplay-right-discription">
          A lightweight, usually knitted, pullover shirt, close-fitting a round
          neckline and short sleeves, worn as an under shirt.
        </div>
        <div className="ProductDisplay-Right-size">
          <h1>Select Size</h1>
          <div className="ProductDisplay-Right-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button>ADD TO CART</button>
        <p className="Product-Display-Right-Category">
          <span>Category: </span>Women, T-Shirt Crop Top
        </p>
        <p className="Product-Display-right-brand">
          <span>Tags: </span>Modern, Late{" "}
        </p>
      </div>
    </div>
  );
}

export default ProductDisplay;
