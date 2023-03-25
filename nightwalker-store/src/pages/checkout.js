import React, { useState, useEffect, useContext } from "react";
import { NavBar } from '../components';
import { getFirestore, query, getDocs, addDoc, collection } from 'firebase/firestore';
import { Container, CheckoutText, CheckoutForm, CheckoutButton, CheckoutContainer } from './styles';
import { CartContext } from '../context/CartProvider';

const Checkout = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [showError, setShowError] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);
  const { clearCart, generateOrder } = useContext(CartContext);

  useEffect(() => {
    if(email !== confirmEmail) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  }, [email, confirmEmail]);

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const formatPhone = (phone) => {
    const cleaned = ('' + phone).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{4,5})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return phone;
  }

  const buyer = {
    name: name, 
    surname: surname, 
    phone: formatPhone(phone), 
    email: email,
    paymentMethod: paymentMethod,
  };
  const order = generateOrder(buyer);
  const db = getFirestore();
  const collectionRef = collection(db, "orders");

  const sendOrder = () => {
    addDoc(collectionRef, order).then(({ id }) => {
      console.log(id)
      setSuccessMessage(true);
      clearCart();
    }).catch((error) => console.error(error))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendOrder();
  };

  const getOrderId = () => {
    getDocs(query(collection(getFirestore(), "orders")
      .where("buyer.email", "==", email)))
      .then((querySnapshot) => {
        querySnapshot.forEach((order) => {
          const orderData = order.id; 
          return orderData
        })
      })
      .then(id => {
        setOrderId(id);
      })
      .catch((error) => console.error(error))
  };

  useEffect(() => {
    if(!email) return;
    getOrderId();
  }, []);

  const notFilled = 
    !email || 
    !confirmEmail || 
    !name || 
    !surname || 
    !paymentMethod 
    || showError;

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
              maxLength={15}
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
          <label htmlFor="payment-method">forma de pagamento:
            <select
              id="payment-method"
              name="payment-method"
              value={paymentMethod}
              onChange={handlePaymentMethodChange}
            >
              <option value="credit-card">cartão de crédito</option>
              <option value="debit-card">cartão de débito</option>
              <option value="bank-transfer">pix</option>
            </select>
          </label>
          {showError && (
          <div>
            <p style={{ color: 'black' }}>Os e-mails devem ser iguais</p>
          </div>
          )}
          <CheckoutButton type="submit" 
            disabled={notFilled} 
            style={notFilled ? { background: 'grey' } : null}
          >
            finalizar compra
          </CheckoutButton>
        </CheckoutForm>) 
        : (
          <CheckoutText>pedido {orderId} gerado com sucesso!</CheckoutText>
        )}
      </CheckoutContainer>
     </Container>
    </>
  );
};

export default Checkout;