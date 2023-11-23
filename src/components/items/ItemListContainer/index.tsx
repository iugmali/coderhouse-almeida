'use client';

import {useEffect, useState} from "react";
import {getProducts} from "@/data/products";
import Loading from "@/components/ui/Loading";
import {Product} from "@/types/product";
import ItemList from "@/components/items/ItemList";

type Props = {
  greeting: string
}

const ItemListContainer = ({greeting}: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState<Product[]>([]);


  useEffect(() => {
    const onMount = async () : Promise<void> => {
      setIsLoading(true);
      try {
        const products = await getProducts();
        setItems(products);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false)
      }
    };
    onMount().then(() => {});
  }, []);

  return (
    <section className={`container mt-4 mb-4 mx-auto`}>
      {isLoading && <Loading />}
      <h1 className={`text-center`}>{greeting}</h1>
      <ItemList items={items} />
    </section>
  );
};

export default ItemListContainer;
