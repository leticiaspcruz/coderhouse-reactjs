import React, { useContext } from "react";
import { NavBar } from '../components';
import { CartContext } from '../context/CartProvider';

const Cart = () => {
  const { cartItems, removeItem, clearCart } = useContext(CartContext);

  const handleRemoveItem = (item) => {
    removeItem(item);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <>
    <NavBar />
      <h1>Carrinho</h1>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <span>{item.title}</span>
              <span>{item.price}</span>
              <button onClick={() => handleRemoveItem(item)}>Remover</button>
            </div>
          ))}
          <button onClick={handleClearCart}>Limpar carrinho</button>
        </div>
      ) : (
        <p>Carrinho vazio</p>
      )}
    </>
  );
};

export default Cart;