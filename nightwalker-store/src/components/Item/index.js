import React from "react";
import { Link } from 'react-router-dom';
import { Container, ImageWrapper, ProductImage } from './styles';

export const Item = ({ item }) => {
  return (
      <Container>
        <h1>{item.title}</h1>
        <ImageWrapper>
          <ProductImage src={item.pictureUrl} alt={item.imgAlt}/>
        </ImageWrapper>
        <p>a partir de {item.price}*</p>
        <p>categoria: {item.category}</p>
        <Link to={`/product/${item.id}`}>
          Ver detalhe do produto
        </Link>
        <p>Estoque disponível: {item.stock}</p>
      </Container>
  );
};

export default Item;