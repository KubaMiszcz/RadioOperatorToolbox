import { IMenuTile_V2 } from "./menu-item.model";
import { IReport } from "./report.model";

export interface IAppSettings {
  iconsPath?: string;
  showAllHelpTooltips: boolean; //km depr
  reportsTemplates: IReport[];
  menuTiles: IMenuTile_V2[];
  IsDarkModeOn?: boolean;
}

export class AppSettings implements IAppSettings {
  iconsPath?: string | undefined;
  showAllHelpTooltips = true; //km depr
  reportsTemplates = [];
  menuTiles = [];
}


