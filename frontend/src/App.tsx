import { Routes, Route, useLocation } from 'react-router-dom';
import axios from 'axios';

import NotFoundPage from '@/404';

import InitialPage from '@/Pages/Initial';
import SignupPage from '@/Pages/Signup';
import LoginPage from '@/Pages/Login';
import MainPage from '@/Pages/Main';
import WorkPlanPage from '@/Pages/workPlan';
import CommutePage from '@/Pages/commute';
import VacationPage from '@/Pages/vacation';
import AddVacationPage from '@/Pages/vacation/pages/addVacation';

import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import { ToastPortal } from '@/Components/Toast';
import ToastMessage from '@/Components/Toast/Toast';

axios.defaults.withCredentials = true;

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <ToastPortal>
        <ToastMessage />
      </ToastPortal>
      <Routes location={location}>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<InitialPage />} />

        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/workplan" element={<WorkPlanPage />} />
        <Route path="vacation">
          <Route path="" element={<VacationPage />} />
          <Route path="add" element={<AddVacationPage />} />
        </Route>

        <Route path="/commute" element={<CommutePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
