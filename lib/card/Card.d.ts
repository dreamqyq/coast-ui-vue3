
export type CardTypeType =
  | 'secondary'
  | 'alert'
  | 'success'
  | 'purple'
  | 'warning'
  | 'violet'
  | 'error'
  | 'cyan'
  | 'dark'
  | 'lite';

export interface CardProps {
  title?: string;
  hoverable?: boolean;
  shadow?: boolean;
  type?: CardTypeType;
}