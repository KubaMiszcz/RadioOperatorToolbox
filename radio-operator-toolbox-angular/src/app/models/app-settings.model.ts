import { IMenuItem_DEPR } from "./menu-item.model";
import { IReport } from "./report.model";

export interface IAppSettings {
  isPeaceTime?: boolean;
  iconsPath?: string;
  reportsTemplates: IReport[];
  // menuItems: IMenuItem_DEPR[]; //km
}

export class AppSettings implements IAppSettings {
  reportsTemplates = [];
  // menuItems = []; //km
}


