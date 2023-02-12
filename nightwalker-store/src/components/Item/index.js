import React from "react";
import { Link } from 'react-router-dom';
import {} from './styles';

export const Item = ({ item }) => {
  return (
      <div>
        <h1>{item.title}</h1>
        <img src={item.pictureUrl} alt={item.imgAlt}/>
        <p>{item.price}</p>
        <p>{item.category}</p>
        <Link to={`/product/${item.id}`}>
          Ver detalhe do produto
        </Link>
        <p>Estoque disponível: {item.stock}</p>
      </div>
  );
};

export default Item;