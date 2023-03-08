import axios from 'axios';

import Button from '@/Components/Button';

import { SignupPageWrapper } from './style';

const test = axios.post(`${import.meta.env.VITE_APP_API}/api/account/register`, {
  email: 'rfv1479@ajou.ac.kr',
  password: '123',
  name: '양현승',
});

export default function SignupPage() {
  return (
    <SignupPageWrapper>
      <h1 className="font-bold mb-60">회원가입</h1>
      <div className="w-full flex flex-col gap-4">
        <div>ㅋㅋㅋ</div>
        <button onClick={() => test}>하이</button>
      </div>
    </SignupPageWrapper>
  );
}
