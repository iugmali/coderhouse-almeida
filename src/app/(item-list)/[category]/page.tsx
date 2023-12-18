import ItemListScreen from "../../../components/screens/ItemList";
import {getCategories, getCategory} from "@/lib/data";

type Props = {
  params: {
    category: string;
  }
};

export const dynamicParams = false;

export const generateStaticParams = async () => {
  const categories = await getCategories();
  return categories.map((category) => ({
    category: category.id,
  }))
};

const ItemListByCategoryPage = async ({params: {category: categoryId}} : Props) => {
  const category = await getCategory(categoryId)
  return (
    <ItemListScreen greeting={`Olá, visitante! Listando ${category!.name}.`} category={category!.key} />
  );
};

export default ItemListByCategoryPage;
