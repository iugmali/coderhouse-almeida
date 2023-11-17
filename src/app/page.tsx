import ItemListContainer from "@/components/ItemListContainer";

const HomePage = () => {
  return (
      <main className="flex h-full flex-col px-14 py-2">
        <ItemListContainer greeting={`Hello Coderstore`} />
      </main>
  );
};

export default HomePage;
