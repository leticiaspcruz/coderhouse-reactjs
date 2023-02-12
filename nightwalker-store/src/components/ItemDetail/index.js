import React from "react";
import {} from './styles';

export const ItemDetail = ({ item }) => {
  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.pictureUrl} alt={item.imgAlt}/>
      <p>{item.price}</p>
      <p>{item.category}</p>
      <p>{item.detail}</p>
      <p>Estoque disponível: {item.stock}</p>
    </div>
  );
};

export default ItemDetail;