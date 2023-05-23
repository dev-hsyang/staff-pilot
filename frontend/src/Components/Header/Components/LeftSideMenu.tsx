import { useContext } from 'react';
import { AiOutlineRollback } from 'react-icons/ai';

import { LeftSideMenuContext } from '..';

export default function LeftSideMenu() {
  const { menuOpened, setMenuOpened } = useContext(LeftSideMenuContext);

  const closeMenu = () => {
    setMenuOpened(false);
  };

  if (!menuOpened) {
    return <></>;
  }

  return (
    <>
      <div
        onClick={closeMenu}
        className="fixed z-[10000] top-0 opacity-50 w-full full:w-[25rem] h-screen bg-gray-500"
      ></div>
      <div className="absolute bg-white z-[10001] top-0 w-[17.5rem] h-screen">
        <button className="absolute right-3 top-3" onClick={closeMenu}>
          <AiOutlineRollback size="24" />
        </button>
      </div>
    </>
  );
}
