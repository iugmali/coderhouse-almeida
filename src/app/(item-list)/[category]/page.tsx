import ItemListScreen from "@/screens/ItemList";
import {fetchCategories, fetchCategory} from "@/lib/firebase/data/items";

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
  return (
    <ItemListScreen category={categoryId} />
  );
};

export default ItemListByCategoryPage;
