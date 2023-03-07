import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavBar, Banner, Item, Loader } from '../components';
import { Container } from "./styles";
import { getFirestore, getDocs, collection } from 'firebase/firestore';

const Category = () => {
  const {categoryName}  = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [productData, setProductData] = useState([]);

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
      setProductData(data);
      setIsLoading(false);
    })
    .catch((error) => console.error(error))
  };

  useEffect(() => {
    getItemsFromFireStore()
  }, []);

const categoryItem = productData.filter((product) => {
  if (product.category === categoryName) { 
    return product
  }
});

  return (
    <>
     <NavBar />
     <Banner />
     {isLoading 
      ? (<Loader />) 
      : categoryItem.length > 0 
      ? ((
        <Container>
          <h1>categoria: {categoryName}</h1>
            <Item item={categoryItem[0]}/>
        </Container>
        )) 
      : null}
    </>
  );
};

export default Category;