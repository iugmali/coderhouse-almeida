import Button from "@/components/ui/Button";
import {motion} from "framer-motion";
import {CartItem} from "@/types/cart";
import {useRouter} from "next/navigation";
import {useContext} from "react";
import CartContext from "@/context/cartContext";

type Props = {
  cartItem: CartItem
}

const CartItem = ({cartItem}: Props) => {
  const {onRemoveItem, onAddItem} = useContext(CartContext);
  const router = useRouter();

  return (
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
           onClick={() => router.push(`/item/${cartItem.id}`, {scroll: false})}>
        <p className={`flex-1`}>{cartItem.title}</p>
        <p className={`flex-1`}>Quantidade: {cartItem.quantity}</p>
        <p className={`flex-1`}>Total:
          R$ {(cartItem.quantity * cartItem.price).toLocaleString('pt-BR', {minimumFractionDigits: 2})}</p>
      </div>
      <div className={`flex-1 flex flex-col-reverse md:flex-row gap-4 items-end md:justify-end`}>
        <Button
          title={`remover`}
          className={`bg-gray-50 text-gray-950 transition-colors hover:bg-gray-200`}
          handleClick={() => {
            onRemoveItem(cartItem.id);
          }}>
          -
        </Button>
        <Button
          title={`adicionar`}
          className={`bg-gray-50 text-gray-950 transition-colors hover:bg-gray-200`}
          handleClick={() => onAddItem({...cartItem, quantity: 1})}>
          +
        </Button>
      </div>
    </motion.li>
  )
}

export default CartItem
