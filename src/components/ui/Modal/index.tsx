'use client'

import {ReactNode} from "react";
import { motion } from "framer-motion";

type Props = {
  onClose: () => void
  children: ReactNode
}

const Modal = ({onClose, children}: Props) => {
  return (
    <>
        <motion.div
          key={'modal-backdrop'}
          initial={{
            opacity: 1
          }}
          animate={{
            opacity: 0.7
          }}
          transition={{duration: 1}}
          exit={{
            opacity: 0,
            transition: {duration: 0.3}
          }}
          className={`fixed top-0 z-[60] h-screen w-screen bg-gray-950`} onClick={() => onClose()}/>
        <motion.div
          key={'modal'}
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
          className={`z-[60] p-2 fixed top-1/4 left-2 right-2 max-w-md mx-auto bg-gray-50 grid place-content-center rounded`}
        >
          {children}
        </motion.div>
    </>
  )
}

export default Modal
