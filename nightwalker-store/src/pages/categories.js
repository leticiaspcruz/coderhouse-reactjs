import React from "react";
import { ItemsListContainer, NavBar, Banner } from '../components';


const Categories = () => {

  return (
    <>
     <NavBar />
     <Banner />
     <ItemsListContainer title={'principais categorias'}/>
    </>
  );
};

export default Categories;