import {AnimatePresence, motion} from "framer-motion";
import {useContext} from "react";
import CartContext from "@/context/cartContext";
import CartItem from "@/components/cart/CartItem";

const CartList = () => {
  const {cartItems, totalPrice} = useContext(CartContext);

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
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </AnimatePresence>

      <motion.li layout key={`total-price`} className={`flex px-4 py-2 justify-between items-center`}>
        <p className={`text-xl`}>Total</p>
        <p className={`text-xl`}>R$ {totalPrice.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</p>
      </motion.li>
    </motion.ul>
  )
}

export default CartList
