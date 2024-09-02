import React, { createContext, useEffect, useState, useCallback } from "react";
import axios from 'axios';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index <= 300; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [all_products, setAll_Products] = useState([]);
  const [cartItem, setCartItem] = useState(getDefaultCart());
  const [authToken, setAuthToken] = useState(localStorage.getItem("auth-token") || "");

  useEffect(() => {
    axios.get("http://localhost:4000/allproduct")
      .then((response) => {
        console.log("Fetched Products:", response.data);
        setAll_Products(response.data);
      })
      .catch((error) => console.error("Error fetching products:", error));

    if (authToken) {
      axios.post("http://localhost:4000/getcart", {}, {
        headers: { "auth-token": authToken }
      })
        .then((response) => {
          console.log("Fetched Cart Items:", response.data);
          setCartItem(response.data);
        })
        .catch((error) => console.error("Error fetching cart items:", error));
    }
  }, [authToken]);

  const addToCart = useCallback((itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if (authToken) {
      axios.post("http://localhost:4000/addtocart", { itemId }, {
        headers: { "auth-token": authToken }
      })
        .then((response) => console.log(response.data))
        .catch((error) => console.error("Error adding item to cart:", error));
    }
  }, [authToken]);

  const removeFromCart = useCallback((itemId) => {
    setCartItem((prev) => ({
      ...prev,
      [itemId]: Math.max(prev[itemId] - 1, 0),
    }));
    if (authToken) {
      axios.post("http://localhost:4000/removefromcart", { itemId }, {
        headers: { "auth-token": authToken }
      })
        .then((response) => console.log(response.data))
        .catch((error) => console.error("Error removing item from cart:", error));
    }
  }, [authToken]);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = all_products.find(
          (product) => product.id === Number(item)
        );
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItem[item];
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        totalItems += cartItem[item];
      }
    }
    return totalItems;
  };

  const login = (email, password) => {
    axios.post("http://localhost:4000/login", { email, password })
      .then((response) => {
        if (response.data.success) {
          const token = response.data.token;
          localStorage.setItem("auth-token", token);
          setAuthToken(token);
        } else {
          console.error("Login failed:", response.data.errors);
        }
      })
      .catch((error) => console.error("Error logging in:", error));
  };

  const signup = (name, email, password) => {
    axios.post("http://localhost:4000/signup", { name, email, password })
      .then((response) => {
        if (response.data.success) {
          const token = response.data.token;
          localStorage.setItem("auth-token", token);
          setAuthToken(token);
        } else {
          console.error("Signup failed:", response.data.message);
        }
      })
      .catch((error) => console.error("Error signing up:", error));
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_products,
    cartItem,
    addToCart,
    removeFromCart,
    login,
    signup,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;