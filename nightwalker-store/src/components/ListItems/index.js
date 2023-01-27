import React from "react";
import {} from './styles';

const ListItems = () => {

  const productsCategory = [
    {
      category: "camisetas", 
      image: '',
    },
    {
      category: "acessórios", 
      image: '',
    },
    {
      category: "promoções", 
      image: '',
    },
  ];

  return (
    <div>
      {productsCategory.map((item) => (
         <div>
          <img src={item.image} alt={item.category}/>
          <h2>{item.category}</h2>
         </div> 
      ))}
    </div>
  );
};

export default ListItems;