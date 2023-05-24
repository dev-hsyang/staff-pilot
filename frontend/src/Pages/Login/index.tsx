import { FcGoogle } from 'react-icons/fc';
import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useHeader from '@/Components/Header/Hooks/useHeader';
import Button from '@/Components/Button';
import Input from '@/Components/Input';
import useFooter from '@/Components/Footer/Hooks/useFooter';
import useToastMessage from '@/Components/Toast/Hooks/useToastMessage';

import instance from '@/Utils/api';

import { LoginPageWrapper } from './style';

interface ILogin {
  이메일: string;
  비밀번호: string;
}

export default function LoginPage() {
  const { changeHeaderState } = useHeader();
  const { changeFooterState } = useFooter();
  const { openToastMessage } = useToastMessage();
  const navigate = useNavigate();

  const [loginInputData, setLoginInputData] = useState<ILogin>({
    이메일: '',
    비밀번호: '',
  });

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const isFocused = e.target.id;
    setLoginInputData({
      ...loginInputData,
      [`${isFocused}`]: e.target.value,
    });
  };

  const loginAPI = () =>
    instance
      .post('login', { username: loginInputData.이메일, password: loginInputData.비밀번호 })
      .then((res) => {
        openToastMessage(res.data.split('"')[25], 'error');
      });

  useEffect(() => {
    changeHeaderState({
      visible: true,
      leftBtn: 'back',
    });
    changeFooterState({ visible: false });
  }, []);

  return (
    <LoginPageWrapper>
      <h1 className="font-bold">로그인</h1>
      <form method="post" className="w-full flex flex-col gap-2 text-left">
        <Input label="이메일" placehd="이메일을 입력하세요" onChange={handleChangeInput} />
        <Input label="비밀번호" placehd="비밀번호를 입력하세요" onChange={handleChangeInput} />
      </form>
      <div className="flex flex-col gap-4 w-full">
        <Button kind="btn" type="submit" onClick={loginAPI}>
          로그인
        </Button>
        <Button kind="a" href="google" step="second">
          <span className="flex items-center justify-center gap-3">
            <FcGoogle size="18" />
            <p>구글 계정으로 로그인</p>
          </span>
        </Button>
      </div>
    </LoginPageWrapper>
  );
}
