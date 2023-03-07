import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setTotalPrice(totalPrice + item.price);
  };

  const removeItem = (item) => {
    const filteredItems = cartItems.filter((i) => i.id !== item.id);
    setCartItems(filteredItems);
    setTotalPrice(totalPrice - item.price);
  };

  const clearCart = () => {
    setCartItems([]);
    setTotalPrice(0);
  };

  const isInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  const totalItems = cartItems.length;

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeItem, 
      clearCart,
      isInCart,
      totalItems, 
      totalPrice,
    }}>
      {children}
    </CartContext.Provider>
  );
};