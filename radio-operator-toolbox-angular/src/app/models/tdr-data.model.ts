import { KeyValue } from '@angular/common';
import { IAlert } from './alert.model';
import { ITeam, Team } from './team.model';

export interface ITDRData {
  networkNo?: number;
  myTeam?: ITeam;
  teams: ITeam[];
  sarnegCodewordOddDays?: string;
  sarnegCodewordEvenDays?: string;
  alerts: KeyValue<number, string>[];
}

export class TDRData implements ITDRData {
  myTeam?: ITeam | undefined;
  teams = [];
  sarnegCodewordOddDays = '';
  sarnegCodewordEvenDays = '';
  alerts = [];
}
