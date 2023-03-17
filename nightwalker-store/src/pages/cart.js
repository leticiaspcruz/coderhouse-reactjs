import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NavBar } from '../components';
import { CartContext } from '../context/CartProvider';
import { getFirestore, addDoc, collection } from 'firebase/firestore';

const Cart = () => {
  const { cartItems, removeItem, clearCart, totalPrice, generateOrder } = useContext(CartContext);

  const handleRemoveItem = (item) => {
    removeItem(item);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const sendOrder = () => {
    const order = generateOrder();
    const db = getFirestore();
    const collectionRef = collection(db, "orders");
    addDoc(collectionRef, order).then(({ id }) => {
      alert('compra realizada com sucesso!'); clearCart();
    }).catch((error) => console.error(error))
  };

  return (
    <>
    <NavBar />
      <h1>carrinho</h1>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <span>{item.title}: R${item.price} quantidade: {item.quantity}</span>
              <button onClick={() => handleRemoveItem(item)}>remover</button>
            </div>
          ))}
          <div>
            <p>total da compra: R${totalPrice}</p>
          </div>
          <button onClick={handleClearCart}>limpar carrinho</button>
          <button onClick={sendOrder}>finalizar compra</button>
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