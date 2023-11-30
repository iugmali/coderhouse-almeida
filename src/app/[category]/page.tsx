import ItemListContainer from "@/components/screens/ItemListContainer";

type Props = {
  params: {
    category: string;
  }
};

export const dynamicParams = false;

export const generateStaticParams = () => {
  const categories = ['artigos', 'livros', 'videos'];

  return categories.map((item) => ({
    category: item,
  }))
};

const CategoryPage = ({params: {category}} : Props) => {
  return (
    <ItemListContainer greeting={`Olá, visitante! Listando ${category}.`} category={category} />
  );
};

export default CategoryPage;
