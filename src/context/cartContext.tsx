'use client';

import {createContext, ReactNode, useEffect, useReducer} from "react";
import {Action_Type, CartReducerAction, CartItem, CartState} from "@/types/cart";

type CartContextType = {
  cartItems: CartItem[];
  total: number;
  onAddItem: (item: CartItem) => void;
  onRemoveItem: (id: string) => void;
  clearCart: () => void;
  isInCart: (id: string) => boolean;
}

const CartContext = createContext<CartContextType>({
  cartItems: [],
  total: 0,
  onAddItem: (item) => {},
  onRemoveItem: (id) => {},
  clearCart: () => {},
  isInCart: () => false
})

const defaultCartState: CartState = {
  cartItems: [],
  total: 0
}

const LOCAL_STORAGE_KEY = 'coderstore_almeida_cart';


const cartReducer = (state: CartState, action: CartReducerAction) : CartState => {

  if (action.type === Action_Type.ADD) {
    const updatedTotalAmount = state.total + action.item!.price * action.item!.quantity
    const existingCartItemIndex = state.cartItems.findIndex(item => item.id === action.item!.id)
    let updatedItems;
    if (existingCartItemIndex === -1) {
      updatedItems = state.cartItems.concat(action.item!);
    } else {
      const existingCartItem = state.cartItems[existingCartItemIndex]
      if (existingCartItem.quantity + action.item!.quantity > existingCartItem.stock) return state;
      let updatedItem;
      updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + action.item!.quantity
      }
      updatedItems = [...state.cartItems];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    const cartState = {cartItems: updatedItems, total: updatedTotalAmount};
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cartState));
    return cartState;
  }

  if (action.type === Action_Type.REMOVE) {
    const existingCartItemIndex = state.cartItems.findIndex(item => item.id === action.id!);
    if (existingCartItemIndex === -1) return state;
    const existingItem = state.cartItems[existingCartItemIndex];
    const updatedTotalAmount = state.total - existingItem.price;
    let updatedItems;
    if (existingItem.quantity === 1) {
      updatedItems = [...state.cartItems];
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      let updatedItem = {...existingItem, quantity: existingItem.quantity - 1};
      updatedItems = [...state.cartItems];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    const cartState = {cartItems: updatedItems, total: updatedTotalAmount};
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cartState));
    return cartState;
  }

  if (action.type === Action_Type.CLEAR) {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    return defaultCartState;
  }

  if (action.type === Action_Type.RETRIEVE) {
    return action.cartState!;
  }

  return defaultCartState;
}

type Props = {
  children: ReactNode
}

export const CartContextProvider = ({children}:Props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  useEffect(() => {
    if (localStorage.getItem(LOCAL_STORAGE_KEY))
      dispatchCartAction({type: Action_Type.RETRIEVE, cartState: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)!)});
  }, [])

  const addItemToCartHandler = (item: CartItem) => {
    dispatchCartAction({type: Action_Type.ADD, item: item});
  }

  const removeItemFromCartHandler = (id: string) => {
    dispatchCartAction({type: Action_Type.REMOVE, id: id});
  }

  const isInCartHandler= (id: string) => {
    return (cartState.cartItems.findIndex(item => item.id === id) != -1);
  }

  const clearCartHandler = () => {
    dispatchCartAction({type: Action_Type.CLEAR});
  }

  return (
    <CartContext.Provider value={{
      cartItems: cartState.cartItems,
      total: cartState.total,
      onAddItem: addItemToCartHandler,
      onRemoveItem: removeItemFromCartHandler,
      clearCart: clearCartHandler,
      isInCart: isInCartHandler
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext;
