import { useEffect } from 'react';
import { GiAirplaneDeparture } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';

import useHeader from '@/Components/Header/Hooks/useHeader';
import useFooter from '@/Components/Footer/Hooks/useFooter';

import { WorkPlanPageWrapper } from './style';

export default function VacationPage() {
  const { changeHeaderState } = useHeader();
  const { changeFooterState } = useFooter();

  useEffect(() => {
    changeHeaderState({
      visible: true,
      leftBtn: 'menu',
      rightBtn: 'plus',
      headerTitle: `${
        localStorage.getItem('company') === null ? 'Staff-Pilot' : localStorage.getItem('company')
      }`,
    });
    changeFooterState({ visible: true, isSelected: 'vacation' });
  }, []);

  return (
    <WorkPlanPageWrapper>
      <div className="space-y-1 text-center items-center flex flex-col">
        <GiAirplaneDeparture
          onClick={() => window.location.replace('/vacation/add')}
          className="mb-3 text-gray-500"
          size="3rem"
        />
        <h3 className="text-gray-500">휴가가 없습니다</h3>
        <p className="text-gray-500">간편한 휴가 신청 및 관리 프로세스를 경험하세요.</p>
      </div>
    </WorkPlanPageWrapper>
  );
}
