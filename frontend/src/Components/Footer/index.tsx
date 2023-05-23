import React, { useEffect } from 'react';
import { AiFillHome, AiFillClockCircle } from 'react-icons/ai';
import { BsFillCalendarEventFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import useFooter from './Hooks/useFooter';
import { FooterBtnWrapper } from './style';

type FooterReturn = () => React.ReactElement;
type FooterBtnKindsOf = 'home' | 'workplan' | 'commute';
type FooterBtnComponentMapType = { [k in FooterBtnKindsOf]: JSX.Element };

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
  const navigate = useNavigate();

  const footerVisible = footerState.visible;

  if (!footerVisible) {
    return <></>;
  }

  const FooterBtnComponentMap: FooterBtnComponentMapType = {
    home: (
      <FooterBtnWrapper
        onClick={() => navigate('main')}
        select={footerState.isSelected! === 'home'}
      >
        <AiFillHome size="24" />
        <p>홈</p>
      </FooterBtnWrapper>
    ),
    workplan: (
      <FooterBtnWrapper
        onClick={() => navigate('workplan')}
        select={footerState.isSelected! === 'workplan'}
      >
        <BsFillCalendarEventFill className="pt-[0.055rem]" size="21" />
        <p>근무일정</p>
      </FooterBtnWrapper>
    ),
    commute: (
      <FooterBtnWrapper
        onClick={() => navigate('commute')}
        select={footerState.isSelected! === 'commute'}
      >
        <AiFillClockCircle size="23" />
        <p>출퇴근기록</p>
      </FooterBtnWrapper>
    ),
  };

  const FooterBtnComponent: ({ type }: { type: FooterBtnKindsOf }) => JSX.Element = ({ type }) =>
    FooterBtnComponentMap[type];

  return (
    <>
      <div className="hidden h-[54px]" />
      <footer className="fixed flex items-center align-middle justify-around shadow-[0_0px_30px_-10px_rgba(0,0,0,0.250)] bottom-0 px-2 py-2 w-full full:w-[25rem]">
        <FooterBtnComponent type="home" />
        <FooterBtnComponent type="workplan" />
        <FooterBtnComponent type="commute" />
      </footer>
    </>
  );
};

export default Footer;
