'use client';

import {Product} from "@/types/product";
import Image, {ImageLoaderProps} from "next/image";
import Button from "@/components/ui/Button";
import {useState} from "react";
import ItemCount from "@/components/items/ItemCount";
import {useRouter} from "next/navigation";

const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const ItemDetail = ({title, description, pictureUrl, stock, price}:Product) => {
  const [currentStock, setCurrentStock] = useState(stock);
  const router = useRouter();

  const onAdd = (quantity: number = 1) => {
    if (quantity > currentStock) return;
    setCurrentStock((prevState) => prevState - quantity);
  }

  const goToCart = () => {
    router.push('/cart', {scroll: false});
  }

  return (
    <section className={`animate-entering flex flex-col`}>
      <h1 className={`text-center text-2xl`}>{title}</h1>
      <div className={`mt-4 self-center rounded-lg shadow-lg`}>
        <Image className={`h-64 rounded-lg`} loader={imageLoader} src={pictureUrl} alt={title} width={320} height={320} />
      </div>
      <p className={`max-w-md text-justify mx-auto px-4 mt-4`}>{description}</p>
      <h2 className={`text-center p-4 pb-0 text-2xl`}>R$ {price.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</h2>
      <p className={`text-center text-gray-400`}>{(currentStock > 0) ? (currentStock == 1) ? `(1 disponível)` : `(${currentStock} disponíveis)` : `(fora de estoque)`}</p>
      <ItemCount stock={currentStock} initial={1} onAdd={onAdd} />
      <Button className={`mt-4 bg-green-800 mx-auto`} handleClick={goToCart}>Finalizar compra</Button>
    </section>
  );
};

export default ItemDetail;
