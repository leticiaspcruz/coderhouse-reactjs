import React from "react";
import { PRODUCTS } from "../../constants";
import{ ItemList } from '../ItemList';
import {} from './styles';

const ListItemsContainer = () => {
  return (
    <>
      <div>
        <h1>conheça nossos produtos</h1>
      </div>
      <ItemList items={PRODUCTS}/>
    </>
  );
};

export default ListItemsContainer;