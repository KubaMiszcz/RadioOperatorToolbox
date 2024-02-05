import { IAlert } from './alert.model';
import { ITeam, Team } from './team.model';

export interface ITDRData {
  myTeam?: ITeam;
  teams: ITeam[];
  sarnegCodewordOddDays?: string;
  sarnegCodewordEvenDays?: string;
  alerts:IAlert[]
}

export class TDRData implements ITDRData {
  myTeam?: ITeam | undefined;
  teams = [];
  sarnegCodewordOddDays = '';
  sarnegCodewordEvenDays = '';
  alerts = [];
}
