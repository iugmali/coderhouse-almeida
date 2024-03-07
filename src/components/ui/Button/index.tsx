'use client'

import {HTMLMotionProps, motion} from "framer-motion";
import {ReactNode} from "react";
import {twMerge} from "tailwind-merge";
import Link from "next/link";

type ButtonProps = HTMLMotionProps<"button"> & {
  children: ReactNode;
  className?: string;
  handleClick?: () => void;
};

const Button = ({children, handleClick, disabled = false, className = '', ...rest}: ButtonProps) => {
  return (
    <motion.button
      initial={{
        opacity: 0,
        scale: 0
      }}
      animate={{
        opacity: 1,
        scale: [1.1, 1]
      }}
      transition={{
        stiffness: 400
      }}
      whileTap={{
        scale: disabled ? 1 : 0.95
      }}
      whileHover={{
        scale: disabled ? 1 : 1.05,
        transition: {
          type: disabled ? 'tween' : 'spring'
        }
      }}
      {...rest}
      className={twMerge(`rounded bg-blue-900 disabled:bg-gray-500 px-4 py-2 text-white hover:opacity-90 active:opacity-70 disabled:hover:opacity-100`, className)}
      onClick={handleClick}
    >
      {children}
    </motion.button>
  );
}

export const TextButton = ({children, handleClick, disabled = false, className = '', ...rest}: ButtonProps) => {
  return (
    <motion.button
      initial={{
        opacity: 0,
        scale: 0
      }}
      animate={{
        opacity: 1,
        scale: [1.1, 1]
      }}
      transition={{
        stiffness: 400
      }}
      whileTap={{
        scale: disabled ? 1 : 0.95
      }}
      {...rest}
      className={twMerge(`rounded bg-gray-50 disabled:bg-gray-500 px-4 py-2 text-gray-950 disabled:hover:opacity-100`, className)} onClick={handleClick} disabled={disabled}>
      {children}
    </motion.button>
  );
}

type LinkButtonProps = {
  children: ReactNode
  href: string
  className: string
}

export const LinkButton = ({children, href, className = ''}: LinkButtonProps) => {
  return <Link scroll={false} href={href}><TextButton className={twMerge(`rounded-3xl border border-gray-950`, className)}>{children}</TextButton></Link>
}

export default Button;
