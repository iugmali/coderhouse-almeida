import {CartItem} from "@/types/cart-item";

export type CartState = {
  cartItems: CartItem[],
  total: number
}

export type CartReducerAction = {
  type: Action_Type;
  item?: CartItem;
  id?: string;
  cartState?: CartState;
}

export enum Action_Type {
  ADD,
  REMOVE,
  CLEAR,
  RETRIEVE
}
