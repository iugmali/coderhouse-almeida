'use client';

import {useState} from "react";
import Button from "@/components/UI/Button";

type Props = {
  stock: number;
  initial: number;
  onAdd: (quantity: number) => void;
}

const enum Operation {
  Add,
  Subtract
}

const ItemCount = ({stock, initial, onAdd}: Props) => {
  const [quantity, setQuantity] = useState(initial);

  const changeQuantityHandler = (operation: Operation) => {
    switch (operation) {
      case Operation.Add:
        if (quantity + 1 > stock) return;
        setQuantity((prevState) => prevState + 1);
        break;
      case Operation.Subtract:
        if (quantity - 1 == 0) return;
        setQuantity((prevState) => prevState - 1);
        break
      default:
        return;
    }
  }

  const addHandler = () => {
    setQuantity(1);
    onAdd(quantity);
  }

  return (
    <article className={`flex flex-col mt-4`}>
      <div>
        <h2>Item para compra. Disponível em estoque: {stock}</h2>
      </div>
      <div className={`flex justify-between items-center mt-2 mb-2 border-gray-200 border-2`}>
        <button className={`flex-1 bg-gray-700 active:opacity-70`} onClick={() => changeQuantityHandler(Operation.Subtract)}>-</button>
        <div className={`flex-1 text-center`}>{quantity}</div>
        <button className={`flex-1 bg-gray-700 active:opacity-70`} onClick={() => changeQuantityHandler(Operation.Add)}>+</button>
      </div>
      <Button handleClick={addHandler} disabled={stock == 0}>Adicionar</Button>
    </article>
  )
}

export default ItemCount
