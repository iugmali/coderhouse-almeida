import {Product} from "@/types/product";
import ItemDetailContainer from "@/components/screens/ItemDetailContainer";
import {getProduct} from "@/data/products";

type Props = {
  params: {
    productId: string;
  }
};

const CategoryPage = async ({params: {productId}} : Props) => {
  return (
    <ItemDetailContainer id={productId} />
  );
};

export default CategoryPage;
