import ItemListContainer from "../components/screens/ItemListContainer";

const HomePage = async () => {

  return (
        <ItemListContainer greeting={`Olá, visitante! Listando todos os produtos.`} />
  );
};

export default HomePage;
