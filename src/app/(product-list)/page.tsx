import {auth} from "@/lib/auth";
import {TProduct} from "@/types/product";
import {fetchProducts} from "@/lib/firebase/data/products";
import {jetBrainsMono} from "@/app/fonts";
import ItemList from "src/components/products/ProductList";

const ItemListPage = async () => {
  const session = await auth();
  let products: TProduct[] = [];
  try {
    products = await fetchProducts();
  } catch (e) {
    throw e;
  }
  return (
    <main className={`flex flex-col mt-4 mb-4`}>
      {products.length > 0 ? (
        <>
          <h1 className={`${jetBrainsMono.className} text-center text-gray-600 text-sm md:text-base`}>Olá, {(session && session.user) ? session.user.name : 'visitante'}! Listando todos os itens.</h1>
          <ItemList products={products} />
        </>
      ) : (
        <h1 className={`${jetBrainsMono.className} text-center text-gray-600 text-sm md:text-base`}>Olá, {(session && session.user) ? session.user.name : 'visitante'}! Não temos itens.</h1>
      )}
    </main>
  );
};

export default ItemListPage;
