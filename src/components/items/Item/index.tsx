'use client';

import {ItemType} from "@/types/item";
import {useState} from "react";
import ItemCount from "@/components/items/ItemCount";
import Image, {ImageLoaderProps} from "next/image";
import Link from "next/link";
import {formatCurrency} from "@/lib/util";
import Button, {TextButton} from "@/components/ui/Button";
import {jetBrainsMono, montserrat} from "@/app/fonts";

const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const Item = ({id, title, description, pictureUrl, stock, price}: ItemType) => {
  return (
    <Link href={`/item/${id}`} scroll={false}>
      <article className={`transition-all group animate-entering rounded-3xl justify-self-center w-[288px] h-[350px] text-gray-950 shadow-sm hover:shadow-2xl flex flex-col justify-center items-center`}>
        <div className={`relative h-[200px] w-[200px] rounded-3xl overflow-hidden`}><Image className={`object-contain`} loader={imageLoader} src={pictureUrl} alt={title} fill={true} /></div>
        <h1 className={`${montserrat.className} text-center text-xl py-2`}>{title}</h1>
        <p className={`${jetBrainsMono.className} text-center transition-all`}>{formatCurrency(price)}</p>
        <p className={`mt-2 text-xs underline italic text-gray-500`}>ver detalhes...</p>
      </article>
    </Link>
  )
};

export default Item;
