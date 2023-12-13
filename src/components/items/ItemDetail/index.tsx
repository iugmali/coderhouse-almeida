'use client';

import {ItemType} from "@/types/item";
import Image, {ImageLoaderProps} from "next/image";
import Button, {TextButton} from "@/components/ui/Button";
import {useCallback, useContext, useEffect, useLayoutEffect, useState} from "react";
import ItemCount from "@/components/items/ItemCount";
import {useRouter} from "next/navigation";
import CartContext from "@/context/cartContext";
import {formatCurrency} from "@/lib/util";
import {jetBrainsMono, montserrat} from "@/app/fonts";

const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const ItemDetail = ({id, categoryId, title, description, pictureUrl, stock, price}:ItemType) => {
  const router = useRouter();
  const {onAddItem, cartItems, isInCart} = useContext(CartContext);

  const [currentStock, setCurrentStock] = useState(stock);
  const [loadedStock, setLoadedStock] = useState(false);

  let quantityInCart = 0;
  if (isInCart(id)) {
    quantityInCart = cartItems[(cartItems.findIndex(item => item.id === id))].quantity;
  }

  const onAdd = (quantity: number = 1) => {
    if (quantity > currentStock) return;
    onAddItem({title, description, pictureUrl, stock, price, id, categoryId, quantity});
  }

  useEffect(() => {
    setCurrentStock(stock - quantityInCart);
    setLoadedStock(true);
  }, [quantityInCart])

  const goBack = () => {
    router.back();
  }

  const goToCart = () => {
    router.push('/cart', {scroll: false});
  }

  return (
    <article className={`p-4 border border-gray-950 rounded-3xl flex flex-col md:grid md:grid-cols-3 mx-4 gap-0 overflow-hidden`}>
        <div
          className={`md:col-span-2 flex flex-col justify-between items-center`}>
          <div className={`mt-4 h-60 w-60 self-center relative`}>
            <Image className={`object-contain`} loader={imageLoader} src={pictureUrl} alt={title} fill={true} />
          </div>
          <h1 className={`${montserrat.className} text-center text-2xl`}>{title}</h1>
          <p className={`max-w-md text-justify mx-auto px-4 mt-4`}>{description}</p>
        </div>
        {loadedStock && <div
          className={`p-4 flex flex-col gap-8 mt-0 justify-evenly md:justify-normal items-center mx-auto`}>
          <div className={`mx-auto flex flex-col`}>
            <h2
              className={`${jetBrainsMono.className} text-center p-4 pb-0 text-2xl`}>{formatCurrency(price)}</h2>
            <p className={`text-center text-gray-400`}>
              {`(`}{(currentStock > 0) ? (currentStock == 1) ? `1 disponível` : `${currentStock} disponíveis` : `${(!isInCart(id)) ? `fora de estoque` : `0 disponíveis`}`}{isInCart(id) ? ` - ${quantityInCart} no carrinho` : ``}{`)`}
            </p>
          </div>
          <ItemCount stock={currentStock} initial={1} onAdd={onAdd}/>
          <div className={`flex flex-wrap md:flex-col justify-end items-center gap-8 px-4 mx-auto`}>
            <TextButton className={`mx-auto w-60 border border-gray-950`} handleClick={goBack}>Voltar</TextButton>
            {isInCart(id) &&
              <TextButton className={`mx-auto w-60 border border-gray-950`} handleClick={goToCart}>Finalizar minha
                compra</TextButton>}
          </div>
        </div>}
    </article>
  );
};

export default ItemDetail;
