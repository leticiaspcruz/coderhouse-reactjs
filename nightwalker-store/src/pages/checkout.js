import React, { useState, useEffect } from "react";
import { NavBar } from '../components';
import { Container, CheckoutForm, CheckoutButton } from './styles';

const Checkout = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if(email !== confirmEmail && confirmEmail !== '') setShowError(true);
  }, [email, confirmEmail]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
  };

  return (
    <>
     <NavBar />
     <Container>
      <h1>finalizar compra</h1>
      <CheckoutForm onSubmit={handleSubmit}>
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
          <div style={{ color: 'black' }}>Os e-mails devem ser iguais</div>
        )}
        <CheckoutButton type="submit">enviar</CheckoutButton>
      </CheckoutForm>
     </Container>
    </>
  );
};

export default Checkout;