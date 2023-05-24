import React from 'react';

import { InputProps } from './types';

type InputReturn = (props: InputProps) => React.ReactElement;

export const Input: InputReturn = (props: InputProps) => {
  const { label, errorMsg = '', placehd = '', onChange } = props;

  return (
    <>
      <label className="text-[18px] font-bold" htmlFor={label}>
        {label}
      </label>
      <input
        className="border-2 rounded-md px-2 py-3 text-[15px]"
        placeholder={`${placehd}`}
        id={label}
        onChange={onChange}
        {...props}
      />
      <p className="text-[14px] text-red-500 pb-2">{errorMsg}</p>
    </>
  );
};

export default Input;
