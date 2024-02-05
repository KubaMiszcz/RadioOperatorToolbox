import { Guid } from 'guid-typescript';
import { TRANSMIT_DIRECTION } from './constants/enums';

export interface ICorrespondenceBookEntry {
  guid: string;
  timestamp_DEPR: Date;
  timeDTG: string;
  transmitDirection?: TRANSMIT_DIRECTION;
  recipientCodename: string;
  senderCodename: string;
  content: string;
}

export class CorrespondenceBookEntry implements ICorrespondenceBookEntry {
  guid = Guid.create().toString();
  timestamp_DEPR = new Date();
  timeDTG = '010000ZSTY79';
  transmitDirection?: TRANSMIT_DIRECTION | undefined;
  recipientCodename = '';
  senderCodename = '';
  content = '';
}
