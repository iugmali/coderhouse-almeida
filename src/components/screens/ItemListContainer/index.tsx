import {getProducts} from "@/data/products";
import {Product} from "@/types/product";
import ItemList from "@/components/items/ItemList";

type Props = {
  greeting: string
}

const ItemListContainer = async ({greeting}: Props) => {
  let products: Product[] = [];
  try {
    products = await getProducts();
  } catch (e) {
    throw e;
  } finally {

  }
  return (
    <main className={`flex flex-col h-full mt-4 mb-4`}>
      <h1 className={`text-center`}>{greeting}</h1>
      <ItemList items={products} />
    </main>
  );
};

export default ItemListContainer;
