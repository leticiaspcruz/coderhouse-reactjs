import React, { useState, useEffect, useContext } from "react";
import { NavBar } from '../components';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import { Container, CheckoutText, CheckoutForm, CheckoutButton, CheckoutContainer } from './styles';
import { CartContext } from '../context/CartProvider';

const Checkout = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [showError, setShowError] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const { clearCart, generateOrder } = useContext(CartContext);


  useEffect(() => {
    if(email !== confirmEmail && confirmEmail !== '') setShowError(true);
  }, [email, confirmEmail]);

  const buyer = {
    name: name, 
    surname: surname, 
    phone: phone, 
    email: email
  };

  const sendOrder = () => {
    const order = generateOrder(buyer);
    const db = getFirestore();
    const collectionRef = collection(db, "orders");
    addDoc(collectionRef, order).then(({ id }) => {
      setSuccessMessage(true);
      clearCart();
    }).catch((error) => console.error(error))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendOrder();
  };

  return (
    <>
     <NavBar />
     <Container>
      <h1>checkout</h1>
      <CheckoutContainer>
        {!successMessage ? (<CheckoutForm onSubmit={handleSubmit}>
          <label htmlFor="name">nome:
            <input
              type="text"
              id="name"
              placeholder="nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label htmlFor="surname">sobrenome:
            <input
              type="text"
              placeholder="sobrenome"
              id="surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
            />
          </label>
          <label>
            telefone:
            <input 
              type="text" 
              placeholder="telefone (11) 99999-9999"
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
            />
          </label>
          <label htmlFor="email">e-mail:
            <input
              type="email"
              placeholder="e-mail"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            confirme o seu e-mail:
            <input
              type="email"
              placeholder="confirme o seu e-mail"
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
            />
          </label>
          {showError && (
          <div>
            <p style={{ color: 'black' }}>Os e-mails devem ser iguais</p>
          </div>
          )}
          <CheckoutButton type="submit">enviar</CheckoutButton>
        </CheckoutForm>) 
        : (
          <CheckoutText>pedido gerado com sucesso!</CheckoutText>
        )}
      </CheckoutContainer>
     </Container>
    </>
  );
};

export default Checkout;