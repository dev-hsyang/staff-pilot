import { useRecoilState } from 'recoil';
import { useState, useEffect, ChangeEvent } from 'react';

import { setUserDataState } from '@/Stores/auth';

import useHeader from '@/Components/Header/Hooks/useHeader';
import Button from '@/Components/Button';
import Input from '@/Components/Input';
import useFooter from '@/Components/Footer/Hooks/useFooter';
import useToastMessage from '@/Components/Toast/Hooks/useToastMessage';

export default function InitialAdminPage() {
  const [userData, setUserData] = useRecoilState(setUserDataState);
  const { changeHeaderState } = useHeader();
  const { changeFooterState } = useFooter();
  const { openToastMessage } = useToastMessage();
  const [InputData, setInputData] = useState<string>('');
  const [step, setStep] = useState<'company' | 'location'>('company');

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  const onSetCompanyName = () => {
    setUserData({
      ...userData,
      company: InputData,
    });
    setStep('location');
    setInputData('');
  };

  const onSetLocationName = () => {
    setUserData({
      ...userData,
      location: InputData,
    });
    localStorage.setItem('admin-login', 'initial');
  };

  useEffect(() => {
    if (localStorage.getItem('admin-login') === 'initial') {
      openToastMessage('회사 등록이 완료되었습니다', 'success');
      changeHeaderState({
        visible: true,
        leftBtn: 'menu',
        rightBtn: 'empty',
        headerTitle: 'Staff-Pilot',
      });
      changeFooterState({ visible: true, isSelected: 'home' });
    }
  }, [localStorage.getItem('admin-login')]);

  return (
    <section className="p-6 pt-10 space-y-16">
      {step === 'company' && (
        <>
          <div className="w-full bg-gray-100 h-[.35rem] rounded-md">
            <div className="w-1/2 bg-primary-main h-[.35rem] rounded-md" />
          </div>
          <form className="flex flex-col gap-2 justify-between">
            <Input
              label="회사명"
              placehd="회사명을 입력해주세요"
              identity="company"
              onChange={handleChangeInput}
            />
            <Button disabled={InputData === ''} onClick={onSetCompanyName}>
              등록
            </Button>
          </form>
        </>
      )}
      {step === 'location' && (
        <>
          <div className="w-full bg-gray-100 h-[.35rem] rounded-md">
            <div className="w-full bg-primary-main h-[.35rem] rounded-md" />
          </div>
          <form className="flex flex-col gap-2 justify-between">
            <div className="pb-10 rounded-md">
              <img className="rounded-md" src="test.webp" />
            </div>
            <Input
              label="출퇴근 장소"
              placehd="출퇴근 장소를 입력해주세요"
              identity="location"
              onChange={handleChangeInput}
            />
            <Button disabled={InputData === ''} onClick={onSetLocationName}>
              등록
            </Button>
          </form>
        </>
      )}
    </section>
  );
}
