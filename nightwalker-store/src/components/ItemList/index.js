import React from 'react';
import { Item } from '../Item';
import { ItemCount } from '../ItemCount';
import { Container, Content } from './styles';

export const ItemList = ({ items, title }) => {
  if (items.length < 0) return null;

  return (
    <Container>
      <h1>{title}</h1>      
      {items.map((item) => (
           <Content key={item.id}>
            <Item item={item}/>
            <ItemCount stock={item.stock} initial={1} />
           </Content>
          ))}
    </Container>
  );
};

export default ItemList;