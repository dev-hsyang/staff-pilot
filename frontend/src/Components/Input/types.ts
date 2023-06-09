import { ChangeEvent } from 'react';

export interface InputProps {
  label: string;
  errorMsg?: string;
  placehd: HTMLInputElement['placeholder'];
  isType?: HTMLInputElement['type'];
  isError?: boolean;
  identity: string;
  visible?: boolean;

  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
