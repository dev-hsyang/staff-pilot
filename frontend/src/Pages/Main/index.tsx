import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { setAuthState } from '@/Stores/auth';

import useHeader from '@/Components/Header/Hooks/useHeader';
import useFooter from '@/Components/Footer/Hooks/useFooter';
import useToastMessage from '@/Components/Toast/Hooks/useToastMessage';

import instance from '@/Utils/api';

import { MainPageWrapper } from './style';
import InitialAdminPage from './pages/admin';

export default function MainPage() {
  const { changeHeaderState } = useHeader();
  const { changeFooterState } = useFooter();
  const { openToastMessage } = useToastMessage();
  const [auth, setAuth] = useRecoilState(setAuthState);

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
      headerTitle: 'Staff-Pilot',
    });
    changeFooterState({ visible: true, isSelected: 'home' });
  }, []);

  return (
    <>
      {checkInitialAdmin === true && <InitialAdminPage />}
      {checkInitialAdmin === false && (
        <MainPageWrapper>
          <h1 className="font-bold">메인 페이지 제목</h1>
          <div>메인 페이지 내용</div>
        </MainPageWrapper>
      )}
    </>
  );
}
