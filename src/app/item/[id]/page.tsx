import ItemDetailContainer from "@/components/screens/ItemDetailContainer";

type Props = {
  params: {
    id: string;
  }
};

const ItemPage = async ({params: {id}} : Props) => {
  return (
    <ItemDetailContainer id={id} />
  );
};

export default ItemPage;
