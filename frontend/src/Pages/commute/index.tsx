import { useEffect } from 'react';

import useHeader from '@/Components/Header/Hooks/useHeader';
import useFooter from '@/Components/Footer/Hooks/useFooter';

export default function CommutePage() {
  const { changeHeaderState } = useHeader();
  const { changeFooterState } = useFooter();

  useEffect(() => {
    changeHeaderState({
      visible: true,
      leftBtn: 'empty',
      rightBtn: 'empty',
      headerTitle: '출퇴근기록 페이지',
    });
    changeFooterState({ visible: true, isSelected: 'commute' });
  }, []);

  return (
    <>
      <div>출퇴근기록 페이지 입니다</div>
    </>
  );
}
