import { TRANSMIT_DIRECTION } from './constants/enums';

export interface ICorrespondenceRegistryEntry {
  timestamp: Date;
  transmitDirection?: TRANSMIT_DIRECTION;
  codename: string;
  content: string;
}

export class CorrespondenceRegistryEntry
  implements ICorrespondenceRegistryEntry
{
  timestamp = new Date();
  codename = '';
  content = '';
}
