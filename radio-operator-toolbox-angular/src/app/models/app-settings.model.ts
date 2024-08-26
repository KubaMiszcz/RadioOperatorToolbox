import { IMenuItem_DEPR, IMenuTile_V2 } from "./menu-item.model";
import { IReport } from "./report.model";

export interface IAppSettings {
  isPeaceTime?: boolean; //km depr
  iconsPath?: string;
  showAllHelpTooltips: boolean;
  reportsTemplates: IReport[];
  menuTiles: IMenuTile_V2[];
}

export class AppSettings implements IAppSettings {
  isPeaceTime?: boolean | undefined; //km depr
  iconsPath?: string | undefined;
  showAllHelpTooltips = true;
  reportsTemplates = [];
  menuTiles = [];
}


