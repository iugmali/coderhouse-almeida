import { produce } from 'immer'
import { persist } from 'zustand/middleware'
import {create} from "zustand";
import {TCartContext, TCartItem} from "@/types/cart";

export const useCartStore = create<TCartContext>()(
  persist(
    (set, get) => ({
      cartItems: [],
      totalItems: 0,
      totalPrice: 0,
      onAddItem: (cartItem: TCartItem) => {
        if (get().isInCart(cartItem.id)) {
          const index = get().cartItems.findIndex(item => item.id === cartItem.id)
          if (get().cartItems[index].quantity + cartItem.quantity > cartItem.stock) return;
          set(
            produce((state) => {
              state.totalItems = state.totalItems + cartItem.quantity;
              state.totalPrice = state.totalPrice + (cartItem.quantity * cartItem.price);
              state.cartItems[index].quantity = get().cartItems[index].quantity + cartItem.quantity;
            })
          )
        } else {
          if (cartItem.quantity > cartItem.stock) return;
          set(
            produce((state) => {
              state.totalItems = state.totalItems + cartItem.quantity;
              state.totalPrice = state.totalPrice + (cartItem.quantity * cartItem.price);
              state.cartItems.push(cartItem);
            })
          )
        }
      },
      onSubtractItem: (id) => {
        if (get().isInCart(id)) {
          const index = get().cartItems.findIndex(item => item.id === id)
          set(
            produce((state) => {
              state.totalItems = state.totalItems - 1;
              state.totalPrice = state.totalPrice - get().cartItems[index].price;
              if (get().cartItems[index].quantity === 1) {
                state.cartItems.splice(index, 1);
              } else {
                state.cartItems[index].quantity = state.cartItems[index].quantity - 1;
              }
            })
          )
        }
      },
      onRemoveItem: (id) => {
        if (get().isInCart(id)) {
          const index = get().cartItems.findIndex(item => item.id === id)
          set(
            produce((state) => {
              state.totalItems = state.totalItems - get().cartItems[index].quantity;
              state.totalPrice = state.totalPrice - (get().cartItems[index].quantity * get().cartItems[index].price);
              state.cartItems.splice(index, 1);
            })
          )
        }
      },
      clearCart: () => {
        set(
          produce((state) => {
            state.cartItems = [];
            state.totalItems = 0;
            state.totalPrice = 0;
          })
        )
      },
      isInCart: (id) => {
        return (get().cartItems.findIndex(item => item.id === id) != -1)
      }
    }),
    {
      name: 'coderstore-almeida-cart-storage',
      skipHydration: true
    },
  ),
)

