export type InputStatusType = 'normal' | 'secondary' | 'error' | 'warning' | 'success';
export type InputSizeType = 'mini' | 'small' | 'medium' | 'large';
export type InputElementEvent = Event & { target: HTMLInputElement };

export interface InputProps {
  value: string | number;
  type: string;
  clearable: boolean;
  maxlength: number;
  placeholder: string;
  disabled: boolean;
  readonly: boolean;
  width: string;
  label: string;
  labelRight: string;
  status: InputStatusType;
  size: InputSizeType;
}
