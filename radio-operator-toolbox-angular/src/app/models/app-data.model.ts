import { ICheatsheetData } from "./cheatsheet-data.model";
import { ICorrespondenceBookEntry } from "./correspondence-book-entry.model";
import { INotepad, Notepad } from "./notepad.model";
import { IReport } from "./report.model";
import { ITDRData } from "./tdr-data.model";
import { ITeam, Team } from "./team.model";

export interface IAppData {
  reports: IReport[];
  correspondenceBook: ICorrespondenceBookEntry[];
  notepad: INotepad;
  tdrData?: ITDRData;
  cheatsheetData?: ICheatsheetData;
}

export class AppData implements IAppData {
  reports = [];
  correspondenceBook = [];
  notepad = new Notepad();
}

