import React from 'react';

import { InputProps } from './types';

type InputReturn = (props: InputProps) => React.ReactElement;

export const Input: InputReturn = (props: InputProps) => {
  const {
    isError,
    identity = '',
    isType = '',
    label,
    errorMsg = '',
    placehd = '',
    visible = false,
    onChange,
  } = props;

  const errorStyle = `text-[14px] text-left ${isError ? 'text-red-500' : 'text-green-500'} pb-2`;

  return (
    <>
      <label className="text-[18px] font-bold" htmlFor={label}>
        {label}
      </label>
      <input
        disabled={visible}
        type={isType}
        className="border-2 rounded-md px-2 py-3 text-[15px]"
        placeholder={`${placehd}`}
        id={identity}
        onChange={onChange}
      />
      <p className={errorStyle}>{errorMsg}</p>
    </>
  );
};

export default Input;
