import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';

import { HeaderProps } from './types';

type HeaderReturn = (props: HeaderProps) => React.ReactElement;

export const Header: HeaderReturn = (props: HeaderProps) => {
  const { isVisible = true, leftBtn = 'empty', rightBtn = 'empty', headerTitle = '' } = props;

  return (
    <>
      {isVisible && (
        <>
          <div className="h-[46px]" />
          <header className="fixed top-0 px-2 py-3 w-full bg-white full:w-[25rem]">
            <IoIosArrowBack size="24" />
          </header>
        </>
      )}
    </>
  );
};

export default Header;
