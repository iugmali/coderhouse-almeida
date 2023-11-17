'use client';

import ItemCount from "@/components/ItemCount";
import {useState} from "react";

type Props = {
  greeting: string
}

const ItemListContainer = ({greeting}: Props) => {
  const [stock, setStock] = useState(10);

  const addHandler = (quantity: number) => {
    if (quantity > stock) return;
    setStock(prevState => prevState - quantity);
  }

  return (
    <section className={`mt-4 mx-auto`}>
      <h1>{greeting}</h1>
      <ItemCount stock={stock} initial={1} onAdd={addHandler} />
    </section>
  );
};

export default ItemListContainer;
