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
  const [heirarchy, dispatchHeirarchy] = useReducer(ButtonReducer, '');

  const commonStyle = 'w-full font-semibold px-10 py-3 shadow-md rounded-md';
  const toggleButtonDisabled = disabled ? 'opacity-25 cursor-not-allowed' : '';
  const toggleButtonAnimation = disabled
    ? 'hover:animate-none active:animate-none'
    : 'hover:animate-push active:animate-pull';

  const style = `${commonStyle} ${heirarchy} ${toggleButtonDisabled} ${toggleButtonAnimation}`;

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
