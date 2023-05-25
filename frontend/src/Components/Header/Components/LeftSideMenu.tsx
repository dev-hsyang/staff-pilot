import { useContext, useRef } from 'react';
import { AiOutlineRollback } from 'react-icons/ai';

import { LeftSideMenuContext } from '..';

export default function LeftSideMenu() {
  const { menuOpened, setMenuOpened } = useContext(LeftSideMenuContext);
  const dimArea = useRef<null | HTMLDivElement>(null);
  const menuArea = useRef<null | HTMLDivElement>(null);

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
        <button className="absolute right-6 top-6" onClick={closeMenu}>
          <AiOutlineRollback size="24" />
        </button>
        <section className="px-6 py-4 bg-gray-100">
          <div className="block space-y-1">
            <span className="space-x-2 block">
              <h3 className="inline-block font-bold">송재한</h3>
              <p className="inline-block">최고 관리자</p>
            </span>
            <span className="block">
              <p className="inline-block border-r-2 pr-2 border-right">내 계정</p>
              <p className="pl-2 inline-block">내 계정</p>
            </span>
          </div>
        </section>
        <section className="px-6 py-6 text-left block space-y-2">
          <p className="font-semibold">시프티컴퍼니</p>
          <div className="bock space-y-3">
            <div className="flex items-center gap-2 justify-left">
              <span>icon</span>
              <p>회사 방침</p>
            </div>
            <div className="flex items-center gap-2 justify-left">
              <span>icon</span>
              <p>회사 방침</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
