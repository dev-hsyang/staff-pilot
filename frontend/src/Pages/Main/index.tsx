import { useEffect } from 'react';

import useHeader from '@/Components/Header/Hooks/useHeader';
import useFooter from '@/Components/Footer/Hooks/useFooter';

import { MainPageWrapper } from './style';

export default function MainPage() {
  const { changeHeaderState } = useHeader();
  const { changeFooterState } = useFooter();

  useEffect(() => {
    changeHeaderState({
      visible: true,
      leftBtn: 'back',
      rightBtn: 'empty',
      headerTitle: '메인 페이지',
    });
    changeFooterState({ visible: true });
  }, []);

  return (
    <MainPageWrapper>
      <h1 className="font-bold">메인 페이지 제목</h1>
      <div>메인 페이지 내용</div>
    </MainPageWrapper>
  );
}
