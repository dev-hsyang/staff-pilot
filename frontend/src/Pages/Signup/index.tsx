import { resolveSoa } from 'dns';

import { AxiosResponse, AxiosError } from 'axios';
import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useHeader from '@/Components/Header/Hooks/useHeader';
import Button from '@/Components/Button';
import Input from '@/Components/Input';
import useFooter from '@/Components/Footer/Hooks/useFooter';
import useToastMessage from '@/Components/Toast/Hooks/useToastMessage';

import instance from '@/Utils/api';
import doHashingData from '@/Utils/Libs/doHashingData';

import { SignupPageWrapper } from './style';

interface ISignup {
  name: string;
  email: string;
  password: string;
  checkpassword: string;
}

export default function SignupPage() {
  const { changeHeaderState } = useHeader();
  const { changeFooterState } = useFooter();
  const { openToastMessage } = useToastMessage();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState<string>('');
  const [checkEmailState, setCheckEmailState] = useState<boolean>(true);
  const [confirmEmailCondition, setConfimEmailCondition] = useState<boolean>(true);
  const [signupInputData, setSignupInputData] = useState<ISignup>({
    name: '',
    email: '',
    password: '',
    checkpassword: '',
  });

  const checkEmailAPI = async () => {
    const { email } = signupInputData;

    // instance.get(`api/v2/account/duplicate?email=${email}`).then((res: any) => {
    //   const { message } = res.data;

    if (email === 'media@ajou.ac.kr') {
      setErrorMessage('중복된 이메일입니다');
      setCheckEmailState(true);
      setConfimEmailCondition(true);
    } else {
      setErrorMessage('사용이 가능한 이메일입니다');
      setCheckEmailState(false);
      setConfimEmailCondition(false);
    }
  };

  const signupAPI = async () => {
    const { email, name, password } = signupInputData;

    instance
      .post('api/v2/account/register', {
        email,
        name,
        password,
      })
      .then((res: any) => {
        if (res.response) {
          const { message } = res.response.data;
          openToastMessage(message, 'error');
        } else {
          const { code, message } = res.data;
          openToastMessage(message, 'success');
          if (code === 200) navigate('/login');
        }
      })
      .catch((err: AxiosError) => {
        openToastMessage(err.message, 'error');
      });
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const isFocused = e.target.id;
    setSignupInputData({
      ...signupInputData,
      [`${isFocused}`]: e.target.value,
    });
  };

  useEffect(() => {
    changeHeaderState({
      visible: true,
      leftBtn: 'back',
    });
    changeFooterState({ visible: false });
  }, []);

  return (
    <SignupPageWrapper>
      <h1 className="font-bold">회원가입</h1>
      <form method="post" className="w-full flex flex-col gap-2 text-left">
        <Input
          identity="email"
          label="이메일"
          placehd="이메일을 입력하세요"
          isError={checkEmailState}
          errorMsg={errorMessage}
          onChange={handleChangeInput}
        />
        {checkEmailState && (
          <>
            <Button step="second" disabled={!checkEmailState} onClick={checkEmailAPI} kind="btn">
              중복 확인
            </Button>
            <span className="my-5" />
          </>
        )}
        <Input
          identity="password"
          label="비밀번호"
          placehd="비밀번호를 입력하세요"
          onChange={handleChangeInput}
        />
        <Input
          identity="checkpassword"
          label="비밀번호 확인"
          placehd="비밀번호를 다시 입력하세요"
          onChange={handleChangeInput}
        />
        <Input
          identity="name"
          label="이름"
          placehd="이름을 입력하세요"
          onChange={handleChangeInput}
        />
      </form>
      <Button disabled={confirmEmailCondition} kind="btn" type="submit" onClick={signupAPI}>
        회원가입
      </Button>
    </SignupPageWrapper>
  );
}
