import { Routes, Route, useLocation } from 'react-router-dom';
import axios from 'axios';

import MainPage from '@/Pages/Main';
import SignupPage from '@/Pages/Signup';
import LoginPage from '@/Pages/Login';
import ErrorPage from '@/404';

axios.defaults.withCredentials = true;

function App() {
  const location = useLocation();

  return (
    <>
      <Routes location={location}>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
