import ItemListContainer from "@/components/ItemListContainer";

const Home = () => {
  return (
      <main className="flex h-full flex-col px-14 py-2">
        <ItemListContainer greeting={`Hello Coderstore`} />
      </main>
  );
};

export default Home;
