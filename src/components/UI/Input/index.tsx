'use client';

import {ChangeEvent} from "react";

type Props = {
  inputId: string,
  label: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  placeholder: string,
  value: string
};

const Input = ({inputId, label, onChange, placeholder, value}: Props) => {
  return (
    <div className={`mx-auto mt-2 max-w-lg flex flex-row gap-2 items-center justify-center`}>
      <label htmlFor={inputId}>{label}</label>
      <input
        className={`flex-1 px-2 py-1 rounded text-gray-950`}
        id={inputId}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
}

export default Input;
