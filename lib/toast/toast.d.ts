import type { VNode } from 'vue';
export type ToastType = 'normal' | 'secondary' | 'success' | 'warning' | 'error';

export interface ToastProps {
  text?: string;
  type?: ToastType;
  delay?: number;
  center?: boolean;
  showClose?: boolean;
  top?: number;
  id?: string;
}

export type ToastVM = VNode;

type ToastQueueItem = {
  vm: ToastVM;
};

export type ToastQueue = Array<ToastQueueItem>;
