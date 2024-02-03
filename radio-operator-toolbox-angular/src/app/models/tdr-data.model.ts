import { ITeam, Team } from './team.model';

export interface ITDRData {
  myTeam?: ITeam;
  teams: ITeam[];
  sarnegCodewordOddDays?: string;
  sarnegCodewordEvenDays?: string;
}

export class TDRData implements ITDRData {
  teams = [];
  sarnegCodewordOddDays = '';
  sarnegCodewordEvenDays = '';
}
