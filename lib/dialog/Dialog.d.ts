export interface DialogProps {
  title?: string;
  visible: boolean;
  overlayClosable?: boolean;
  confirm?: () => unknown;
  cancel?: () => unknown;
}