import { IReport } from "./report.model";
import { ITeam } from "./team.model";

export interface IAppData {
    myNickname:string;
    teamsNicknames: ITeam[];
    reports: IReport[];
}

export class AppData {
  myNickname = 'myNickname';
  teamsNicknames = [];
  reports = [];
}




