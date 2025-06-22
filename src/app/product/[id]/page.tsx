import {TProduct} from "@/types/product";
import {fetchProduct} from "@/lib/firebase/data/products";
import {notFound} from "next/navigation";
import ProductDetail from "src/components/products/ProductDetail";

type Props = {
  params: {
    id: string;
  }
};

const ItemPage = async ({params: {id}} : Props) => {
  let product: TProduct|null;
  try {
    product = await fetchProduct(id);
    if (!product) notFound();
  } catch (e) {
    throw e;
  }
  return (
    <main className={`flex flex-col h-full mt-4 mb-4`}>
      <ProductDetail {...product} />
    </main>
  );
};

export default ItemPage;
