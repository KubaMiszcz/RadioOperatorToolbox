import { IMenuItem_DEPR, IMenuTile_V2 } from "./menu-item.model";
import { IReport } from "./report.model";

export interface IAppSettings {
  // isPeaceTime?: boolean; //km depr
  iconsPath?: string;
  showAllHelpTooltips: boolean; //km depr
  reportsTemplates: IReport[];
  menuTiles: IMenuTile_V2[];
  IsDarkModeOn?: boolean;
}

export class AppSettings implements IAppSettings {
  // isPeaceTime?: boolean | undefined; //km depr
  iconsPath?: string | undefined;
  showAllHelpTooltips = true; //km depr
  reportsTemplates = [];
  menuTiles = [];
}


