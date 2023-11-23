'use client';

import React from "react";

type Props = {
  children?: React.ReactNode;
  disabled?: boolean;
  handleClick: () => void;
};

const Button = ({children, handleClick, disabled = false}: Props) => {
  return (
    <button className={`bg-blue-900 disabled:bg-gray-500 px-4 py-2 text-white hover:opacity-90 disabled:hover:opacity-100`} onClick={handleClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
