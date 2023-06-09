import { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@/Components/Button';
import Input from '@/Components/Input';

export default function InitialAdminPage() {
  const [InputData, setInputData] = useState<string>('');
  const [step, setStep] = useState<'company' | 'location'>('company');

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  const onSetCompanyName = () => {
    localStorage.setItem('company', InputData);
    setStep('location');
    setInputData('');
  };

  const onSetLocationName = () => {
    localStorage.setItem('location', InputData);
    localStorage.setItem('admin-login', 'initial');
    localStorage.setItem('auth', 'admin');
    window.location.reload();
  };

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
              visible={true}
              label="주소"
              placehd="경기도 수원시 영통구 월드컵로 206"
              identity="address"
            />
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
