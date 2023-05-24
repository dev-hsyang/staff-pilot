import { useContext, useRef } from 'react';
import { AiOutlineRollback } from 'react-icons/ai';

import { LeftSideMenuContext } from '..';

export default function LeftSideMenu() {
  const { menuOpened, setMenuOpened } = useContext(LeftSideMenuContext);
  const dimArea = useRef<HTMLDivElement>(null);
  const menuArea = useRef<HTMLDivElement>(null);

  const closeMenu = () => {
    if (!menuArea.current || !dimArea.current) return;
    menuArea.current.style.transition = '0.55s';
    menuArea.current.style.transform = 'translateX(-100%)';
    menuArea.current.style.opacity = '0';

    dimArea.current.style.transition = '0.55s';
    dimArea.current.style.opacity = '0';

    setTimeout(() => {
      setMenuOpened(false);
    }, 550);
  };

  if (!menuOpened) {
    return <></>;
  }

  return (
    <>
      <div
        onClick={closeMenu}
        ref={dimArea}
        className="animation-fade-in fixed z-[10000] top-0 opacity-50 w-full full:w-[25rem] h-screen bg-gray-500"
      ></div>
      <div
        ref={menuArea}
        className="absolute animation-slide-in-right bg-white z-[10001] top-0 w-[17.5rem] h-screen"
      >
        <button className="absolute right-3 top-3" onClick={closeMenu}>
          <AiOutlineRollback size="24" />
        </button>
      </div>
    </>
  );
}
