import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { GrInfo } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';

import useHeader from './Hooks/useHeader';
import { HeaderLeftBtnKindsOf, HeaderRightBtnKindsOf } from './types';

type HeaderReturn = () => React.ReactElement;
type LeftBtnComponentMapType = { [k in HeaderLeftBtnKindsOf]: JSX.Element };
type RightBtnComponentMapType = { [k in HeaderRightBtnKindsOf]: JSX.Element };

export const Header: HeaderReturn = () => {
  const { headerState } = useHeader();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const leftBtnComponentMap: LeftBtnComponentMapType = {
    empty: <div className="w-[1.5rem]"></div>,
    back: (
      <button className="flex items-center" onClick={handleGoBack}>
        <IoIosArrowBack size="24" />
      </button>
    ),
    menu: <div>메뉴</div>,
  };

  const rightBtnComponentMap: RightBtnComponentMapType = {
    empty: <div className="w-[1.5rem]"></div>,
    profile: <div>프로필</div>,
    alarm: (
      <button className="flex items-center">
        <GrInfo size="24" />
      </button>
    ),
    confirm: <div>확인</div>,
  };

  const LeftBtnComponent: () => JSX.Element = () => leftBtnComponentMap[headerState.leftBtn!];
  const RightBtnComponent: () => JSX.Element = () => rightBtnComponentMap[headerState.rightBtn!];

  return (
    <>
      {headerState.visible && (
        <>
          <div className="h-[54px]" />
          <header className="fixed flex justify-between items-center text-center top-0 px-2 py-3 w-full bg-white full:w-[25rem]">
            <LeftBtnComponent />
            <p>{headerState.headerTitle}</p>
            <RightBtnComponent />
          </header>
        </>
      )}
    </>
  );
};

export default Header;
