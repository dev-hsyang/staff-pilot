import { useEffect } from 'react';

import useHeader from '@/Components/Header/Hooks/useHeader';
import useFooter from '@/Components/Footer/Hooks/useFooter';

import { WorkPlanPageWrapper } from './style';

export default function WorkPlanPage() {
  const { changeHeaderState } = useHeader();
  const { changeFooterState } = useFooter();

  useEffect(() => {
    changeHeaderState({
      visible: true,
      leftBtn: 'menu',
      rightBtn: 'empty',
      headerTitle: '근무일정 페이지',
    });
    changeFooterState({ visible: true, isSelected: 'workplan' });
  }, []);

  return (
    <WorkPlanPageWrapper>
      <div>근무일정 페이지 입니다</div>
    </WorkPlanPageWrapper>
  );
}
