import { KeyValue } from '@angular/common';
import { IAlert } from './alert.model';
import { ITeam, Team } from './team.model';
import { IPoint3D } from './point3D.model';

export interface ITDRData {
  networkNo?: number;
  myTeam?: ITeam;
  teams: ITeam[];
  sarnegCodewordOddDays?: string;
  sarnegCodewordEvenDays?: string;
  alerts: KeyValue<number, string>[];
  gridOffset?: IPoint3D;
}

export class TDRData implements ITDRData {
  myTeam?: ITeam | undefined;
  teams = [];
  sarnegCodewordOddDays = '';
  sarnegCodewordEvenDays = '';
  alerts = [];
}
