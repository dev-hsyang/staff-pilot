type HeaderLeftBtnKindsOf = 'back' | 'menu' | 'empty';
type HeaderRightBtnKindsOf = 'confirm' | 'profile' | 'alarm' | 'empty';

export interface HeaderStateKindsOf {
  leftBtn?: HeaderLeftBtnKindsOf;
  rightBtn?: HeaderRightBtnKindsOf;
  headerTitle?: string;
  visible?: boolean;
}
