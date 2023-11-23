'use client';

import {Product} from "@/types/product";
import Item from "@/components/items/Item";

type Props = {
  items: Product[]
}

const ItemList = ({items} : Props) => {
  return (
    <div className={`flex gap-8 flex-wrap justify-center mt-4`}>
      {items.map((item) => (<Item key={item.id} {...item} />))}
    </div>
  );
}

export default ItemList;
