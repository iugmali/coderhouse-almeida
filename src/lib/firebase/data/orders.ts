import 'server-only'

import {TOrder} from "@/types/order";
import {fetchUser} from "@/lib/firebase/data/users";
import {TCartItem} from "@/types/cart";
import {db} from "@/lib/firebase/config";
import {TItem} from "@/types/item";
import {firestoreAutoId} from "@/lib/util";
import {unstable_noStore as noStore} from "next/dist/server/web/spec-extension/unstable-no-store";

export const createOrder = async (email: string, cartItems: TCartItem[], total: number): Promise<string> => {
  const user = await fetchUser(email)
  if (!user) throw 'Usuário não encontrado';
  try {
    for (let cartItem of cartItems) {
      await db.runTransaction(async (t) => {
        const itemRef = db.collection('items').doc(cartItem.id);
        const doc = await t.get(itemRef);
        const newStock = (doc.data() as TItem).stock - cartItem.quantity;
        t.update(itemRef, {stock: newStock});
      });
    }
    const id = firestoreAutoId()
    await db.collection('orders').doc(id).set({
      buyer: {
        name: user.name,
        email: user.email,
        phone: user.phone
      },
      items: cartItems,
      date: new Date(),
      total: total
    }).then((data) => {
      console.log(`Pedido ${id} criado.`)
    });
    return id;
  } catch (e) {
    throw e
  }
}

export const fetchOrders = async (email: string): Promise<TOrder[]> => {
  noStore();
  const orders = await db.collection('orders').where("buyer.email", "==", email).get();
  if (orders.empty) return [];
  return orders.docs.map(doc => ({...doc.data() as TOrder, id: doc.id}));
}
