import { IMenuItem_DEPR } from "./menu-item.model";
import { IReport } from "./report.model";

export interface IAppSettings {
  isPeaceTime?: boolean;
  iconsPath?: string;
  showAllHelpTooltips: boolean;
  reportsTemplates: IReport[];
  // menuItems: IMenuItem_DEPR[]; //km
}

export class AppSettings implements IAppSettings {
  isPeaceTime?: boolean | undefined;
  iconsPath?: string | undefined;
  showAllHelpTooltips = true;
  reportsTemplates = [];
  // menuItems = []; //km
}


