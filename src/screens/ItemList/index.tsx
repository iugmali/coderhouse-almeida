import {fetchItems} from "@/lib/firebase/data/items";
import {TItem} from "@/types/item";
import ItemList from "@/components/items/ItemList";
import {auth} from "@/lib/auth";
import {jetBrainsMono, montserrat} from "@/app/fonts";

type Props = {
  category?: string;
}

const ItemListScreen = async ({category}: Props) => {
  const session = await auth();
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
          <h1 className={`${jetBrainsMono.className} text-center text-gray-600 text-sm md:text-base`}>Olá, {(session && session.user) ? session.user.name : 'visitante'}! Listando {category ?? 'todos os itens'}.</h1>
          <ItemList items={products}/>
        </>
      ) : (
        <h1 className={`${jetBrainsMono.className} text-center text-gray-600 text-sm md:text-base`}>Olá, {(session && session.user) ? session.user.name : 'visitante'}! Não temos {category ?? 'itens'}.</h1>
      )}
    </main>
  );
};

export default ItemListScreen;
