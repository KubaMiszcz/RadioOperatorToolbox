import { KeyValue } from '@angular/common';
import { IAlert } from './alert.model';
import { ITeam, Team } from './team.model';
import { IPoint3D } from './point3D.model';

export interface ITDRData {
  networkNo: string;
  teams: ITeam[];
  sarnegCodewordOddDays?: string;
  sarnegCodewordEvenDays?: string;
  alerts: KeyValue<number, string>[];
  gridOffsetOddDays?: IPoint3D;
  gridOffsetEvenDays?: IPoint3D;
  currentTimezoneOffset: number;
}

export class TDRData implements ITDRData {
  networkNo = '12345';
  teams = [];
  sarnegCodewordOddDays = '';
  sarnegCodewordEvenDays = '';
  alerts = [];
  currentTimezoneOffset = +2;
}
