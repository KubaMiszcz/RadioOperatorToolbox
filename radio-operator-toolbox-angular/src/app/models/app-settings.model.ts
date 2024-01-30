import { IReport } from "./report.model";

export interface IAppSettings {
    isPeaceTime?: boolean;
    iconsPath?:string;
    reportsTemplates: IReport[];
}

export class AppSettings implements IAppSettings {
  reportsTemplates = [];
}


