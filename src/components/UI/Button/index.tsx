'use client';

import React from "react";

type Props = {
  children: React.ReactNode,
  handleClick: () => void,
};

const Button = ({children, handleClick}: Props) => {
  return (
    <button className={`bg-blue-900 px-4 py-2 text-white hover:opacity-90`} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
