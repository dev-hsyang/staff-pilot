import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { setAuthState } from '@/Stores/auth';

import useHeader from '@/Components/Header/Hooks/useHeader';
import useFooter from '@/Components/Footer/Hooks/useFooter';
import useToastMessage from '@/Components/Toast/Hooks/useToastMessage';

import instance from '@/Utils/api';

import TodayDuty from './components/todayDuty';
import { MainPageWrapper } from './style';
import InitialAdminPage from './pages/admin';
import AuthMenu from './components/AuthMenu';

export default function MainPage() {
  const { changeHeaderState } = useHeader();
  const { changeFooterState } = useFooter();
  const auth = localStorage.getItem('auth');

  const checkInitialAdmin = auth === '관리자' && !localStorage.getItem('admin-login');

  useEffect(() => {
    if (checkInitialAdmin) {
      changeHeaderState({
        visible: true,
        leftBtn: 'back',
        rightBtn: 'empty',
        headerTitle: '정보 등록',
      });
      changeFooterState({ visible: false });
      return;
    }

    changeHeaderState({
      visible: true,
      leftBtn: 'menu',
      rightBtn: 'empty',
      headerTitle: `${
        localStorage.getItem('company') === null ? 'Staff-Pilot' : localStorage.getItem('company')
      }`,
    });
    changeFooterState({ visible: true, isSelected: 'home' });
  }, []);

  return (
    <>
      {checkInitialAdmin === true && <InitialAdminPage />}
      {checkInitialAdmin === false && (
        <MainPageWrapper>
          <TodayDuty />
          {auth === 'admin' && <AuthMenu />}
        </MainPageWrapper>
      )}
    </>
  );
}
