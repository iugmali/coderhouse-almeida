'use client';

import {TItem} from "@/types/item";
import Image, {ImageLoaderProps} from "next/image";
import Link from "next/link";
import {formatCurrency} from "@/lib/util";
import {jetBrainsMono, montserrat} from "@/app/fonts";
import {PlusIcon} from "@heroicons/react/20/solid";
import Button from "@/components/ui/Button";
import {useCartStore} from "@/store/cart.store";
import {memo} from "react";


const Item = (item: TItem) => {
  const onAddItem = useCartStore(state => state.onAddItem);
  return (item.stock === 0) ? null : (
    <article className={`relative p-4 transition-all group rounded-3xl justify-self-center w-[288px] h-[350px] text-gray-950 shadow-sm hover:shadow-2xl flex flex-col justify-center items-center`}>
      <Link href={`/item/${item.id}`} scroll={false}>
        <div className={`relative h-[200px] w-[200px] rounded-3xl drop-shadow-sm overflow-hidden`}>
          <Image
            className={`object-contain`}
            placeholder={"blur"} blurDataURL={"/image-placeholder.png"}
            src={`/item/${item.id}/${item.images[0]}`} alt={item.title} fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
      <h1 className={`${montserrat.className} text-center text-xl py-2`}>{item.title}</h1>
      <p className={`${jetBrainsMono.className} text-center transition-all`}>{formatCurrency(item.price)}</p>
      <Link href={`/item/${item.id}`} scroll={false}>
        <p className={`mt-2 text-xs underline italic text-gray-500`}>ver detalhes...</p>
      </Link>
      <Button handleClick={() => onAddItem({...item, quantity: 1})} className={`z-10 absolute rounded-full bottom-0 right-0 p-0 m-0 h-8 w-8 bg-gray-800 text-center text-white`}><PlusIcon /></Button>
    </article>
  );
};

export default memo(Item);
