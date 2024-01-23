import { ICorrespondenceRegistryEntry } from "./correspondence-registry-entry.model";
import { IReport } from "./report.model";
import { ITeam } from "./team.model";

export interface IAppData {
  myNickname:string;
  teamsNicknames: ITeam[];
  reports: IReport[];
  correspondenceBook: ICorrespondenceRegistryEntry[];
}

export class AppData {
  myNickname = 'myNickname';
  teamsNicknames = [];
  reports = [];
  correspondenceBook = [];
}




