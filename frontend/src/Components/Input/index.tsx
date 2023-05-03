import React from 'react';

import { InputProps } from './types';

type InputReturn = (props: InputProps) => React.ReactElement;

export const Input: InputReturn = (props: InputProps) => {
  const { label, message = '', placeholder = '' } = props;

  return (
    <>
      <label className="text-[18px] font-bold" htmlFor={label}>
        {label}
      </label>
      <input
        className="border-2 rounded-md px-2 py-3 text-[15px]"
        placeholder={`${placeholder}`}
        id={label}
      />
      <p className="text-[14px] text-red-500 pb-2">{message}</p>
    </>
  );
};

export default Input;
