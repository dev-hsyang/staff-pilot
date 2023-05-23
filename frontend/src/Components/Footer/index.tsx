import React from 'react';
import { AiFillHome, AiFillClockCircle } from 'react-icons/ai';
import { BsFillCalendarEventFill } from 'react-icons/bs';

import useFooter from './Hooks/useFooter';

type FooterReturn = () => React.ReactElement;
type FooterBtnKindsOf = 'home' | 'work' | 'commute';

export type FooterStateKindsOf =
  | {
      visible: boolean;
      isSelected: FooterBtnKindsOf;
    }
  | {
      visible: boolean;
      isSelected?: FooterBtnKindsOf;
    };

export const Footer: FooterReturn = () => {
  const { footerState } = useFooter();

  return (
    <>
      {footerState.visible && (
        <>
          <div className="hidden h-[54px]" />
          <footer className="fixed flex items-center align-middle justify-around shadow-[0_0px_30px_-10px_rgba(0,0,0,0.250)] bottom-0 px-2 py-2 w-full full:w-[25rem]">
            <div className="text-center flex flex-col h-[3rem] w-[5rem] justify-between items-center">
              <AiFillHome size="24" />
              <p>홈</p>
            </div>
            <div className="text-center flex flex-col justify-between w-[5rem] h-[3rem] items-center">
              <BsFillCalendarEventFill className="pt-[0.055rem]" size="21" />
              <p>근무일정</p>
            </div>
            <div className="text-center flex flex-col justify-between h-[3rem] w-[5rem] items-center">
              <AiFillClockCircle size="23" />
              <p>출퇴근기록</p>
            </div>
          </footer>
        </>
      )}
    </>
  );
};

export default Footer;
