import { IAppData } from 'src/app/models/appData';
import { valueTypesEnum } from 'src/app/models/report.model';

export const APP_DATA_JSON: IAppData = {
  iconsPath: '',
  reports: [
    {
      name: 'MEDEVAC Report',
      isFavourite: true,
      lines: [
        {
          lineHeader: 'Line 1',
          descriptionHeader: 'number of patients by precedence',
          descriptionLines: [
            'number of patients by precedence',
            'Liczba pacjentów ze względu na priorytet:',
            'A – Urgent pilny nieoperacyjny (ewakuacja do 2 godzin)',
            'B – Urgent-surgical – pilny operacyjny (ewakuacja do 2 godzin)',
            'C – Priority - priorytetowy (ewakuacja do 4 godzin)',
            'D – Routine - rutynowy (ewakuacja do 24 godzin)',
            'E – Convenience - ewakuacja, gdy bedzie to możliwe',
          ],
          lineValues:[
            {label:'A=',valueType:valueTypesEnum.number},
            {label:'B=',valueType:valueTypesEnum.number},
            {label:'C=',valueType:valueTypesEnum.number},
            {label:'D=',valueType:valueTypesEnum.number},
            {label:'E=',valueType:valueTypesEnum.number},
          ]
        },
      ],
    },
    { name: 'SALUTE' },
    { name: 'SALTR/SALTUR?' },
  ],
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
