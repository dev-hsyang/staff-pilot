import { useRecoilState } from 'recoil';
import { useCallback } from 'react';

import { setToastState } from '@/Stores/toast';

import { ToastTypes } from '@/Components/Toast/types';

type UseToastMessageReturn = {
  openToastMessage: (message: string, type?: ToastTypes) => void;
  closeToastMessage: () => void;
};

export default function useToastMessage(timeout?: number): UseToastMessageReturn {
  const [toast, setToast] = useRecoilState(setToastState);

  const openToastMessage = useCallback(
    (message: string, type?: ToastTypes) => {
      setToast({ message, timeout: timeout ?? 2500, type: type ?? 'error' });
    },
    [toast.message, toast.type],
  );

  const closeToastMessage = () => {
    setToast({ ...toast, message: '' });
  };

  return { openToastMessage, closeToastMessage };
}
