'use client';

import { motion } from "framer-motion";
import React from "react";
import {twMerge} from "tailwind-merge";

type Props = {
  children?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  title?: string;
  handleClick: () => void;
};

const Button = ({children, handleClick, disabled = false, className = '', title}: Props) => {
  return (
    <motion.button
      whileTap={{scale: 0.95}}
      title={title}
      className={twMerge(`rounded bg-blue-900 disabled:bg-gray-500 px-4 py-2 text-white hover:opacity-90 active:opacity-70 disabled:hover:opacity-100`, className)} onClick={handleClick} disabled={disabled}>
      {children}
    </motion.button>
  );
}

export default Button;
