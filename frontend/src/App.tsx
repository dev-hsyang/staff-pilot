import { Routes, Route, useLocation } from 'react-router-dom';
import axios from 'axios';

import NotFoundPage from '@/404';

import InitialPage from '@/Pages/Initial';
import SignupPage from '@/Pages/Signup';
import LoginPage from '@/Pages/Login';
import MainPage from '@/Pages/Main';
import WorkPlanPage from '@/Pages/workPlan';
import CommutePage from '@/Pages/commute';

import Footer from '@/Components/Footer';
import Header from '@/Components/Header';

axios.defaults.withCredentials = true;

function App() {
  const location = useLocation();

  return (
    <>
      <Header />

      <Routes location={location}>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<InitialPage />} />

        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/workplan" element={<WorkPlanPage />} />
        <Route path="/commute" element={<CommutePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
