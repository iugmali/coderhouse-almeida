'use client';

import {Product} from "@/types/product";
import {useState} from "react";
import ItemCount from "@/components/items/ItemCount";
import Image, {ImageLoaderProps} from "next/image";
import Link from "next/link";

const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const Item = ({id, title, description, pictureUrl, stock, price}: Product) => {
  return (
    <Link href={`/product/${id}`}>
      <article className={`rounded-lg justify-self-center w-72 border-gray-600 bg-gray-200 text-gray-950 shadow-md hover:shadow-xl`}>
        <h1 className={`text-center text-xl py-2`}>{title}</h1>
        <Image className={`h-64`} loader={imageLoader} src={pictureUrl} alt={title} width={320} height={320} />
        <p className={`text-center hover:bg-gray-300 transition-all`}>Ver detalhes</p>
        <h2 className={`text-center p-4 text-2xl`}>R$ {price.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</h2>
      </article>
    </Link>
  )
};

export default Item;