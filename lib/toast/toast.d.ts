import type { PropType } from 'vue';

export type ToastType = PropType<'normal' | 'secondary' | 'success' | 'warning' | 'error'>;

export interface ToastProps {
  text?: string;
  type?: ToastType;
  delay?: number;
  center?: boolean;
  showClose?: boolean;
}
