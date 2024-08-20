
export interface IMenuTile_V2 {
  label: string;
  iconName?: string;
  link?: string;
  isLabelShowed?: boolean;
  orderNo?:number
  isFavourite?: boolean;
  subItems?: IMenuTile_V2[];
}


/////km
/////km
/////km
/////km
export interface IMenuItem_DEPR {
  title: string;
  iconName?: string;
  link?: string;
  isTitleShowed?: boolean;
  orderNo?:number
  isFavourite?: boolean;
  subItems?: IMenuItem_DEPR[];
}