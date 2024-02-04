import { Guid } from 'guid-typescript';
import { TRANSMIT_DIRECTION } from './constants/enums';

export interface ICorrespondenceBookEntry {
  guid: string;
  timestamp: Date;
  transmitDirection?: TRANSMIT_DIRECTION;
  recipientCodename: string;
  senderCodename: string;
  content: string;
}

export class CorrespondenceBookEntry implements ICorrespondenceBookEntry {
  guid = Guid.create().toString();
  timestamp = new Date();
  transmitDirection?: TRANSMIT_DIRECTION | undefined;
  recipientCodename = '';
  senderCodename = '';
  content = '';
}
