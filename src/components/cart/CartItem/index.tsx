'use client'

import Button, {TextButton} from "@/components/ui/Button";
import {motion} from "framer-motion";
import {TCartItem} from "@/types/cart";
import {useRouter} from "next/navigation";
import {formatCurrency} from "@/lib/util";
import {jetBrainsMono, montserrat} from "@/app/fonts";
import {MinusIcon, PlusIcon} from "@heroicons/react/20/solid";
import {TrashIcon} from "@heroicons/react/24/outline";
import {useCartStore} from "@/store/cart.store";

type Props = {
  cartItem: TCartItem;
}

const CartItem = ({cartItem}: Props) => {
  const onSubtractItem = useCartStore(state => state.onSubtractItem);
  const onAddItem = useCartStore(state => state.onAddItem);
  const onRemoveItem = useCartStore(state => state.onRemoveItem);

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
        <div className={`flex-1 flex flex-col md:flex-row md:justify-between md:items-center hover:cursor-pointer`}
             onClick={() => router.push(`/item/${cartItem.id}`, {scroll: false})}>
          <p className={`px-1 ${montserrat.className} flex-[2]`}>{cartItem.title}</p>
          <p className={`px-1 flex-1`}>Quantidade: <span
            className={`${jetBrainsMono.className}`}>{cartItem.quantity}</span></p>
          <p className={`px-1 flex-1`}>Total: <span
            className={`${jetBrainsMono.className}`}>{formatCurrency(cartItem.quantity * cartItem.price)}</span></p>
        </div>
        <div className={`flex flex-col-reverse md:flex-row gap-4 items-end md:justify-end`}>
          <TextButton
            title={`subtrair`}
            className={`hover:bg-gray-200`}
            handleClick={() => {
              onSubtractItem(cartItem.id);
            }}>
            <MinusIcon className={`h-3 w-3`}/>
          </TextButton>
          <TextButton
            title={`adicionar`}
            className={`hover:bg-gray-200`}
            handleClick={() => onAddItem({...cartItem, quantity: 1})}>
            <PlusIcon className={`h-3 w-3`}/>
          </TextButton>
        </div>
        <TextButton
          title={`remover`}
          className={`hover:bg-gray-200`}
          handleClick={() => onRemoveItem(cartItem.id)}>
          <TrashIcon className={`h-6 w-6 text-red-800`}/>
        </TextButton>
      </motion.li>
  )
}

export default CartItem
