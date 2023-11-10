import Navbar from "@/components/Navbar";
import DefaultPage from "@/components/DefaultPage";

interface Props {
  params: {
    category: string;
  }
}

const Categoria = ({params: {category}} : Props) => {
  return (
    <main className="flex min-h-screen flex-row items-center justify-center p-24">
      <p>{category}</p>
    </main>
  );
};

export default Categoria;
