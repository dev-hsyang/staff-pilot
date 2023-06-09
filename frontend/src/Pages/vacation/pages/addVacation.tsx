import { useEffect } from 'react';
import { GiAirplaneDeparture } from 'react-icons/gi';

import useHeader from '@/Components/Header/Hooks/useHeader';
import useFooter from '@/Components/Footer/Hooks/useFooter';
import Input from '@/Components/Input';
import Button from '@/Components/Button';

export default function AddVacationPage() {
  const { changeHeaderState } = useHeader();
  const { changeFooterState } = useFooter();

  useEffect(() => {
    changeHeaderState({
      visible: true,
      leftBtn: 'back',
      rightBtn: 'empty',
    });
    changeFooterState({ visible: false, isSelected: 'vacation' });
  }, []);

  return (
    <>
      <section className="p-6 pt-10 space-y-16">
        <form className="flex flex-col gap-2 justify-between">
          <Input label="회사명" placehd="회사명을 입력해주세요" identity="company" />
          <Button>등록</Button>
        </form>
      </section>
    </>
  );
}
