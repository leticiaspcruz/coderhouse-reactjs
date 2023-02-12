import React, { useState, useEffect } from "react";
import { PRODUCTS } from "../../constants";
import{ ItemList } from '../ItemList';
import {} from './styles';

const ItemsListContainer = () => {
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
      <div>
        <h1>conheça nossos produtos</h1>
      </div>
      {isLoading ? (<h1>carregando...</h1>) : <ItemList items={productData}/>}
    </>
  );
};

export default ItemsListContainer;