import ReactDOM from 'react-dom';

import { ToastPortalFunctionReturn } from './types';

const ToastPortal: ToastPortalFunctionReturn = ({ children }) => {
  const toastId = document.getElementById('toast');

  return ReactDOM.createPortal(children, toastId!);
};

export default ToastPortal;
