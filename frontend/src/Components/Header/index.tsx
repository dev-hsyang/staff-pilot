import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

import useHeader from './Hooks/useHeader';

type HeaderReturn = () => React.ReactElement;

export const Header: HeaderReturn = () => {
  const { headerState } = useHeader();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      {headerState.visible && (
        <>
          <div className="h-[54px]" />
          <header className="fixed top-0 px-2 py-3 w-full bg-white full:w-[25rem]">
            {headerState.leftBtn === 'back' && (
              <button onClick={handleGoBack}>
                <IoIosArrowBack size="24" />
              </button>
            )}
          </header>
        </>
      )}
    </>
  );
};

export default Header;
