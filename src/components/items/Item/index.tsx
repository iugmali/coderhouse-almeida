'use client';

import {Product} from "@/types/product";
import {useState} from "react";
import ItemCount from "@/components/items/ItemCount";
import Image, {ImageLoaderProps} from "next/image";

const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const Item = ({title, description, pictureUrl, stock, price}: Product) => {
  const [currentStock, setCurrentStock] = useState(stock);

  const addHandler = (quantity: number) => {
    if (quantity > currentStock) return;
    setCurrentStock(prevState => prevState - quantity);
  }

  return (
    <article className={`max-w-xs w-72 border-2 bg-gray-800`}>
      <h1 className={`text-center text-xl py-2`}>{title}</h1>
      <Image className={`h-64`} loader={imageLoader} src={pictureUrl} alt={title} width={320} height={320} />
      <h2 className={`text-center p-4 text-2xl`}>R$ {price.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</h2>
      <ItemCount stock={currentStock} initial={1} onAdd={addHandler} />
    </article>
  )
};

export default Item;
