import React from "react";
import { productsCategory } from "../../constants";
import { ItemCount } from '../ItemCount';
import {} from './styles';

const ListItemsContainer = () => {
  return (
    <>
      <div>
        <h1>principais categorias</h1>
        {productsCategory.map((item) => (
          <div>
            <p>{item.category}</p>
          </div> 
        ))}
      </div>
      <ItemCount stock={5} initial={1} />
    </>
  );
};

export default ListItemsContainer;