import Button from '@/Components/Button';

import { MainPageWrapper } from './style';

export default function MainPage() {
  return (
    <MainPageWrapper>
      <h1 className="font-bold">시프티에 오신 것을 환영합니다</h1>
      <Button kind="a">하이</Button>
      <div>
        <a href="/account/register-form">
          <button type="button">가입하기</button>
        </a>
        <a href="/account/login-form">
          <button type="button">로그인하기</button>
        </a>
        <caption>&copy; faketee2022</caption>
      </div>
    </MainPageWrapper>
  );
}
