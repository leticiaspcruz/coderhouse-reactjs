import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NavBar } from '../components';
import { CartContext } from '../context/CartProvider';

const Cart = () => {
  const { cartItems, removeItem, clearCart, totalPrice } = useContext(CartContext);

  const handleRemoveItem = (item) => {
    removeItem(item);
  };

  const handleClearCart = () => {
    clearCart();
  };


  return (
    <>
    <NavBar />
      <h1>carrinho</h1>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <span>{item.title}: R${item.price}</span>
              <button onClick={() => handleRemoveItem(item)}>remover</button>
            </div>
          ))}
          <div>
            <p>total da compra: R${totalPrice}</p>
          </div>
          <button onClick={handleClearCart}>limpar carrinho</button>
        </div>
      ) : (
        <div>
          <p>carrinho vazio</p>
          <Link to='/'>
            retornar para página inicial
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;