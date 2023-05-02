import React, { useReducer, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { ButtonProps } from './types';
import ButtonReducer from './reducer';

type ButtonReturn = (props: ButtonProps) => React.ReactElement;

export const Button: ButtonReturn = (props: ButtonProps) => {
  const {
    disabled = false,
    onClick,
    children,
    kind = 'btn',
    href,
    type = 'button',
    step = 'first',
  } = props;
  const isDisabled = disabled
    ? 'opacity-25 cursor-not-allowed active:animate-none hover:animate-none'
    : '';
  const commonStyle =
    'hover:animate-push active:animate-pull w-full font-semibold px-10 py-3 shadow-md rounded-md';
  const [heirarchy, dispatchHeirarchy] = useReducer(ButtonReducer, '');
  const style = `${commonStyle} ${heirarchy} ${isDisabled}`;

  useEffect(() => {
    dispatchHeirarchy({ type: step });
  }, []);

  return (
    <>
      {kind === 'a' && (
        <Link className={style} to={disabled ? '' : href!}>
          {children}
        </Link>
      )}
      {kind === 'btn' && (
        <button disabled={disabled} className={style} type={type} onClick={onClick}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
