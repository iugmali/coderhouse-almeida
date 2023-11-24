import {getProduct, getProducts} from "@/data/products";
import {Product} from "@/types/product";
import ItemList from "@/components/items/ItemList";
import ItemDetail from "@/components/items/ItemDetail";

type Props = {
  id: string
}

const ItemDetailContainer = async ({id}: Props) => {
  let product: Product;
  try {
    product = await getProduct(id);
  } catch (e) {
    throw e;
  } finally {

  }
  return (
    <main className={`flex flex-col h-full mt-4 mb-4`}>
      <ItemDetail {...product} />
    </main>
  );
};

export default ItemDetailContainer;
