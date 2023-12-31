import {TItem} from "@/types/item";
import Item from "@/components/items/Item";

type Props = {
  items: TItem[]
}

const ItemList = ({items} : Props) => {
  return (
    <section className={`flex-1 grid max-md:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 mx-auto`}>
      {items.map((item) => (<Item key={item.id} {...item} />))}
    </section>
  );
}

export default ItemList;
