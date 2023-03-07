import React, { useState, useEffect } from "react";
import{ ItemDetail } from '../ItemDetail';
import { Loader } from '../../components';
import { getFirestore, getDocs, collection } from 'firebase/firestore';
import {} from './styles';

const ItemDetailContainer = (productId ) => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [productDetail, setProductDetail] = useState([]);

  const getItemsFromFireStore = () => {
    getDocs(collection(getFirestore(), "items"))
    .then((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((item) => items.push({
          id: item.id,
          ...item.data(),
        }));
      return items;
    })
    .then(data => {
      setProducts(data);
      setIsLoading(false);
    })
    .catch((error) => console.error(error))
  };

  const filteredProduct = products.filter((product) => {
    if (product.id === productId.product) { 
      return product
    }
  });

  useEffect(() => {
    getItemsFromFireStore();
    if(filteredProduct) {
      return setProductDetail(filteredProduct);
    }
  }, [filteredProduct]);

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