import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Item } from '../Item';
import { ItemCount } from '../ItemCount';
import { Container, Content } from './styles';
import { CartContext } from '../../context/CartProvider';

export const ItemList = ({ items, title }) => {
  const { addToCart } = useContext(CartContext);

  const navigate = useNavigate();

  const handleAdd = (product) => {
    addToCart(product);
    navigate("/cart");
  };

  if (items.length < 0) return null;

  return (
    <Container>
      <h1>{title}</h1>      
      {items.map((item) => (
           <Content key={item.id}>
            <Item item={item}/>
            <ItemCount 
              stock={item.stock} 
              initial={1} 
              onAdd={() => handleAdd(item)}
            />
           </Content>
          ))}
    </Container>
  );
};

export default ItemList;