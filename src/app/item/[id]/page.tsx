import {Product} from "@/types/product";
import ItemDetailContainer from "@/components/screens/ItemDetailContainer";
import {getProduct} from "@/data/products";

type Props = {
  params: {
    id: string;
  }
};

const CategoryPage = async ({params: {id}} : Props) => {
  return (
    <ItemDetailContainer id={id} />
  );
};

export default CategoryPage;
