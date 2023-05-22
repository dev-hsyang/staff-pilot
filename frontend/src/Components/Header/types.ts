export type HeaderLeftBtnKindsOf = 'back' | 'menu' | 'empty';
export type HeaderRightBtnKindsOf = 'confirm' | 'profile' | 'alarm' | 'empty';

export interface HeaderStateKindsOf {
  leftBtn?: HeaderLeftBtnKindsOf;
  rightBtn?: HeaderRightBtnKindsOf;
  headerTitle?: string;
  visible?: boolean;
}