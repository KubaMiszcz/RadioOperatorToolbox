import { ICorrespondenceBookEntry } from "./correspondence-book-entry.model";
import { INotepad, Notepad } from "./notepad.model";
import { IReport } from "./report.model";
import { ITeam } from "./team.model";

export interface IAppData {
  myCodename: string;
  teamsCodenames: ITeam[];
  reports: IReport[];
  correspondenceBook: ICorrespondenceBookEntry[];
  notepad: INotepad;
}

export class AppData implements IAppData {
  myCodename = 'myCodename';
  teamsCodenames = [];
  reports = [];
  correspondenceBook = [];
  notepad = new Notepad();
}




