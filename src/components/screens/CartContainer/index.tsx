'use client';

import Button from "@/components/ui/Button";
import {useRouter} from "next/navigation";
import {useContext, useState} from "react";
import CartContext from "@/context/cartContext";
import {AnimatePresence, motion} from "framer-motion";

const CartContainer = () => {
  const {cartItems, clearCart, onRemoveItem, onAddItem, total} = useContext(CartContext);
  const router = useRouter();

  const goBack = () => {
    router.back();
  }

  return (
    <main className={`flex flex-col mt-4`}>
      <AnimatePresence mode={`wait`}>
        {cartItems.length === 0 ?
          (
            <motion.p
              key={"cart-text"}
              initial={{
                y: -30,
                opacity: 0
              }}
              animate={{
                y: 0,
                opacity: 1
              }}
              className={`text-center`}
            >Não existem itens no seu carrinho.
            </motion.p>
          ) :
          (
            <motion.ul
              key={"cart-list"}
              className={`px-14 flex flex-col gap-4`}
              exit={{
                y: -30,
                opacity: 0,
                transition: {duration: 0.3}
              }}
            >
              <AnimatePresence>
                {cartItems.map(cartItem => (
                  <motion.li
                    layout
                    key={cartItem.id}
                    exit={{
                      y: -30,
                      opacity: 0,
                      transition: {duration: 0.3}
                    }}
                    className={`rounded-lg px-4 py-2 border flex items-center justify-between border-gray-600 hover:border-gray-950`}
                  >
                    <div className={`flex-[3] flex flex-col md:flex-row hover:cursor-pointer`}
                         onClick={() => router.push(`/item/${cartItem.id}`)}>
                      <p className={`flex-1`}>{cartItem.title}</p>
                      <p className={`flex-1`}>Quantidade: {cartItem.quantity}</p>
                      <p className={`flex-1`}>Total:
                        R$ {(cartItem.quantity * cartItem.price).toLocaleString('pt-BR', {minimumFractionDigits: 2})}</p>
                    </div>
                    <div className={`flex-1 flex flex-col-reverse md:flex-row gap-4 items-end md:justify-end`}>
                      <Button
                        className={`bg-gray-50 text-gray-950 transition-colors hover:bg-gray-200`}
                        handleClick={() => {
                          onRemoveItem(cartItem.id);
                        }}>-</Button>
                      <Button
                        className={`bg-gray-50 text-gray-950 transition-colors hover:bg-gray-200`}
                        handleClick={() => onAddItem({...cartItem, quantity: 1})}>+</Button>
                    </div>
                  </motion.li>
                ))}
              </AnimatePresence>

              <li className={`flex px-4 py-2 justify-between items-center`}>
                <p className={`text-xl`}>Total</p>
                <p className={`text-xl`}>R$ {total.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</p>
              </li>
            </motion.ul>
          )
        }
      </AnimatePresence>


      <div className={`flex justify-center gap-8`}>
        <Button className={`mt-4 bg-green-800`} handleClick={goBack}>Voltar</Button>
        {cartItems.length > 0 && <Button className={`mt-4`} handleClick={clearCart}>Esvaziar Carrinho</Button>}
      </div>
    </main>
  )
}

export default CartContainer;
