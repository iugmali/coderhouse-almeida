'use client';

import {useState} from "react";
import {TextButton} from "@/components/ui/Button";

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
    <div className={`mx-auto flex flex-col w-60 justify-center items-center`}>
      <div className={`rounded-lg flex w-full justify-between items-center border-gray-600 border-2`}>
        <button className={`flex-1 bg-gray-600 bg-opacity-20 active:bg-opacity-70`} onClick={() => changeQuantityHandler(Operation.Subtract)}>-</button>
        <div className={`flex-1 text-center`}>{quantity}</div>
        <button className={`flex-1 bg-gray-600 bg-opacity-20 active:bg-opacity-70`} onClick={() => changeQuantityHandler(Operation.Add)}>+</button>
      </div>
      <TextButton className={`text-gray-50 mt-4 w-full bg-gradient-to-b from-gray-800 to-gray-900 disabled:from-gray-500 disabled:to-gray-600 disabled:hover:cursor-not-allowed`} handleClick={addHandler} disabled={stock == 0}>Adicionar ao carrinho</TextButton>
    </div>
  )
}

export default ItemCount
