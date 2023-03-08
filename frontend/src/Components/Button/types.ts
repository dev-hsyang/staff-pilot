import React from 'react';

type ButtonKindsOf = 'a' | 'btn';
type ButtonType = 'button' | 'submit' | 'reset';
export type ButtonHierarchy = 'first' | 'second' | 'third' | 'fourth' | 'fifth';

export interface ButtonProps {
  children: React.ReactNode;
  kind?: ButtonKindsOf;
  href?: string;
  type?: ButtonType;
  step?: ButtonHierarchy;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
