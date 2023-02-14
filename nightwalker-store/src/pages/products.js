import React from "react";
import { ItemsListContainer, NavBar, Banner } from '../components';

const Products = () => {

  return (
    <>
     <NavBar />
     <Banner />
     <ItemsListContainer title={'nossos produtos'} />
    </>
  );
};

export default Products;