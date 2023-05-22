import { useRecoilState, useRecoilCallback } from 'recoil';

import { setIsFooterLayoutState } from '@/Stores/layout';

import { FooterStateKindsOf } from '..';

export default function useFooter() {
  const [footerState, setFooterState] = useRecoilState(setIsFooterLayoutState);

  const changeFooterState = useRecoilCallback(
    () => (props: FooterStateKindsOf) => {
      const { visible } = props;

      setFooterState({
        ...footerState,
        visible,
      });
    },
    [footerState],
  );

  return { footerState, changeFooterState };
}
