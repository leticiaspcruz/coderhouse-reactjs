import React, { useState, useEffect } from "react";
import { PRODUCTS } from "../../constants";
import { useLocation } from 'react-router-dom';
import{ ItemList, Loader } from '../../components';
import { Container, Wrapper, CategoryLink, Title, Text } from './styles';

const ItemsListContainer = ({ categoryName, title }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [productData, setProductData] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  const location = useLocation();

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

  const categories =  productData.map((item) => (
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