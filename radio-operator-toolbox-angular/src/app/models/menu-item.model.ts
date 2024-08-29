
export interface IMenuTile_V2 {
  label: string;
  iconName?: string;
  link?: string;
  isLabelShowed?: boolean;
  orderNo?:number
  isFavourite?: boolean;
  subItems?: IMenuTile_V2[];
}
