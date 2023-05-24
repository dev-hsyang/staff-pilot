import { useRecoilState, useRecoilCallback } from 'recoil';

import { setIsHeaderLayoutState } from '@/Stores/layout';

import { HeaderStateKindsOf } from '../types';

export default function useHeader() {
  const [headerState, setHeaderState] = useRecoilState(setIsHeaderLayoutState);

  const changeHeaderState = useRecoilCallback(
    () => (props: HeaderStateKindsOf) => {
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
