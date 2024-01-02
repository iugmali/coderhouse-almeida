import {TOrder} from "@/types/order";
import Order from "src/components/user/orders/Order";

type Props = {
  orders: TOrder[]
}

const OrderList = ({orders}:Props) => {
  return (orders.length > 0) ? (
    <section className={`w-full flex flex-col gap-4 mx-auto max-w-3xl`}>
      {orders.map((order) => (
        <Order key={order.id} {...order} />
      ))}
    </section>
  ) : (
    <p className={`text-center`}>Você ainda não possui pedidos</p>
  )
}

export default OrderList;
