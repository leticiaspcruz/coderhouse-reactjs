import React from "react";
import { useParams } from "react-router-dom";
import { ItemDetailContainer, NavBar, Banner } from '../components';
import { Title } from "./styles";

const ProductDetail = () => {
  const { productId } = useParams();

  return (
    <>
     <NavBar />
     <Banner />
     <Title>Produto {productId}</Title>
     <ItemDetailContainer product={productId} />
    </>
  );
};

export default ProductDetail;