import {AnimatePresence, motion} from "framer-motion";
import CartItem from "@/components/cart/CartItem";
import {formatCurrency} from "@/lib/util";
import {jetBrainsMono} from "@/app/fonts";
import {useCartStore} from "@/store/cart.store";
import {useEffect} from "react";

const CartList = () => {
  const cartItems = useCartStore(state => state.cartItems);
  const totalPrice = useCartStore(state => state.totalPrice);
  return (
      <motion.ul
        key={"cart-list"}
        className={`px-14 flex flex-col gap-4`}
        initial={{
          y: -30,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        exit={{
          y: -30,
          opacity: 0,
          transition: {duration: 0.3}
        }}
      >
        <AnimatePresence>
          {cartItems.map(cartItem => (
            <CartItem key={cartItem.id} cartItem={cartItem}/>
          ))}
        </AnimatePresence>
        <li className={`flex w-3/4 max-w-3xl mx-auto py-2 justify-between items-center`}>
          <p className={`text-xl font-bold`}>Total</p>
          <p className={`${jetBrainsMono.className} text-xl font-bold`}>{formatCurrency(totalPrice)}</p>
        </li>
      </motion.ul>
  )
}

export default CartList
