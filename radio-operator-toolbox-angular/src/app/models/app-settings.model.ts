import { ICorrespondenceBookEntry } from "./correspondence-book-entry.model";
import { IReport } from "./report.model";
import { ITeam } from "./team.model";

export interface IAppData {
  myNickname:string;
  teamsNicknames: ITeam[];
  reports: IReport[];
  correspondenceBook: ICorrespondenceBookEntry[];
}

export class AppData {
  myNickname = 'myNickname';
  teamsNicknames = [];
  reports = [];
  correspondenceBook = [];
}




