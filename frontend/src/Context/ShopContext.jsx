import React, { createContext, useEffect, useState } from "react";

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

  useEffect(() => {
    fetch("https://localhost:4000/allproduct")
      .then((response) => response.json())
      .then((data) => setAll_Products(data))
      .catch((error) => console.error("Error:", error));

      if(localStorage.getItem('auth-token')){
        fetch('https://localhost:4000/getcart', {
          method: 'POST', 
          headers: {
            Accept : 'application/form-data',
            'auth-token': `${localStorage.getItem('auth-token')}`,
            'Content-Type': 'application/json',
          }, 
          body: "",
        }).then((response) => response.json()).then((data) => setCartItem(data));
      }
  }, []);



  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if(localStorage.getItem('auth-token')){
      fetch('https://localhost:4000/addtocart', {
        method: 'POST',
        headers: {
          Accept : 'application/form-data',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({"itemId": itemId}),
      })
      .then((response) => response.json())
      .then((data) => console.log(data));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({...prev, [itemId]: Math.max(prev[itemId] - 1, 0),}));
    if(localStorage.getItem('auth-token')){
      fetch('https://localhost:4000/removefromcart', {
        method: 'POST',
        headers: {
          Accept : 'application/form-data',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({"itemId": itemId}),
      })
     .then((response) => response.json())
    }
  };

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

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_products,
    cartItem,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
