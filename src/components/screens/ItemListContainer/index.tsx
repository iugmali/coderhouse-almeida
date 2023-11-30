import {getProducts} from "@/data/products";
import {Product} from "@/types/product";
import ItemList from "@/components/items/ItemList";

type Props = {
  greeting: string;
  category?: string;
}

const ItemListContainer = async ({greeting, category = 'all'}: Props) => {
  let products: Product[] = [];
  try {
    products = await getProducts(category);
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
