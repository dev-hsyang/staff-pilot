import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { GrInfo } from 'react-icons/gr';
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
          <header className="fixed flex justify-between items-center text-center top-0 px-2 py-3 w-full bg-white full:w-[25rem]">
            <div>
              {headerState.leftBtn === 'empty' && <div className="w-[1.5rem]"></div>}
              {headerState.leftBtn === 'back' && (
                <button className="flex items-center" onClick={handleGoBack}>
                  <IoIosArrowBack size="24" />
                </button>
              )}
            </div>
            <p>{headerState.headerTitle}</p>
            <div>
              {headerState.rightBtn === 'empty' && <div className="w-[1.5rem]"></div>}
              {headerState.rightBtn === 'alarm' && (
                <button className="flex items-center">
                  <GrInfo size="24" />
                </button>
              )}
            </div>
          </header>
        </>
      )}
    </>
  );
};

export default Header;
