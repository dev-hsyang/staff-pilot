import React from 'react';

import useFooter from './Hooks/useFooter';

type FooterReturn = () => React.ReactElement;

export interface FooterStateKindsOf {
  visible: boolean;
}

export const Footer: FooterReturn = () => {
  const { footerState } = useFooter();

  return (
    <>
      {footerState.visible && (
        <>
          <div className="hidden h-[54px]" />
          <footer className="fixed bg-blue-500 bottom-0 px-2 py-4 w-full full:w-[25rem]">
            <span>푸터 영역</span>
          </footer>
        </>
      )}
    </>
  );
};

export default Footer;
