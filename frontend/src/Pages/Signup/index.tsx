import axios from 'axios';
import { useEffect } from 'react';

import useHeader from '@/Components/Header/Hooks/useHeader';
import Button from '@/Components/Button';
import Input from '@/Components/Input';
import useFooter from '@/Components/Footer/Hooks/useFooter';

import { SignupPageWrapper } from './style';

const onDoubleCheckBtn = () => {
  axios
    .post(`${import.meta.env.VITE_APP_API}/api/account/register`, {
      email: 'rfv1479@ajou.ac.kr',
      password: '123',
      name: '양현승',
    })
    .then((res) => {
      alert('성공!');
    })
    .catch((err) => {
      alert('안돼!');
    });
};

export default function SignupPage() {
  const { changeHeaderState } = useHeader();
  const { changeFooterState } = useFooter();

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
        <Input label="이메일" placeholder="이메일을 입력하세요" errorMsg="에러 메세지 입니다" />
        <Button
          onClick={() => {
            alert('중복 확인');
          }}
          kind="btn"
          step="second"
        >
          중복 확인
        </Button>
        <span className="my-5" />
        <Input label="비밀번호" placeholder="비밀번호를 입력하세요" />
        <Input label="비밀번호 확인" placeholder="비밀번호를 다시 입력하세요" />
        <Input label="이름" placeholder="이름을 입력하세요" />
      </form>
      <Button kind="btn" type="submit">
        회원가입
      </Button>
    </SignupPageWrapper>
  );
}
