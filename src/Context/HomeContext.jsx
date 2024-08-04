import React, { createContext, useEffect, useState } from "react";

export const HomeContext = createContext();

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index <= 300; index++) {
    cart[index] = 0;
  }
  return cart;
};

export const HomeProvider = (props) => {
  const [all_product, setAll_Product] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    fetch('https://zefefrpdoors-backend.onrender.com/allproducts')
      .then(response => response.json())
      .then(data => setAll_Product(data))
      .catch(error => console.error('Error fetching products:', error));

    const token = localStorage.getItem('auth-token');
    if (token) {
      fetch('https://zefefrpdoors-backend.onrender.com/getcart', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'auth-token': token,
          'Content-Type': 'application/json',
        },
      })
      .then(response => response.json())
      .then(data => {
        setCartItems(data);
        console.log(data);
      })
      .catch(error => console.error('Error fetching cart items:', error));
    }
  }, []);

  const addToCart = (itemId) => {
    setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    const token = localStorage.getItem('auth-token');
    if (token) {
      fetch('https://zefefrpdoors-backend.onrender.com/addtocart', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'auth-token': token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ item: itemId }),
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error adding to cart:', error));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    const token = localStorage.getItem('auth-token');
    if (token) {
      fetch('https://zefefrpdoors-backend.onrender.com/removecartitem', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'auth-token': token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ item: itemId }),
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error removing from cart:', error));
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(product => product.id === Number(item));
        totalAmount += (itemInfo?.new_price || 0) * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const ContextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <HomeContext.Provider value={ContextValue}>
      {props.children}
    </HomeContext.Provider>
  );
};
