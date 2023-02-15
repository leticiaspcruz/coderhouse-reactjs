import React, { useState, useEffect } from "react";
import { PRODUCTS } from "../../constants";
import{ ItemDetail } from '../ItemDetail';
import { Loader } from '../../components';
import {} from './styles';

const ItemDetailContainer = (productId ) => {
  const [isLoading, setIsLoading] = useState(false);
  const [productDetail, setProductDetail] = useState([]);

  const filteredProduct = PRODUCTS.filter((product) => {
    if (product.id === productId.product) { 
      return product
    }
  });

  const getProduct = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(filteredProduct);
          reject("Ops! Tivemos um problema");
        }, 2000);
      });
  };

  useEffect(() => {
    getProduct().then( response => {
      setProductDetail(response);
    }).catch(error => {
      console.error(error);
    }).finally(() => {
      setIsLoading(false)
    })
    setIsLoading(true)
  }, []);

  return (
    <>
      {isLoading 
        ? (<Loader />) 
        : productDetail.length > 0 
        ? <ItemDetail item={productDetail[0]}/> 
        : (<p>Não encontramos este produto</p>)
      }
    </>
  );
};

export default ItemDetailContainer;