import {motion, AnimatePresence} from "framer-motion";

type Props = {
  quantity: number;
  total: number;
}

const CartWidget = ({quantity, total}: Props) => {
  return (
    <button className="relative hover:opacity-50">
      <AnimatePresence>
        {(quantity) ?
          <motion.div
            key={total}
            animate={{
              scale: [1.3, 1]
            }}
            transition={{
              type: "spring",
              duration: 0.3
            }}
            exit={{
              opacity: 0,
              scale: 0.5
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
      </AnimatePresence>

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
           className="file: mt-0 h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
      </svg>
    </button>
  );
};

export default CartWidget;
