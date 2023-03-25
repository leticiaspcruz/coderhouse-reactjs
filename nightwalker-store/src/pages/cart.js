import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NavBar } from '../components';
import { CartContext } from '../context/CartProvider';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import { Container, InfoContainer, CartButton, CartButtonAlt, CartButtonsWrapper, CheckoutText } from "./styles";

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
     <Container>
      <h1>carrinho</h1>
        {cartItems.length > 0 ? (
          <InfoContainer>
            {cartItems.map((item) => (
              <div key={item.id}>
                <span>{item.title}: R${item.price} | Qtd: {item.quantity}</span>
                <CartButton onClick={() => handleRemoveItem(item)}>remover</CartButton>
              </div>
            ))}
            <div>
              <CheckoutText>total da compra: R${totalPrice}</CheckoutText>
            </div>
            <CartButtonsWrapper>
              <CartButtonAlt onClick={handleClearCart}>limpar carrinho</CartButtonAlt>
              <CartButtonAlt onClick={sendOrder}>finalizar compra</CartButtonAlt>
            </CartButtonsWrapper>
          </InfoContainer>
        ) : (
          <div>
            <p>carrinho vazio</p>
            <Link to='/'>
              retornar para página inicial
            </Link>
          </div>
        )}
     </Container>
    </>
  );
};

export default Cart;