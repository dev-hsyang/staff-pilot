type HeaderLeftBtnKindsOf = 'back' | 'menu' | 'empty';
type HeaderRightBtnKindsOf = 'confirm' | 'profile' | 'empty';

export interface HeaderProps {
  leftBtn?: HeaderLeftBtnKindsOf;
  rightBtn?: HeaderRightBtnKindsOf;
  headerTitle?: string;
  isVisible?: boolean;
}
