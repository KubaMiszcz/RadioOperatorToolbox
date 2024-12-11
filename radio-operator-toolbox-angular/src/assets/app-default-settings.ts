import { IMenuTile_V2 } from '../app/models/menu-item.model';
import { IAppSettings } from 'src/app/models/app-settings.model';
import { DEFAULT_REPORTS_TEMPLATES } from './default-reports-templates.json';

const DEFAULT_MENU_TILES_TREE: IMenuTile_V2[] = [
  {
    label: 'TDR',
    isLabelShowed: true,
    link: 'tdr-data-page',
    isFavourite: true,
  },
  {
    label: 'Utwórz meldunek',
    isLabelShowed: true,
    link: 'create-report-page',
    isFavourite: true,
    subItems: [],
  },
  {
    label: 'Historia meldunków',
    isLabelShowed: true,
    link: 'reports-history-page',
    isFavourite: true,
  },
  // end favs
  // common items
  {
    label: 'Notatnik',
    isLabelShowed: true,
    link: 'notepad-page',
  },
  {
    label: 'Ściągawki',
    isLabelShowed: true,
    link: 'cheatsheets-page',
  },
  {
    label: 'Szyfro wanie',
    isLabelShowed: true,
    link: 'xxxxx-page',
    subItems: [],
  },
  //
  {
    label: 'Kalkulatory',
    isLabelShowed: true,
    link: 'calculators-page',
  },
  {
    label: 'Książka korespon dencji',
    isLabelShowed: true,
    link: 'correspondence-book-page',
  },
  {
    label: 'Eksperymenty',
    isLabelShowed: true,
    link: 'xxxxx-page',
  },
  //
  // {
  //   label: '', //empty tile as spacer
  // },
  {
    label: 'Help',
    isLabelShowed: true,
    link: 'help-page',
  },
  {
    label: 'Import/Eksport',
    isLabelShowed: true,
    link: 'xxxx-page',
  },
  {
    label: 'Ustawienia wszelakie',
    isLabelShowed: true,
    link: 'settings-page',
  },

  // end common items
];

export const DEFAULT_APP_SETTINGS_JSON: IAppSettings = {
  iconsPath: '',
  showAllHelpTooltips: false, //km DEPR   
  reportsTemplates: DEFAULT_REPORTS_TEMPLATES,
  // menuTiles: MENU_ITEMS_DEPR, //km
  menuTilesTree: DEFAULT_MENU_TILES_TREE,
};
