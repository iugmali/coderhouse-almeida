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
    <main className="flex h-full flex-row items-center justify-center p-14">
      <p>{category}</p>
    </main>
  );
};

export default CategoryPage;
