import React, {
  useEffect,
  useCallback,
  useState,
  Context,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { GrInfo } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import { AiOutlineMenu, AiOutlinePlus } from 'react-icons/ai';

import useHeader from './Hooks/useHeader';
import { HeaderLeftBtnKindsOf, HeaderRightBtnKindsOf } from './types';
import LeftSideMenu from './Components/LeftSideMenu';

type HeaderReturn = () => React.ReactElement;
type LeftBtnComponentMapType = { [k in HeaderLeftBtnKindsOf]: JSX.Element };
type RightBtnComponentMapType = { [k in HeaderRightBtnKindsOf]: JSX.Element };

type LeftSideMenuContextType = {
  menuOpened: boolean;
  setMenuOpened: Dispatch<SetStateAction<boolean>>;
};

export const initLeftSideMenu: LeftSideMenuContextType = {
  menuOpened: false,
  setMenuOpened: () => {},
};

export const LeftSideMenuContext: Context<LeftSideMenuContextType> =
  createContext(initLeftSideMenu);

export const Header: HeaderReturn = () => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  const { headerState } = useHeader();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handlePlusMenu = () => {
    const currentPath = window.location.pathname;
    const newPath = currentPath.endsWith('/') ? `${currentPath}add` : `${currentPath}/add`;
    navigate(newPath);
  };

  const handleLeftSideMenu = () => {
    setMenuOpened(true);
  };

  useEffect(() => {
    setMenuOpened(false);
  }, [headerState]);

  const leftBtnComponentMap: LeftBtnComponentMapType = {
    empty: <div className="w-[1.5rem]"></div>,
    back: (
      <span className="cursor-pointer flex items-center" onClick={handleGoBack}>
        <IoIosArrowBack size="24" />
      </span>
    ),
    menu: (
      <span className="cursor-pointer flex items-center" onClick={handleLeftSideMenu}>
        <AiOutlineMenu size="20" />
      </span>
    ),
  };

  const rightBtnComponentMap: RightBtnComponentMapType = {
    empty: <div className="w-[1.5rem]"></div>,
    profile: <div>프로필</div>,
    alarm: (
      <span className="flex items-center">
        <GrInfo size="24" />
      </span>
    ),
    confirm: <div>확인</div>,
    plus: (
      <span className="cursor-pointer flex items-center" onClick={handlePlusMenu}>
        <AiOutlinePlus size="24" />
      </span>
    ),
  };

  const LeftBtnComponent: () => JSX.Element = useCallback(
    () => leftBtnComponentMap[headerState.leftBtn!],
    [headerState],
  );

  const RightBtnComponent: () => JSX.Element = useCallback(
    () => rightBtnComponentMap[headerState.rightBtn!],
    [headerState],
  );

  return (
    <>
      {headerState.visible && (
        <>
          <div className="h-[46px] bg-gray-100" />
          <header className="fixed flex justify-between items-center text-center top-0 px-2 py-3 w-full bg-white full:w-[25rem]">
            <LeftBtnComponent />
            <p>{headerState.headerTitle}</p>
            <RightBtnComponent />
          </header>
          {menuOpened && (
            <LeftSideMenuContext.Provider value={{ menuOpened, setMenuOpened }}>
              <LeftSideMenu />
            </LeftSideMenuContext.Provider>
          )}
        </>
      )}
    </>
  );
};

export default Header;
