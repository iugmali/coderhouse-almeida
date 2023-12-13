import ItemListContainer from "@/components/screens/ItemListContainer";
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

const CategoryPage = async ({params: {category: categoryId}} : Props) => {
  const category = await getCategory(categoryId)
  return (
    <ItemListContainer greeting={`Olá, visitante! Listando ${category!.name}.`} category={category!.key} />
  );
};

export default CategoryPage;
