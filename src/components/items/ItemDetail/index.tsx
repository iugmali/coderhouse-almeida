'use client';

import {Product} from "@/types/product";
import Image, {ImageLoaderProps} from "next/image";
import Button from "@/components/ui/Button";
import {useContext, useState} from "react";
import ItemCount from "@/components/items/ItemCount";
import {useRouter} from "next/navigation";
import CartContext from "@/context/cartContext";

const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const ItemDetail = ({id, category, title, description, pictureUrl, stock, price}:Product) => {
  const {onAddItem, cartItems, isInCart} = useContext(CartContext);
  let updatedStock = stock;
  if (isInCart(id)) {
    updatedStock = updatedStock - cartItems[(cartItems.findIndex(item => item.id === id))].quantity;
  }
  const [currentStock, setCurrentStock] = useState(updatedStock);
  const router = useRouter();

  const onAdd = (quantity: number = 1) => {
    if (quantity > currentStock) return;
    onAddItem({title, description, pictureUrl, stock, price, id, category, quantity});
    setCurrentStock((prevState) => prevState - quantity);
  }

  const goBack = () => {
    router.back();
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
      <div className={`flex justify-evenly items-center mt-4 px-4`}>
        <Button className={`max-w-md bg-gray-50 text-gray-950 hover:underline`} handleClick={goBack}>&#8592; Voltar</Button>
        <Button className={`max-w-md bg-gray-50 text-gray-950 hover:underline`} handleClick={goToCart}>Ir ao carrinho &#10148;</Button>
      </div>
    </section>
  );
};

export default ItemDetail;
