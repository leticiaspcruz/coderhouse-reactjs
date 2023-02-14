import React, { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { ItemCounterContainer, Button, CounterButton } from './styles';

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
        <ItemCounterContainer>
        <CounterButton onClick={() => removeItem()}>
          < AiOutlineMinusCircle />
        </CounterButton>
        <p>{count}</p>
        <CounterButton onClick={() => handleStock()}>
          <IoMdAddCircleOutline />
        </CounterButton>
        </ItemCounterContainer>
      </div>
      <Button onClick={() => console.log('adicionou no carrinho')}>
          adicionar ao carrinho
        </Button>
    </div>
  );
};

export default ItemCount;