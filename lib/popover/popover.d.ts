export type TriggerType = 'click' | 'hover' | 'focus';
export type PositionType = 'top' | 'left' | 'right' | 'bottom';

export interface PopoverProps {
  trigger: TriggerType;
  position: PositionType;
  width: number | string;
}
