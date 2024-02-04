import { Guid } from 'guid-typescript';
import { TRANSMIT_DIRECTION } from './constants/enums';

export interface ICorrespondenceBookEntry {
  guid: Guid;
  timestamp: Date;
  transmitDirection?: TRANSMIT_DIRECTION;
  recipientCodename: string;
  senderCodename: string;
  content: string;
}

export class CorrespondenceBookEntry implements ICorrespondenceBookEntry {
  guid = Guid.create();
  timestamp = new Date();
  recipientCodename = '';
  senderCodename = '';
  content = '';
}
