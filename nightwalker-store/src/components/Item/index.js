import React from "react";
import {} from './styles';

export const Item = ({ item }) => {
  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.pictureUrl} alt={item.imgAlt}/>
      <p>{item.price}</p>
      <p>{item.category}</p>
      <button onclick={console.log(item.productDetail)}>
        Ver detalhe do produto
      </button>
      <p>Estoque disponível: {item.stock}</p>
    </div>
  );
};

export default Item;