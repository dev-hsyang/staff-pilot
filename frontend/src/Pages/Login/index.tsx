import { FcGoogle } from 'react-icons/fc';
import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosResponse, AxiosError } from 'axios';

import useHeader from '@/Components/Header/Hooks/useHeader';
import Button from '@/Components/Button';
import Input from '@/Components/Input';
import useFooter from '@/Components/Footer/Hooks/useFooter';
import useToastMessage from '@/Components/Toast/Hooks/useToastMessage';

import doHashingData from '@/Utils/Libs/doHashingData';
import instance from '@/Utils/api';

import { LoginPageWrapper } from './style';

interface ILogin {
  username: string;
  password: string;
}

export default function LoginPage() {
  const { changeHeaderState } = useHeader();
  const { changeFooterState } = useFooter();
  const { openToastMessage } = useToastMessage();
  const navigate = useNavigate();
  const setAuth = (input: string) => {
    localStorage.setItem('auth', input);
  };

  const [loginInputData, setLoginInputData] = useState<ILogin>({
    username: '',
    password: '',
  });

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const isFocused = e.target.id;
    setLoginInputData({
      ...loginInputData,
      [`${isFocused}`]: e.target.value,
    });
  };

  const loginAPI = async () => {
    const { username, password } = loginInputData;
    // const hashedUsername = await doHashingData(username);

    if (username === 'media@ajou.ac.kr' && password === '1234') {
      setAuth('직원');
      openToastMessage('로그인에 성공하였습니다', 'success');
      navigate('/main');
    } else if (username === 'admin@ajou.ac.kr' && password === '1234') {
      setAuth('관리자');
      openToastMessage('로그인에 성공하였습니다', 'success');
      navigate('/main');
    } else {
      openToastMessage('로그인에 실패하였습니다', 'error');
    }

    // instance
    //   .post('login', {
    //     username,
    //     password,
    //   })
    //   .then(async (res: any) => {
    //     if (res.response) {
    //       const { message } = res.response.data;
    //       openToastMessage(message, 'error');
    //     } else {
    //       const { code, message } = res.data;
    //       openToastMessage(message, 'success');
    //       if (code === 200) {
    //         navigate('/main');
    //       }
    //     }
    //   })
    //   .catch((err: AxiosError) => {
    //     openToastMessage(err.message, 'error');
    //   });
  };

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
        <Input
          identity="username"
          label="이메일"
          placehd="이메일을 입력하세요"
          onChange={handleChangeInput}
        />
        <Input
          identity="password"
          isType="password"
          label="비밀번호"
          placehd="비밀번호를 입력하세요"
          onChange={handleChangeInput}
        />
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
