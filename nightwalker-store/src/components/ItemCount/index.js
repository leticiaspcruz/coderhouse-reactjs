import React, { useState } from "react";
import {} from './styles';

const ItemCount = ({ stock, initial,  onAdd }) => {
  const [count, setCount] = useState(initial);
  return (
    <div>
      <div>
        <h1>contador</h1>
        <p>{count}</p>
        <button onClick={() => setCount(count - 1)}>
          diminuir
        </button>
        <button onClick={() => setCount(count - 1)}>
          adicionar
        </button>
      </div>
      <button onClick={() => console.log('adicionou no carrinho')}>
          adicionar ao carrinho
        </button>
    </div>
  );
};

export default ItemCount;