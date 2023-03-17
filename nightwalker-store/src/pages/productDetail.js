import React from "react";
import { useParams } from "react-router-dom";
import { ItemDetailContainer, NavBar, Banner } from '../components';

const ProductDetail = () => {
  const { productId } = useParams();

  return (
    <>
     <NavBar />
     <Banner />
     <ItemDetailContainer product={productId} />
    </>
  );
};

export default ProductDetail;