import React from 'react';
import { Item } from '../Item';
import { ItemCount } from '../ItemCount';
import {} from './styles';

export const ItemList = ({ items }) => {
  if (items.length < 0) return null;

  return (
    <div>
      {items.map((item) => (
           <li key={item.id}>
            <Item item={item}/>
            <ItemCount stock={item.stock} initial={1} />
           </li>
          ))}
    </div>
  );
};

export default ItemList;