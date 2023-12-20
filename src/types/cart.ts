import {TItem} from "@/types/item";

export type TCartItem = TItem & {
  quantity: number;
}

export type TCartState = {
  cartItems: TCartItem[];
  totalItems: number;
  totalPrice: number;
}

type TCartReducerAddAction = {
  type: Action_Type.ADD;
  item: TCartItem;
}
type TCartReducerRemoveAction = {
  type: Action_Type.SUBTRACT | Action_Type.REMOVE;
  id: string;
}
type TCartReducerRetrieveAction = {
  type: Action_Type.RETRIEVE;
  cartState: TCartState;
}
type TCartReducerClearAction = {
  type: Action_Type.CLEAR;
}

export type TCartReducerAction = TCartReducerAddAction | TCartReducerRemoveAction | TCartReducerRetrieveAction | TCartReducerClearAction;

export type TCartContext = {
  cartItems: TCartItem[];
  totalItems: number;
  totalPrice: number;
  onAddItem: (item: TCartItem) => void;
  onSubtractItem: (id: string) => void;
  onRemoveItem: (id: string) => void;
  clearCart: () => void;
  isInCart: (id: string) => boolean;
}

export enum Action_Type {
  ADD,
  SUBTRACT,
  REMOVE,
  CLEAR,
  RETRIEVE
}
