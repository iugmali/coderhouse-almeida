import {getProduct, getProducts} from "@/lib/data";
import {ItemType} from "@/types/item";
import ItemList from "@/components/items/ItemList";
import ItemDetail from "@/components/items/ItemDetail";
import {DOMException} from "next/dist/compiled/@edge-runtime/primitives";
import {notFound} from "next/navigation";

type Props = {
  id: string
}

const ItemDetailContainer = async ({id}: Props) => {
  let product: ItemType|null;
  try {
    product = await getProduct(id);
    if (!product) notFound();
  } catch (e) {
    throw e;
  }
  return (
    <main className={`flex flex-col h-full mt-4 mb-4`}>
      <ItemDetail {...product} />
    </main>
  );
};

export default ItemDetailContainer;
