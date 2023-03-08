import Button from '@/Components/Button';
import Input from '@/Components/Input';

import { MainPageWrapper } from './style';

export default function MainPage() {
  return (
    <MainPageWrapper>
      <h1 className="font-bold">시프티에 오신 것을 환영합니다</h1>
      <div className="w-full flex flex-col gap-4">
        <div className="flex flex-col gap-4 w-full">
          <Button kind="a" href="login">
            로그인
          </Button>
          <Button kind="a" href="signup">
            회원가입
          </Button>
        </div>
        <span>&copy; faketee2022</span>
      </div>
    </MainPageWrapper>
  );
}
