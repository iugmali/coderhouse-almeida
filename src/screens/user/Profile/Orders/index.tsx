import Link from "next/link";
import {LinkButton} from "@/components/ui/Button";
import {auth} from "@/lib/auth";
import {TOrder} from "@/types/order";
import {fetchOrders} from "@/lib/firebase/data/orders";
import OrderList from "@/components/user/orders/OrderList";

const OrdersScreen = async () => {
  const session = await auth();
  const orders = await fetchOrders(session!.user!.email!);
  return (
    <main className={`w-full flex flex-col items-center gap-8 mt-4`}>
      {orders.length > 0 ? (
        <OrderList orders={orders} />
      ) : (
        <p className={`text-center`}>Você ainda não possui pedidos.</p>
      )}
      <LinkButton className={`w-60`} href={'/profile/'}>Voltar</LinkButton>
    </main>
  )
}

export default OrdersScreen;
