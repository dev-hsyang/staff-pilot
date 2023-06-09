import { atom, selector } from 'recoil';

type AuthT = '직원' | '관리자';

interface IUser {
  company: string;
  location: string;
}

const authState = atom<AuthT>({
  key: 'authState',
  default: '직원',
});

export const setAuthState = selector({
  key: 'setAuthState',
  get: ({ get }) => get(authState),
  set: ({ set }, newAuthState) => {
    set(authState, newAuthState as AuthT);
  },
});

const userDataState = atom<IUser>({
  key: 'userDataState',
  default: {
    company: '',
    location: '',
  },
});

export const setUserDataState = selector({
  key: 'setUserDataState',
  get: ({ get }) => get(userDataState),
  set: ({ set }, newUserDataState) => {
    set(userDataState, newUserDataState as IUser);
  },
});
