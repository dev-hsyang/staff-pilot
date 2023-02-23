import React, { useReducer, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { ButtonProps } from './types';
import ButtonReducer from './reducer';

type ButtonReturn = (props: ButtonProps) => React.ReactElement;

export const Button: ButtonReturn = (props: ButtonProps) => {
  const { children, kind = 'button', href, type = 'button', step = 'first' } = props;
  const commonStyle =
    'hover:animate-push active:animate-pull w-full font-semibold px-10 py-3 shadow-md rounded-md';
  const [heirarchy, dispatchHeirarchy] = useReducer(ButtonReducer, '');
  const style = `${commonStyle} ${heirarchy}`;

  useEffect(() => {
    dispatchHeirarchy({ type: step });
  }, []);

  return (
    <>
      {kind === 'a' && (
        <Link className={style} to={href!}>
          {children}
        </Link>
      )}
      {kind === 'btn' && (
        <button className={style} type={type}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
