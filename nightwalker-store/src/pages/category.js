import React from "react";
import { useParams } from "react-router-dom";
import { ItemsListContainer, NavBar } from '../components';

const Category = () => {
  const { categoryId } = useParams();

  return (
    <>
     <NavBar />
     <h1>Category {categoryId}</h1>
     <ItemsListContainer />
    </>
  );
};

export default Category;