import {motion, AnimatePresence} from "framer-motion";
import {ShoppingCartIcon} from "@heroicons/react/24/outline";

type Props = {
  quantity: number;
}

const CartWidget = ({quantity}: Props) => {
  return (
    <button className="relative hover:opacity-50">
      <AnimatePresence>
        {(quantity) ?
          <motion.div
            key={quantity}
            animate={{
              scale: [1.3, 1]
            }}
            transition={{
              type: "spring",
              duration: 0.3
            }}
            exit={{
              opacity: 0,
              scale: 0.3
            }}
            className="t-0 absolute left-6"
          >
            <motion.p
              className="flex h-2 w-2 items-center justify-center rounded-full bg-gray-100 p-3 text-xs text-gray-950"
            >
              {quantity}
            </motion.p>
          </motion.div>
          :
          <div>
          </div>
        }
        <ShoppingCartIcon className={`mt-0 h-6 w-6`}/>
      </AnimatePresence>
    </button>
  );
};

export default CartWidget;
