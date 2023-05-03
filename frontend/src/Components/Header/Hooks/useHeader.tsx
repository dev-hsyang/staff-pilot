import { useRecoilState, useRecoilCallback } from 'recoil';

import { setIsHeaderLayoutState } from '@/Stores/layout';

import { HeaderProps } from '../types';

export default function useHeader() {
  const [headerState, setHeaderState] = useRecoilState(setIsHeaderLayoutState);

  const changeHeaderState = useRecoilCallback(
    () => (props: HeaderProps) => {
      const { visible, leftBtn, rightBtn, headerTitle } = props;

      setHeaderState({
        ...headerState,
        visible,
        leftBtn,
        rightBtn,
        headerTitle,
      });
    },
    [headerState],
  );

  return { headerState, changeHeaderState };
}
