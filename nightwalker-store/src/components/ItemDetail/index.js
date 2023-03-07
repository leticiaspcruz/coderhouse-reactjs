import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from '../../context/CartProvider';
import { ItemCount } from '../ItemCount';
import { Container, Button, Wrapper, ImageWrapper, ProductImage, ProductContainer, ProductDescription } from './styles';

export const ItemDetail = ({ item }) => {
  const navigate = useNavigate();
  const { addToCart, cartItems } = useContext(CartContext);

  const handleAdd = (product, quantity) => {
    addToCart({ ...product, quantity });  
  };

  console.log(cartItems)

  return (
    <Container>
      <ProductContainer>
        <h1>{item.title}</h1>
        <ImageWrapper>
          <ProductImage src={item.pictureUrl} alt={item.imgAlt}/>
        </ImageWrapper>
        <Wrapper>
          <ProductDescription>
            <p>{item.detail}</p>
            <p>preço: R${item.price}</p>
            {item.stock > 0 ? (
            <>
              <p>Estoque disponível: {item.stock}</p> 
              <ItemCount 
                stock={item.stock} 
                initial={1} 
                onAdd={() => handleAdd(item)}
              />
              <Button onClick={() => navigate('/cart')}>
                finalizar minha compra
              </Button>
            </>)
              : <p>esgotado</p>}
          </ProductDescription>
        </Wrapper>
      </ProductContainer>
    </Container>
  );
};

export default ItemDetail;