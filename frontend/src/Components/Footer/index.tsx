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
          <footer className="fixed shadow-[0_0px_30px_-10px_rgba(0,0,0,0.250)] bottom-0 px-2 py-4 w-full full:w-[25rem]">
            <div>버튼 영역</div>
          </footer>
        </>
      )}
    </>
  );
};

export default Footer;
