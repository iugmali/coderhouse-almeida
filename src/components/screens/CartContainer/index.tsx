'use client';

import Button from "@/components/ui/Button";
import {useRouter} from "next/navigation";
import {useContext, useState} from "react";
import CartContext from "@/context/cartContext";
import {AnimatePresence, motion} from "framer-motion";
import Modal from "@/components/ui/Modal";
import CartList from "@/components/cart/CartList";

const CartContainer = () => {
  const {clearCart, totalItems} = useContext(CartContext);
  const router = useRouter();
  const [isEmptyingCart, setIsEmptyingCart] = useState(false);

  const handleClearCart = () => {
    setIsEmptyingCart(false);
    clearCart();
  }

  return (
    <main className={`flex flex-col mt-4`}>
      <AnimatePresence>
        {isEmptyingCart && (
          <Modal onClose={() => setIsEmptyingCart(false)}>
            <h2 className={`text-xl text-center m-4`}>Esvaziar Carrinho?</h2>
            <p>Tem certeza que deseja esvaziar todo o seu carrinho?</p>
            <div className={`flex gap-4 m-4 justify-end`}>
              <Button handleClick={() => setIsEmptyingCart(false)}>Não</Button>
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
            <Button className={`bg-green-800`} handleClick={() => {}}>Prosseguir para Pagamento</Button>
          </>
          ) : (
          <Button className={``} handleClick={() => router.push('/')}>Retornar para a tela inicial</Button>
      )}
      </motion.div>
    </main>
  )
}

export default CartContainer;
