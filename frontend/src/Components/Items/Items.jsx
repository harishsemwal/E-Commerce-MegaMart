import React from "react";
import { Link } from "react-router-dom";
import "./Items.css";

function Item(props) {
  return (
    <div className="item">
      <Link to={`/Product/${props.id}`}>
        <img
          onClick={() => window.scrollTo(0, 0)}
          src={props.image}
          alt={props.name}
        />
      </Link>
      <p>{props.name}</p>
      <div className="items-prices">
        <div className="item-price-new">₹{props.new_price * 50}</div>
        <div className="item-price-old">₹{props.old_price * 60}</div>
      </div>
    </div>
  );
}

export default Item;
