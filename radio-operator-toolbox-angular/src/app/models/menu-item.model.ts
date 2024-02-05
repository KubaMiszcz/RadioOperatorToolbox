export interface IMenuItem_DEPR {
  title: string;
  iconName?: string;
  link?: string;
  isTitleShowed?: boolean;
  orderNo?:number
  isFavourite?: boolean;
  subItems?: IMenuItem_DEPR[];
}