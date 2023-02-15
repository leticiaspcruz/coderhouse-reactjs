import React from "react";
import { Container, Button, Wrapper, ImageWrapper, ProductImage, ProductContainer, ProductDescription } from './styles';

export const ItemDetail = ({ item }) => {
  return (
    <Container>
      <ProductContainer>
        <h1>{item.title}</h1>
        <ImageWrapper>
          <ProductImage src={item.pictureUrl} alt={item.imgAlt}/>
        </ImageWrapper>
        <Wrapper>
          <ProductDescription>
            <p>{item.price}</p>
            <p>{item.category}</p>
            <p>{item.detail}</p>
            <p>Estoque disponível: {item.stock}</p>
            <Button onClick={() => console.log('adicionou no carrinho')}>
              comprar
            </Button>
          </ProductDescription>
        </Wrapper>
      </ProductContainer>
    </Container>
  );
};

export default ItemDetail;