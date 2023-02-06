import React from 'react';
import { Item } from '../Item';
import { ItemCount } from '../ItemCount';
import {} from './styles';

export const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
           <>
            <Item item={item}/>
            <ItemCount stock={item.stock} initial={1} />
           </>
          ))}
    </div>
  );
};

export default ItemList;