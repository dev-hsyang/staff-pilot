import { atom, selector } from 'recoil';

import { HeaderProps } from '@/Components/Header/types';

export const isHeaderLayoutState = atom<HeaderProps>({
  key: 'isHeaderLayoutState',
  default: {
    visible: true,
    leftBtn: 'empty',
    rightBtn: 'empty',
    headerTitle: '',
  },
});

export const setIsHeaderLayoutState = selector({
  key: 'setIsHeaderLayoutState',
  get: ({ get }) => get(isHeaderLayoutState),
  set: ({ set }, newHeaderLayoutState) => {
    set(isHeaderLayoutState, newHeaderLayoutState);
  },
});
