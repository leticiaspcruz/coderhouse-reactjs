import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavBar, Item } from '../components';
import { PRODUCTS } from "../constants";

const Category = () => {
  const {categoryName}  = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [productData, setProductData] = useState([]);

  const getProductData = (onSuccess = true) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (onSuccess) {
          resolve(PRODUCTS);
        }
        reject("Ops! Tivemos um problema");
      }, 3000);
    });
};

const categoryItem = productData.filter((product) => {
  if (product.category === categoryName) { 
    return product
  }
});

useEffect(() => {
  getProductData().then( response => {
    setProductData(response);
  }).catch(error => {
    console.error(error);
  }).finally(() => {
    setIsLoading(false)
  })
  setIsLoading(true)
}, []);

  return (
    <>
     <NavBar />
     {isLoading 
      ? (<h1>carregando...</h1>) 
      : categoryItem.length > 0 
      ? ((
        <div>
          <h1>categoria {categoryName}</h1>
            <Item item={categoryItem[0]}/>
        </div>
        )) 
      : null}
    </>
  );
};

export default Category;