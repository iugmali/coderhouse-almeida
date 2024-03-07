import {TItem} from "@/types/item";
import {fetchItem} from "@/lib/firebase/data/items";
import {notFound} from "next/navigation";
import ItemDetail from "@/components/items/ItemDetail";

type Props = {
  params: {
    id: string;
  }
};

const ItemPage = async ({params: {id}} : Props) => {
  let product: TItem|null;
  try {
    product = await fetchItem(id);
    if (!product) notFound();
  } catch (e) {
    throw e;
  }
  return (
    <main className={`flex flex-col h-full mt-4 mb-4`}>
      <ItemDetail {...product} />
    </main>
  );
};

export default ItemPage;
