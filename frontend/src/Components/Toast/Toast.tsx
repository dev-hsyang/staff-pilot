import { Icon } from '@iconify/react';
import { useRecoilValue } from 'recoil';
import { useState, useCallback, useEffect, useRef } from 'react';

import { setToastState } from '@/Stores/toast';
import { toastConfig } from '@/Stores/config';

import useToastMessage from './Hooks/useToastMessage';
import { ToastFunctionReturn } from './types';
import { ToastContainer } from './style';

export const ToastMessage: ToastFunctionReturn = () => {
  const { closeToastMessage } = useToastMessage();
  const toast = useRecoilValue(setToastState);
  const toastId = useRef<null | ReturnType<typeof setTimeout>>(null);
  const [animationState, setAnimationState] = useState<string>('fadeIn');
  const isType = toastConfig.filter((e) => e.type === toast.type);

  const removeToast = useCallback(() => {
    if (toastId.current) clearTimeout(toastId.current);
    setAnimationState('fadeOut');
    setTimeout(() => {
      closeToastMessage();
      setAnimationState('fadeIn');
    }, 350);
  }, [toast.message, toast.type]);

  useEffect(() => {
    if (toast.message === '') return;
    if (toastId.current) clearTimeout(toastId.current);

    toastId.current = setTimeout(() => {
      removeToast();
    }, toast.timeout);
  }, [toast.message]);

  return (
    <>
      {toast.message && (
        <ToastContainer
          onClick={() => removeToast()}
          animation={animationState}
          color={isType[0].color}
        >
          <Icon icon={isType[0].icon} width="36" height="36" color={isType[0].color} />
          <p className="text-sm text-left text-black">{toast.message}</p>
        </ToastContainer>
      )}
    </>
  );
};

export default ToastMessage;
