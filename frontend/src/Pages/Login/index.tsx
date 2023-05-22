import { FcGoogle } from 'react-icons/fc';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useHeader from '@/Components/Header/Hooks/useHeader';
import Button from '@/Components/Button';
import Input from '@/Components/Input';
import useFooter from '@/Components/Footer/Hooks/useFooter';

import { LoginPageWrapper } from './style';

export default function LoginPage() {
  const { changeHeaderState } = useHeader();
  const { changeFooterState } = useFooter();
  const navigate = useNavigate();

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
        <Input label="이메일" placeholder="이메일을 입력하세요" />
        <Input label="비밀번호" placeholder="비밀번호를 입력하세요" />
      </form>
      <div className="flex flex-col gap-4 w-full">
        <Button kind="btn" type="submit" onClick={() => navigate('/main')}>
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