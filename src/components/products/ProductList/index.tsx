import {TProduct} from "@/types/product";
import Item from "src/components/products/ProductItem";

type Props = {
  products: TProduct[]
}

const ProductList = ({products} : Props) => {
  return (
    <section className={`flex-1 grid max-md:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 mx-auto`}>
      {products.map((product) => (<Item key={product.id} {...product} />))}
    </section>
  );
}

export default ProductList;
