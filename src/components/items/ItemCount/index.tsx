'use client';

import {useState} from "react";
import Button from "@/components/ui/Button";

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
    <article className={`flex flex-col w-full`}>
      <div className={`flex justify-between items-center border-gray-600 border-t-2 border-b-2`}>
        <button className={`flex-1 bg-gray-700 active:opacity-70`} onClick={() => changeQuantityHandler(Operation.Subtract)}>-</button>
        <div className={`flex-1 text-center`}>{quantity}</div>
        <button className={`flex-1 bg-gray-700 active:opacity-70`} onClick={() => changeQuantityHandler(Operation.Add)}>+</button>
      </div>
      <Button handleClick={addHandler} disabled={stock == 0}>Adicionar</Button>
      <div className={`text-center`}>
        {
          stock > 0 ? <h2 className={`text-gray-400`}>Em estoque: {stock}</h2> : <h2 className={`text-gray-400`}>Fora de estoque</h2>
        }

      </div>
    </article>
  )
}

export default ItemCount
