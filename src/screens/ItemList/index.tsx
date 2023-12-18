import {fetchItems} from "@/lib/firebase/data/items";
import {TItem} from "@/types/item";
import ItemList from "@/components/items/ItemList";
import {initFirebaseApp} from "@/lib/firebase/config";

type Props = {
  category?: string;
}

const ItemListScreen = async ({category}: Props) => {
  let products: TItem[] = [];
  await new Promise((res, rej) => setTimeout(() => res(true), 3000));
  try {
    products = await fetchItems(category);
  } catch (e) {
    throw e;
  }
  return (
    <main className={`flex flex-col mt-4 mb-4`}>
      {products.length > 0 ? (
        <>
          <h1 className={`text-center`}>Olá, visitante! Listando {category ?? 'todos os produtos'}.</h1>
          <ItemList items={products}/>
        </>
      ) : (
        <h1 className={`text-center`}>Olá, visitante! Não temos {category ?? 'produtos'}.</h1>
      )}
    </main>
  );
};

export default ItemListScreen;
