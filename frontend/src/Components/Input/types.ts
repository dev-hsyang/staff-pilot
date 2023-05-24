import { ChangeEvent } from 'react';

export interface InputProps {
  label: string;
  errorMsg?: string;
  placehd: string;

  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
