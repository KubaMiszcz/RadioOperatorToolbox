import { IMenuTile_V2 } from "./menu-item.model";
import { IReport } from "./report.model";

export interface IAppSettings {
  iconsPath?: string;
  showAllHelpTooltips: boolean; //km depr
  reportsTemplates: IReport[];
  menuTilesTree: IMenuTile_V2[];
  IsDarkModeOn?: boolean;
}

export class AppSettings implements IAppSettings {
  iconsPath?: string | undefined;
  showAllHelpTooltips = false; //km depr
  reportsTemplates = [];
  menuTilesTree = [];
}


