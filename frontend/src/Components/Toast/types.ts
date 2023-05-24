import React from 'react';

export type ToastTypes = 'error' | 'warn' | 'success';

export interface ToastStyleProps {
  type: ToastTypes;
}

export interface ToastProps extends ToastStyleProps {
  message: string;
  timeout?: number | 2000;
}

export type ToastPortalFunctionReturn = ({
  children,
}: {
  children: React.ReactNode;
}) => React.ReactPortal;
export type ToastFunctionReturn = () => React.ReactElement;
