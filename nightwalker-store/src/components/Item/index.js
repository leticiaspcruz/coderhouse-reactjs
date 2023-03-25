import React from "react";
import { Link } from 'react-router-dom';
import { Container, ImageWrapper, ProductImage, SoldOutText } from './styles';

export const Item = ({ item }) => {
  return (
      <Container>
        <h1>{item.title}</h1>
        <ImageWrapper>
          <ProductImage src={`/images/${item.pictureUrl}`} alt={item.imgAlt}/>
        </ImageWrapper>
        <p>a partir de R${item.price}*</p>
        <p>categoria: {item.category}</p>
        <Link to={`/product/${item.id}`}>
          Ver detalhe do produto
        </Link>
        {item.stock > 0 
          ? <p>estoque disponível: {item.stock}</p> : <SoldOutText>esgotado</SoldOutText>}
      </Container>
  );
};

export default Item;