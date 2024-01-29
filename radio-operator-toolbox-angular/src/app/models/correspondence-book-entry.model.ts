import { TRANSMIT_DIRECTION } from './constants/enums';

export interface ICorrespondenceBookEntry {
  timestamp: Date;
  transmitDirection?: TRANSMIT_DIRECTION;
  codename: string;
  content: string;
}

export class CorrespondenceBookEntry
  implements ICorrespondenceBookEntry
{
  timestamp = new Date();
  codename = '';
  content = '';
}
