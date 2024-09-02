import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

function CartItems() {
  const { getTotalCartAmount, all_products, cartItem, removeFromCart } = useContext(ShopContext);

  console.log("All Products:", all_products);
  console.log("Cart Items:", cartItem);

  return (
    <div className="cartitems">
      <div className="cartitem-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_products.map((product) => {
        const quantity = cartItem[product.id];
        if (quantity > 0) {
          return (
            <div key={product.id}>
              <div className="cartitems-format cartitem-format-main">
                <img src={product.image} alt={`Product: ${product.name}`} className="caricon-product-icon" />
                <p>{product.name}</p>
                <p>₹{product.new_price}</p>
                <button className="cartitems-quantity">{quantity}</button>
                <p>₹{product.new_price * quantity}</p>
                <img
                  src={remove_icon}
                  alt="Remove item"
                  onClick={() => removeFromCart(product.id)}
                  className="remove-icon"
                />
              </div>
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fees</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>₹{getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>Proceed to Checkout</button>
        </div>
        <div className="cartitems-promocode">
          <p>If You Have A Promo Code, Enter It Here -: </p>
          <div className="cartitems-promo-box">
            <input type="text" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;