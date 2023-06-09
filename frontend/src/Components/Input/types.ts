import { ChangeEvent } from 'react';

export interface InputProps {
  label: string;
  errorMsg?: string;
  placehd: HTMLInputElement['placeholder'];
  isType?: HTMLInputElement['type'];
  isError?: boolean;
  identity: string;

  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
