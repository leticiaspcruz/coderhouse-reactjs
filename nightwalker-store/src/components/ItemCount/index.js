import React, { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { ItemCounterContainer } from './styles';

export const ItemCount = ({ stock, initial= 1 }) => {
  const [count, setCount] = useState(initial);
  const handleStock = () => {
    setCount(count + 1);
    if(count >= stock) {
      setCount(initial);
      return alert(`O estoque disponível é de ${stock}`);
    }
  }
  const removeItem = () => {
    setCount(count - 1);
    if(count === 0) {
      setCount(count)
      return alert('Item removido')
    }
  };

  return (
    <div>
      <div>
        <h1>contador</h1>
        <ItemCounterContainer>
        <button onClick={() => removeItem()}>
          < AiOutlineMinusCircle />
        </button>
        <p>{count}</p>
        <button onClick={() => handleStock()}>
          <IoMdAddCircleOutline />
        </button>
        </ItemCounterContainer>
      </div>
      <button onClick={() => console.log('adicionou no carrinho')}>
          adicionar ao carrinho
        </button>
    </div>
  );
};

export default ItemCount;