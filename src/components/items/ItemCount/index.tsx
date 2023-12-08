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
    onAdd(quantity);
    setQuantity(1);
  }

  return (
    <article className={`mx-auto flex flex-col max-w-md justify-center items-center`}>
      <div className={`rounded-lg flex w-full justify-between items-center border-gray-600 border-2`}>
        <button className={`flex-1 bg-gray-600 bg-opacity-20 active:bg-opacity-70`} onClick={() => changeQuantityHandler(Operation.Subtract)}>-</button>
        <div className={`flex-1 text-center`}>{quantity}</div>
        <button className={`flex-1 bg-gray-600 bg-opacity-20 active:bg-opacity-70`} onClick={() => changeQuantityHandler(Operation.Add)}>+</button>
      </div>
      <Button className={`mt-4 bg-gradient-to-b from-gray-800 to-gray-900`} handleClick={addHandler} disabled={stock == 0}>Adicionar ao carrinho</Button>
    </article>
  )
}

export default ItemCount
