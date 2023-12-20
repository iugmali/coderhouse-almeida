'use client';

import {TItem} from "@/types/item";
import Image, {ImageLoaderProps} from "next/image";
import Button, {TextButton} from "@/components/ui/Button";
import {useEffect, useState} from "react";
import ItemCount from "@/components/items/ItemCount";
import {useRouter} from "next/navigation";
import {formatCurrency} from "@/lib/util";
import {andika, jetBrainsMono, montserrat} from "@/app/fonts";
import {useCartStore} from "@/store/cart.store";

const ItemDetail = ({id, categoryId, title, description, images, stock, price}: TItem) => {
  const router = useRouter();

  const onAddItem = useCartStore(state => state.onAddItem);
  const cartItems = useCartStore(state => state.cartItems);
  const isInCart = useCartStore(state => state.isInCart);

  const [currentStock, setCurrentStock] = useState(stock);
  const [loadedStock, setLoadedStock] = useState(false);

  let quantityInCart = 0;
  if (isInCart(id)) {
    quantityInCart = cartItems[(cartItems.findIndex(item => item.id === id))].quantity;
  }

  const onAdd = (quantity: number = 1) => {
    if (quantity > currentStock) return;
    onAddItem({title, description, images, stock, price, id, categoryId, quantity});
  }

  useEffect(() => {
    setCurrentStock(stock - quantityInCart);
    setLoadedStock(true);
  }, [stock, quantityInCart])

  const goBack = () => {
    router.back();
  }

  const goToCart = () => {
    router.push('/cart', {scroll: false});
  }

  return (
    <article
      className={`p-4 lg:border lg:border-gray-200 lg:shadow-2xl rounded-3xl flex flex-col lg:grid lg:grid-cols-3 mx-4 lg:mx-auto gap-0 overflow-hidden max-w-4xl`}>
      <div
        className={`md:col-span-2 flex flex-col justify-between items-center`}>
        <div className={`mt-4 h-60 w-60 md:w-full self-center relative rounded-3xl overflow-hidden`}>
          <Image className={`object-contain`} placeholder={"blur"}
                 blurDataURL={"/image-placeholder.png"} src={`/item/${id}/${images.length > 1 ? images[1] : images[0]}`} alt={title} fill={true}
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <h1 className={`${montserrat.className} text-center text-2xl mt-2`}>{title}</h1>
        <p className={`${andika.className} max-w-md text-justify mx-auto px-4 mt-4`}>{description}</p>
      </div>
      {loadedStock && <div
        className={`p-4 flex flex-col gap-4 mt-0 justify-center items-center mx-auto`}>
        <div className={`mx-auto flex flex-col`}>
          <h2
            className={`${jetBrainsMono.className} text-center p-4 pb-0 text-2xl`}>{formatCurrency(price)}</h2>
          <p className={`text-center text-gray-400`}>
            {`(`}{(currentStock > 0) ? (currentStock == 1) ? `1 disponível` : `${currentStock} disponíveis` : `${(!isInCart(id)) ? `fora de estoque` : `0 disponíveis`}`}{isInCart(id) ? ` - ${quantityInCart} no carrinho` : ``}{`)`}
          </p>
        </div>
        <ItemCount stock={currentStock} initial={1} onAdd={onAdd}/>
        <div className={`flex flex-wrap md:flex-col justify-end items-center gap-4 px-4 mx-auto`}>
          <TextButton className={`mx-auto w-60 border border-gray-950`} handleClick={goBack}>Voltar</TextButton>
          {isInCart(id) &&
            <Button className={`mx-auto w-60 bg-green-800`} handleClick={goToCart}>Finalizar minha
              compra</Button>}
        </div>
      </div>}
    </article>
  );
};

export default ItemDetail;
