import React, { useContext } from 'react';
import { Item } from '../Item';
import { ItemCount } from '../ItemCount';
import { Container, Content } from './styles';
import { CartContext } from '../../context/CartProvider';

export const ItemList = ({ items, title }) => {
  const { addToCart } = useContext(CartContext);


  const handleAdd = (product, quantity) => {
    addToCart({ ...product, quantity });  };

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