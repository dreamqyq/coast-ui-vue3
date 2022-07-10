export interface TabsProps {
  selected: string;
}

export interface TabPanelProps {
  uid?: number;
  title: string;
  disabled: boolean;
}

export type UpdateTabPanelFnType = (state: TabPanelProps) => void;

export type UpdateSelectedFnType = (currentSelected: string) => void;
