import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './Styles/index.css';
import './Styles/font.css';
import { RecoilRoot } from 'recoil';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')! as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <Suspense fallback={<>로딩 중...</>}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Suspense>
    </RecoilRoot>
  </React.StrictMode>,
);
