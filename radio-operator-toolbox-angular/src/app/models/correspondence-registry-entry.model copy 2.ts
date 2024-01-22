import { DIRECTION } from "./constants/enums";

export interface ICorrespondenceRegistryEntry {
  timestamp: Date;
  direction: DIRECTION;
  codename: string;
  content: string;
}



