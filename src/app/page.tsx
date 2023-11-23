import ItemListContainer from "../components/items/ItemListContainer";

const HomePage = () => {
  return (
      <main className="flex h-full">
        <ItemListContainer greeting={`Hello Coderstore`} />
      </main>
  );
};

export default HomePage;
