import {getProducts} from "@/lib/data";
import {ItemType} from "@/types/item";
import ItemList from "@/components/items/ItemList";

type Props = {
  greeting: string;
  category?: string;
}

const ItemListContainer = async ({greeting, category = 'all'}: Props) => {
  let products: ItemType[] = [];
  try {
    products = await getProducts(category);
  } catch (e) {
    throw e;
  }
  return (
    <main className={`flex flex-col mt-4 mb-4`}>
      <h1 className={`text-center`}>{greeting}</h1>
      <ItemList items={products} />
    </main>
  );
};

export default ItemListContainer;
