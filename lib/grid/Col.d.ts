export type SizeObjectType = {
  span: number | string;
  offset: number | string;
};

export interface ColProps {
  span: number | string;
  offset: number | string;
  xs: number | string | SizeObjectType;
  sm: number | string | SizeObjectType;
  md: number | string | SizeObjectType;
  lg: number | string | SizeObjectType;
  xl: number | string | SizeObjectType;
  xxl: number | string | SizeObjectType;
}
