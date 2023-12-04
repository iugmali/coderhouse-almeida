import {Product} from "@/types/product";

export type CartItem = Product & {
  quantity: number;
}

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
