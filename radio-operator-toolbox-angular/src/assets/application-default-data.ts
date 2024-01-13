import { IAppData } from 'src/app/models/appData';
import {
  VALUE_TYPES_ENUM,
} from 'src/app/models/report.model';
import { REPORTS_SCHEMAS } from './reportsSchemas.json';

export const APP_DATA_JSON: IAppData = {
  iconsPath: '',
  reports: REPORTS_SCHEMAS
};

export const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export const ALPHABET_EN = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'W',
  'V',
  'X',
  'Y',
  'Z',
];

export const ALPHABET_PL = [
  'A',
  'Ą',
  'B',
  'C',
  'Ć',
  'D',
  'E',
  'Ę',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'Ł',
  'M',
  'N',
  'O',
  'Ó',
  'P',
  'Q',
  'R',
  'S',
  'Ś',
  'T',
  'U',
  'W',
  'V',
  'X',
  'Y',
  'Z',
  'Ź',
  'Ż',
];
