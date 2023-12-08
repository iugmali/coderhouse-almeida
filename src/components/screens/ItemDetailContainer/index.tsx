import {getProduct, getProducts} from "@/data/products";
import {Product} from "@/types/product";
import ItemList from "@/components/items/ItemList";
import ItemDetail from "@/components/items/ItemDetail";
import {DOMException} from "next/dist/compiled/@edge-runtime/primitives";

type Props = {
  id: string
}

const ItemDetailContainer = async ({id}: Props) => {
  let product: Product;
  try {
    product = await getProduct(id);
  } catch (e) {
    return (
      <main className="flex h-full flex-row items-center justify-center p-14">
        <p>{e as string}</p>
      </main>
    );
  }

  return (
    <main className={`flex flex-col h-full mt-4 mb-4`}>
      <ItemDetail {...product} />
    </main>
  );
};

export default ItemDetailContainer;
