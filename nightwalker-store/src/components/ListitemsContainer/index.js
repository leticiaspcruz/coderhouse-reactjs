import React from "react";
import {} from './styles';

const ListItemsContainer = () => {

  const productsCategory = [
    {
      category: "camisetas", 
    },
    {
      category: "acessórios", 
    },
    {
      category: "promoções", 
    },
  ];

  return (
    <div>
      <h1>principais categorias</h1>
      {productsCategory.map((item) => (
         <div>
          <p>{item.category}</p>
         </div> 
      ))}
    </div>
  );
};

export default ListItemsContainer;