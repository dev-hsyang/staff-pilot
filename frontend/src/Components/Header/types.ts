type HeaderLeftBtnKindsOf = 'back' | 'menu' | 'empty';
type HeaderRightBtnKindsOf = 'confirm' | 'profile' | 'empty';

export interface HeaderStateKindsOf {
  leftBtn?: HeaderLeftBtnKindsOf;
  rightBtn?: HeaderRightBtnKindsOf;
  headerTitle?: string;
  visible?: boolean;
}
