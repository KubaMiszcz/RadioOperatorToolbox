export interface IMenuItem {
  title: string;
  iconName?: string;
  link?: string;
  isTitleShowed?: boolean;
  orderNo?:number
  isFavourite?: boolean;
  subItems?: IMenuItem[];
}