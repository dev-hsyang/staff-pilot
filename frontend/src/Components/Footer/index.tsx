import React from 'react';

import { FooterProps } from './types';

type FooterReturn = (props: FooterProps) => React.ReactElement;

export const Footer: FooterReturn = (props: FooterProps) => (
  <>
    <div className="hidden h-[54px]" />
    <footer className="hidden fixed bg-blue-500 bottom-0 px-2 py-4 w-full full:w-[25rem]">
      <span>푸터 영역</span>
    </footer>
  </>
);

export default Footer;
