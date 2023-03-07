import React, { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { ItemCounterContainer, Button, CounterButton } from './styles';

export const ItemCount = ({ stock, initial= 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    if (onAdd) {
      onAdd(count);
      setCount(initial);
    }
  };

  return (
    <div>
      <div>
        <ItemCounterContainer>
        <CounterButton onClick={() => handleDecrement()}>
          < AiOutlineMinusCircle />
        </CounterButton>
        <p>{count}</p>
        <CounterButton onClick={() => handleIncrement()}>
          <IoMdAddCircleOutline />
        </CounterButton>
        </ItemCounterContainer>
      </div>
      <Button onClick={handleAdd}>
          adicionar ao carrinho
        </Button>
    </div>
  );
};

export default ItemCount;