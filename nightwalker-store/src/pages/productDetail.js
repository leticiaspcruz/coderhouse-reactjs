import React from "react";
import { useParams } from "react-router-dom";
import { ItemDetailContainer, NavBar, Banner } from '../components';

const ProductDetail = () => {
  const { productId } = useParams();

  return (
    <>
     <NavBar />
     <Banner />
     <h1>Produto {productId}</h1>
     <ItemDetailContainer product={productId} />
    </>
  );
};

export default ProductDetail;