import Button from '@/Components/Button';
import Input from '@/Components/Input';

import { LoginPageWrapper } from './style';

export default function LoginPage() {
  return (
    <LoginPageWrapper>
      <h1 className="font-bold">로그인</h1>
      <form method="post" className="w-full flex flex-col gap-2 text-left">
        <Input label="이메일" placeholder="이메일을 입력하세요" />
        <Input label="비밀번호" placeholder="비밀번호를 입력하세요" />
      </form>
      <Button kind="btn" type="submit">
        로그인
      </Button>
    </LoginPageWrapper>
  );
}
