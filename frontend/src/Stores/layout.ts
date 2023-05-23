import { atom, selector } from 'recoil';

import { HeaderStateKindsOf } from '@/Components/Header/types';
import { FooterStateKindsOf } from '@/Components/Footer';

export const isHeaderLayoutState = atom<HeaderStateKindsOf>({
  key: 'isHeaderLayoutState',
  default: {
    visible: true,
    leftBtn: 'empty',
    rightBtn: 'empty',
    headerTitle: '',
  },
});

export const isFooterLayoutState = atom<FooterStateKindsOf>({
  key: 'isFooterLayoutState',
  default: {
    visible: false,
    isSelected: 'home',
  },
});

export const setIsHeaderLayoutState = selector({
  key: 'setIsHeaderLayoutState',
  get: ({ get }) => get(isHeaderLayoutState),
  set: ({ set }, newHeaderLayoutState) => {
    set(isHeaderLayoutState, newHeaderLayoutState);
  },
});

export const setIsFooterLayoutState = selector({
  key: 'setIsFooterLayoutState',
  get: ({ get }) => get(isFooterLayoutState),
  set: ({ set }, newFooterLayoutState) => {
    set(isFooterLayoutState, newFooterLayoutState);
  },
});
