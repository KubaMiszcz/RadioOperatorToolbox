import { ITeam, Team } from './team.model';

export interface ICheatsheetsData {
  wavesFreqsLengthPairs: IWaveFreqLengthPair[];
  shrinkFactor?: number; //km make nullabel
  angles?: number[]; //km make nullabel
}

export interface IWaveFreqLengthPair {
  freq: number;
  length: number;
}
