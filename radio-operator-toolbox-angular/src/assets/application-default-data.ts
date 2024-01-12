import { IAppData } from 'src/app/models/appData';
import { VALUE_SIZES_ENUM, VALUE_TYPES_ENUM } from 'src/app/models/report.model';

export const APP_DATA_JSON: IAppData = {
  iconsPath: '',
  reports: [
    {
      name: 'MEDEVAC Report',
      isFavourite: true,
      lines: [
        {
          lineHeader: 'Line 1',
          descriptionHeader: 'LOCATION AT PICKUP SITE',
          descriptionLines: ['Miejsce podjęcia rannych (MGRS)'],
          lineValues: [{ label: 'MGRS', }],
        },
        {
          lineHeader: 'Line 2',
          descriptionHeader: 'FREQENCY AND MY CALLSIGN AT PICKUP SITE',
          descriptionLines: [
            'częstotliwość radia i nasz kryptonim, na jakim pracuje pododdział oczekujący na MEDEVAC w miejscu ewakuacji',
          ],
          lineValues: [
            { label: 'FREQ:', },
            { label: 'MY CALLSIGN:',},
          ],
        },
        {
          lineHeader: 'Line 3',
          descriptionHeader: 'number of patients by precedence',
          descriptionLines: [
            'Liczba pacjentów ze względu na priorytet:',
            'A – Urgent pilny nieoperacyjny (ewakuacja do 2 godzin)',
            'B – Urgent-surgical – pilny operacyjny (ewakuacja do 2 godzin)',
            'C – Priority - priorytetowy (ewakuacja do 4 godzin)',
            'D – Routine - rutynowy (ewakuacja do 24 godzin)',
            'E – Convenience - ewakuacja, gdy bedzie to możliwe',
          ],
          lineValues: [
            { label: 'A=', valueSize: VALUE_SIZES_ENUM.short },
            { label: 'B=', valueSize: VALUE_SIZES_ENUM.short },
            { label: 'C=', valueSize: VALUE_SIZES_ENUM.short },
            { label: 'D=', valueSize: VALUE_SIZES_ENUM.short },
            { label: 'E=', valueSize: VALUE_SIZES_ENUM.short },
          ],
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
