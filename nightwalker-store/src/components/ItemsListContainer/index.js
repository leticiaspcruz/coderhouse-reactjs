import React, { useState, useEffect } from "react";
import { PRODUCTS } from "../../constants";
import { useLocation } from 'react-router-dom';
import{ ItemList, Loader } from '../../components';
import { Container, Wrapper, CategoryLink, Title, Text } from './styles';
import { getFirestore, getDocs, collection } from 'firebase/firestore';

const ItemsListContainer = ({ categoryName, title }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [productData, setProductData] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  const location = useLocation();


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

  const categories =  productData?.map((item) => (
    item.category
  ));

  useEffect(() => {
    if(categoryName || location.pathname === '/category') { 
      setShowCategories(true) 
    };
  }, [categoryName, location.pathname]);


  const CategoryItems = () => 
      (<>
        <Container>
        <Title>nossas categorias:</Title>
          <Wrapper>
            {categories.map((category) => 
              <CategoryLink to={`/category/${category}`}>
                <Text>{category}</Text>
              </CategoryLink> 
            )}
          </Wrapper>
      </Container>
      </>
  );  

  const ListItems = () => {
    if(showCategories) {
      return <CategoryItems />
    } 
    else {
      return <ItemList items={productData} title={title}/>
    }
  };

  return (
    <>
      {isLoading 
      ? (<Loader />) 
      :  (<ListItems/>)
      }
    </>
  );
};

export default ItemsListContainer;