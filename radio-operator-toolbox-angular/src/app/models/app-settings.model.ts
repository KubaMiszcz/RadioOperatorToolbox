import { IMenuItem } from "./menu-item.model";
import { IReport } from "./report.model";

export interface IAppSettings {
  isPeaceTime?: boolean;
  iconsPath?: string;
  reportsTemplates: IReport[];
  menuItems: IMenuItem[];
}

export class AppSettings implements IAppSettings {
  reportsTemplates = [];
  menuItems = [];
}


