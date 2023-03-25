import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NavBar } from '../components';
import { useNavigate } from "react-router-dom";
import { CartContext } from '../context/CartProvider';
import { Container, InfoContainer, CartButton, CartButtonAlt, CartButtonsWrapper, CheckoutText } from "./styles";

const Cart = () => {
  const { cartItems, removeItem, clearCart, totalPrice } = useContext(CartContext);
  const navigate = useNavigate();

  const handleRemoveItem = (item) => {
    removeItem(item);
  };

  const handleClearCart = () => {
    clearCart();
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
              <CartButtonAlt onClick={() => navigate('/checkout')}>finalizar compra</CartButtonAlt>
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