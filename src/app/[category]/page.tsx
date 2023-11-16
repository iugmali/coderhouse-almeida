type Props = {
  params: {
    category: string;
  }
};

const Categoria = ({params: {category}} : Props) => {
  return (
    <main className="flex h-full flex-row items-center justify-center p-14">
      <p>{category}</p>
    </main>
  );
};

export default Categoria;
