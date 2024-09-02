import { KeyValue } from '@angular/common';
import { IAlert } from './alert.model';
import { ITeam, Team } from './team.model';
import { IPoint3D } from './point3D.model';

export interface ITDRData {
  networkNo?: number;
  teams: ITeam[];
  sarnegCodewordOddDays?: string;
  sarnegCodewordEvenDays?: string;
  alerts?: KeyValue<number, string>[];
  keywords?: KeyValue<string, string>[];
  gridOffsetOddDays?: IPoint3D;
  gridOffsetEvenDays?: IPoint3D;
  currentTimezoneOffset?: number; //eg +2
}

export class TDRData implements ITDRData {
  teams = [];
}
