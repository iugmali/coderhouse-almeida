'use client'

import {useEffect, useState} from "react";
import {useCartStore} from "@/store/cart.store";
import {jetBrainsMono, montserrat} from "@/app/fonts";
import {formatCurrency} from "@/lib/util";
import Button, {LinkButton} from "@/components/ui/Button";
import {useFormState, useFormStatus} from "react-dom";
import Spinner from "@/components/ui/Spinner";
import {AnimatePresence} from "framer-motion";
import Modal from "@/components/ui/Modal";
import {useRouter} from "next/navigation";
import {useCartStoreHydrate} from "@/store/useCartStoreHydrate";

const Checkout = ({user, placeOrder}: any) => { // precisa ser any enquanto nao resolvem o bug das server actions com firebase-admin, que só podem ser passados por props não tipadas
  const router = useRouter();
  const cartItems = useCartStore(state => state.cartItems)
  const totalPrice = useCartStore(state => state.totalPrice)
  const clearCart = useCartStore(state => state.clearCart);

  const initialState = {message: null};
  const [state, dispatch] = useFormState(placeOrder.bind(null, cartItems, user.email, totalPrice), initialState)

  const handleConfirmOrder = () => {
    clearCart();
    router.push('/profile')
  }

  if (!useCartStoreHydrate()) return null;

  return (
      (cartItems.length > 0) ? (
        <>
          <h1 className={`${montserrat.className} text-center text-2xl`}>Resumo do seu Pedido</h1>
          <AnimatePresence>
            {state && state.message && (
              <Modal onClose={() => {}}>
                <h2 className={`${montserrat.className} text-xl text-center m-4`}>Pedido Confirmado</h2>
                <p className={`${jetBrainsMono.className} text-center`}>ID: {state.message}</p>
                <div className={`w-full flex mt-4 mb-4 justify-center`}>
                  <Button className={`bg-green-800`} handleClick={handleConfirmOrder}>Ir para o meu perfil</Button>
                </div>
              </Modal>
            )}
          </AnimatePresence>

          <ul className={`px-14 flex flex-col gap-4 mt-4`}>
            {cartItems.map(cartItem => (
              <li
                key={cartItem.id}
                className={`rounded-lg px-4 py-2 border flex items-center justify-between border-gray-600 hover:border-gray-950`}
              >
                <div
                  className={`flex-1 flex flex-col md:flex-row md:justify-between md:items-center hover:cursor-pointer`}>
                  <p className={`px-1 ${montserrat.className} flex-[2]`}>{cartItem.title}</p>
                  <p className={`px-1 flex-1`}>Quantidade: <span
                    className={`${jetBrainsMono.className}`}>{cartItem.quantity}</span></p>
                  <p className={`px-1 flex-1`}>Total: <span
                    className={`${jetBrainsMono.className}`}>{formatCurrency(cartItem.quantity * cartItem.price)}</span>
                  </p>
                </div>
              </li>
            ))}
            <li className={`flex w-3/4 max-w-3xl mx-auto py-2 justify-between items-center`}>
              <p className={`text-xl font-bold`}>Total</p>
              <p className={`${jetBrainsMono.className} text-xl font-bold`}>{formatCurrency(totalPrice)}</p>
            </li>
          </ul>
          <form action={dispatch}>
            <PlaceOrderButton />
          </form>
        </>
      ) : (
        <>
          <p className={`text-center`}>Não existem itens no seu carrinho</p>
          <LinkButton className={``} href={`/`}>Retornar para a tela inicial</LinkButton>
        </>
      )
  );
}

const PlaceOrderButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button className="w-60 mx-auto rounded-3xl py-4 px-4 mt-4 flex justify-evenly items-center bg-green-800" aria-disabled={pending} disabled={pending}>
      {pending ? <><p>Confirmando...</p><Spinner className={'h-5 w-5 border border-r-white border-b-white'}/></> : <span>Confirmar Pedido</span>}
    </Button>
  );
}

export default Checkout;
