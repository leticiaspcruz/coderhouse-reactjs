import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id 
        ? { ...cartItem, quantity: cartItem.quantity + 1 } 
        : cartItem
      );
  
      setCartItems(updatedCartItems);
      setTotalPrice(totalPrice + item.price);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
      setTotalPrice(totalPrice + item.price);
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  const removeItem = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
  
    if (existingItem.quantity === 1) {
      const filteredItems = cartItems.filter((i) => i.id !== item.id);
      setCartItems(filteredItems);
      setTotalPrice(totalPrice - item.price);
    } else {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id 
        ? { ...cartItem, quantity: cartItem.quantity - 1 } 
        : cartItem
      );
  
      setCartItems(updatedCartItems);
      setTotalPrice(totalPrice - item.price);
    }
  };

  const clearCart = () => {
    setCartItems([]);
    setTotalPrice(0);
    localStorage.removeItem('cartItems');
  };

  const isInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };
  
  const totalItems = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  
  const generateOrder = (buyer) => {
    return {
      buyer,
      item: cartItems.map(item => ({
        title: item.title,
        quantity: item.quantity,
        price: item.price,
        productDetail: item.productDetail,
        id: item.id,
      })),
      date: new Date(),
      total: totalPrice,
    }
  };

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeItem, 
      clearCart,
      isInCart,
      totalItems, 
      totalPrice,
      generateOrder,
    }}>
      {children}
    </CartContext.Provider>
  );
};