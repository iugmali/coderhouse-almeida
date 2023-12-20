import {fetchItem} from "@/lib/firebase/data/items";
import {TItem} from "@/types/item";
import ItemDetail from "@/components/items/ItemDetail";
import {notFound} from "next/navigation";

type Props = {
  id: string
}

const ItemDetailScreen = async ({id}: Props) => {
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

export default ItemDetailScreen;
