"use server"

import {TCartItem} from "@/types/cart";
import {createOrder} from "@/lib/firebase/data/orders";
import {revalidatePath} from "next/cache";

export const placeOrder = async (cartItems: TCartItem[], email: string, totalPrice: number, prevState: {message: string|null}, formData: FormData) => {
  try {
    const id = await createOrder(email, cartItems, totalPrice);
    revalidatePath('/')
    return {
      message: id
    }
  } catch (e) {
    return {
      message: null
    };
  }
}
