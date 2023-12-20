import ItemDetailScreen from "@/screens/ItemDetail";

type Props = {
  params: {
    id: string;
  }
};

const ItemPage = async ({params: {id}} : Props) => {
  return (
    <ItemDetailScreen id={id} />
  );
};

export default ItemPage;
