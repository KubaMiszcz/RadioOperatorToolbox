import { ITeam, Team } from './team.model';

export interface ICheatsheetData {
  wavesFreqsLengthPairs?: IWaveFreqLengthPair[];
}

export interface IWaveFreqLengthPair {
  freq: number;
  length: number;
}
