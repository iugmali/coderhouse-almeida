import {memo} from "react";
import {TOrder} from "@/types/order";
import {jetBrainsMono} from "@/app/fonts";
import {formatCurrency} from "@/lib/util";

const OrderItem = (order: TOrder) => {
  return (
    <article className={`flex flex-col md:flex-row justify-between items-center mx-4 py-2 px-4 gap-4 border rounded-2xl border-gray-950`}>
      <p>ID do pedido: <span className={`${jetBrainsMono.className} font-bold`}>{order.id}</span></p>
      <div className={`flex-1 flex flex-wrap justify-center items-center gap-4`}>
        {order.items.map((item) => <p key={item.id}>{item.title}:{item.quantity}</p>)}
      </div>
      <p className={`${jetBrainsMono.className}`}>Total: {formatCurrency(order.total)}</p>
    </article>
  );
}

export default memo(OrderItem);
