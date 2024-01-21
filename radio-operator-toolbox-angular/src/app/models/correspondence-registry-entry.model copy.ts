export interface ICorrespondenceRegistryEntry {
  timestamp: Date;
  direction: DIRECTION;
  codename: string;
  content: string;
}

export enum DIRECTION{
  INCOMING,
  OUTGOING
}

