import {fetchCategories, fetchCategory, fetchProducts} from "@/lib/firebase/data/products";
import {auth} from "@/lib/auth";
import {TProduct} from "@/types/product";
import {jetBrainsMono} from "@/app/fonts";
import ItemList from "src/components/products/ProductList";

type Props = {
  params: {
    category: string;
  }
};

export const dynamicParams = false;

export const generateStaticParams = async () => {
  const categories = await fetchCategories();
  return categories.map((category) => ({
    category: category.id,
  }))
};

const ItemListByCategoryPage = async ({params: {category: categoryId}} : Props) => {
  const session = await auth();
  let products: TProduct[] = [];
  try {
    products = await fetchProducts(categoryId);
  } catch (e) {
    throw e;
  }
  return (
    <main className={`flex flex-col mt-4 mb-4`}>
      {products.length > 0 ? (
        <>
          <h1 className={`${jetBrainsMono.className} text-center text-gray-600 text-sm md:text-base`}>Olá, {(session && session.user) ? session.user.name : 'visitante'}! Listando {categoryId}.</h1>
          <ItemList products={products} />
        </>
      ) : (
        <h1 className={`${jetBrainsMono.className} text-center text-gray-600 text-sm md:text-base`}>Olá, {(session && session.user) ? session.user.name : 'visitante'}! Não temos {categoryId}.</h1>
      )}
    </main>
  );
};

export default ItemListByCategoryPage;
