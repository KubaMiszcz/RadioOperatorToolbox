import { IMenuItem_DEPR } from './../app/models/menu-item.model';
import { IAppSettings } from 'src/app/models/app-settings.model';
import { REPORTS_TEMPLATES } from './reports-templates.json';
import { KeyValue } from '@angular/common';

const MENU_ITEMS_DEPR: IMenuItem_DEPR[] = [
  {
    title: 'Kodowanie',
    link: 'encodings-tab',
    isTitleShowed: true,
    subItems: [
      {
        title: 'Sarneg',
        link: 'sarneg-tab',
      },
      {
        title: 'Vigenere',
        link: 'vigenere-tab',
      },
    ],
  },
  { title: '' }, //dummy
  { title: '' }, //dummy
  {
    title: 'Reports',
    iconName: 'reports',
    link: 'reports-page',
    subItems: [],
  },
  {
    title: 'Książka korespondencji',
    isTitleShowed: true,
    link: 'correspondence-book-page',
  },
  {
    title: 'TDR',
    isTitleShowed: true,
    link: 'tdr-data-page',
  },
  {
    title: 'Ściągawka',
    isTitleShowed: true,
    link: 'cheatsheet-page',
  },
  {
    title: 'Notatnik',
    isTitleShowed: true,
    link: 'notepad-page',
  },
  {
    title: 'Ustawienia wszelakie',
    isTitleShowed: true,
    link: 'settings-page',
  },
];

export const APP_DEFAULT_SETTINGS_JSON: IAppSettings = {
  iconsPath: '',
  isPeaceTime: false,
  reportsTemplates: REPORTS_TEMPLATES,
  // menuItems: MENU_ITEMS_DEPR,
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


export const DTG_TIMEZONES: KeyValue<number, string>[] = [
  { key: -12, value: 'Y' },
  { key: -11, value: 'X' },
  { key: -10, value: 'W' },
  { key: -9, value: 'V' },
  { key: -8, value: 'U' },
  { key: -7, value: 'T' },
  { key: -6, value: 'S' },
  { key: -5, value: 'R' },
  { key: -4, value: 'Q' },
  { key: -3, value: 'P' },
  { key: -2, value: 'O' },
  { key: -1, value: 'N' },
  { key: +-0, value: 'Z' },
  { key: +1, value: 'A' },
  { key: +2, value: 'B' },
  { key: +3, value: 'C' },
  { key: +4, value: 'D' },
  { key: +5, value: 'E' },
  { key: +6, value: 'F' },
  { key: +7, value: 'G' },
  { key: +8, value: 'H' },
  { key: +9, value: 'I' },
  { key: +10, value: 'K' },
  { key: +11, value: 'L' },
  { key: +12, value: 'M' },
];
