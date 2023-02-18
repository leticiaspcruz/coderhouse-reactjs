import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeItem = (item) => {
    const filteredItems = cartItems.filter((i) => i.id !== item.id);
    setCartItems(filteredItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const isInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  const totalItems = cartItems.length;

  console.log('carrinho', cartItems);
  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeItem, 
      clearCart,
      isInCart,
      totalItems, 
    }}>
      {children}
    </CartContext.Provider>
  );
};