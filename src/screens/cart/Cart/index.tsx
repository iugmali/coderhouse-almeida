'use client';

import Button, {LinkButton, TextButton} from "@/components/ui/Button";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import Modal from "@/components/ui/Modal";
import CartList from "@/components/cart/CartList";
import {useCartStore} from "@/store/cart.store";

const CartScreen = () => {

  const clearCart = useCartStore(state => state.clearCart);
  const totalItems = useCartStore(state => state.totalItems);

  const router = useRouter();
  const [isEmptyingCart, setIsEmptyingCart] = useState(false);

  const handleClearCart = () => {
    setIsEmptyingCart(false);
    clearCart();
  }

  // Esse código precisa ser passado para clients components que utilizam zustand com persist, para garantir que o zustand rode depois do nextjs hidratar
  const [hasHydrated, setHasHydrated] = useState(false);
  useEffect(() => {
    useCartStore.persist.rehydrate();
    setHasHydrated(true);
  }, []);
  if (!hasHydrated) return null;

  return (
    <main className={`flex flex-col mt-4`} suppressHydrationWarning={true}>
      <AnimatePresence>
        {isEmptyingCart && (
          <Modal onClose={() => setIsEmptyingCart(false)}>
            <h2 className={`text-xl text-center m-4`}>Esvaziar Carrinho?</h2>
            <p className={`text-center`}>Tem certeza que deseja esvaziar todo o seu carrinho?</p>
            <div className={`flex gap-4 m-4 justify-end`}>
              <TextButton className={`border border-gray-950`} handleClick={() => setIsEmptyingCart(false)}>Não</TextButton>
              <Button className={`bg-red-700`} handleClick={handleClearCart}>Sim, esvaziar!</Button>
            </div>
          </Modal>
        )}
      </AnimatePresence>

      <AnimatePresence mode={`wait`}>
        {totalItems === 0 ?
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
            <CartList />
          )
        }
      </AnimatePresence>


      <motion.div
        key={`cart-action-buttons`}
        initial={{
          y: -30,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        className={`mt-4 mx-4 flex justify-center gap-4 md:gap-8`}>

        {totalItems > 0 ? (
          <>
            <Button className={`bg-gray-800`} handleClick={() => router.push('/')}>Continuar Comprando</Button>
            <Button className={`bg-red-600`} handleClick={() => setIsEmptyingCart(true)}>Esvaziar Carrinho</Button>
            <Button className={`bg-green-800`} handleClick={() => router.push('/cart/checkout')}>Prosseguir para Checkout</Button>
          </>
          ) : (
          <LinkButton className={``} href={`/`}>Retornar para a tela inicial</LinkButton>
      )}
      </motion.div>
    </main>
  )
}

export default CartScreen;
