export type ButtonThemeType = 'button' | 'link' | 'text';
export type ButtonSizeType = 'normal' | 'big' | 'small';
export type ButtonLevelType = 'normal' | 'main' | 'danger' | 'warning';

export interface ButtonProps {
  theme: ButtonThemeType;
  size: ButtonSizeType;
  level: ButtonLevelType;
  disabled: boolean;
  loading: boolean;
}