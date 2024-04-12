'use client'

import {motion, AnimatePresence} from "framer-motion";
import {ShoppingCartIcon} from "@heroicons/react/24/outline";
import {useCartStore} from "@/store/cart.store";
import {useEffect, useState} from "react";
import {useCartStoreHydrate} from "@/store/useCartStoreHydrate";

const CartWidget = () => {
  const totalItems = useCartStore(state => state.totalItems);

  return (
    <button className="relative hover:opacity-50">
      <AnimatePresence>
        {(totalItems) ?
          <motion.div
            key={totalItems}
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
              {totalItems}
            </motion.p>
          </motion.div>
          :
          <div>
            <p></p>
          </div>
        }
        <ShoppingCartIcon key={`shopping-cart-icon`} className={`mt-0 h-6 w-6`}/>
      </AnimatePresence>
    </button>
  );
};

export default CartWidget;
