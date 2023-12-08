import {Product} from "@/types/product";

export type CartItem = Product & {
  quantity: number;
}

export type CartState = {
  cartItems: CartItem[];
  totalItems: number;
  totalPrice: number;
}

type CartReducerAddAction = {
  type: Action_Type.ADD;
  item: CartItem;
}
type CartReducerRemoveAction = {
  type: Action_Type.REMOVE;
  id: string;
}
type CartReducerRetrieveAction = {
  type: Action_Type.RETRIEVE;
  cartState: CartState;
}
type CartReducerClearAction = {
  type: Action_Type.CLEAR;
}

export type CartReducerAction = CartReducerAddAction | CartReducerRemoveAction | CartReducerRetrieveAction | CartReducerClearAction;

export enum Action_Type {
  ADD,
  REMOVE,
  CLEAR,
  RETRIEVE
}
