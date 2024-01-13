import { IAppData } from 'src/app/models/appData';
import {
  IReport,
  VALUE_SIZES_ENUM,
  VALUE_TYPES_ENUM,
} from 'src/app/models/report.model';

export const REPORTS_SCHEMAS: IReport[] = [
  {
    name: 'MEDEVAC Report EXAMPLE',
    isFavourite: true,
    lines: [
      {
        lineHeader: '1',
        descriptionHeader: 'LOCATION AT PICKUP SITE',
        descriptionLines: ['Miejsce podjęcia rannych (MGRS)'],
        lineValues: [
          {
            label: 'MGRS',
            value: '34UEA 12345 54321',
            valueSize: VALUE_SIZES_ENUM.long,
          },
        ],
      },
      {
        lineHeader: '2',
        descriptionHeader: 'FREQENCY AND MY CALLSIGN AT PICKUP SITE',
        descriptionLines: [
          'częstotliwość radia i nasz kryptonim, na jakim pracuje pododdział oczekujący na MEDEVAC w miejscu ewakuacji',
        ],
        lineValues: [
          {
            label: 'FREQ',
            value: 211.321223,
            valueSize: VALUE_SIZES_ENUM.long,
          },
          {
            label: 'MY CALLSIGN',
            value: 'trololo',
            valueSize: VALUE_SIZES_ENUM.long,
          },
        ],
      },
      {
        lineHeader: '3',
        descriptionHeader: 'number of patients by precedence',
        descriptionLines: [
          'Liczba pacjentów ze względu na priorytet',
          'A – Urgent pilny nieoperacyjny (ewakuacja do 2 godzin)',
          'B – Urgent-surgical – pilny operacyjny (ewakuacja do 2 godzin)',
          'C – Priority - priorytetowy (ewakuacja do 4 godzin)',
          'D – Routine - rutynowy (ewakuacja do 24 godzin)',
          'E – Convenience - ewakuacja, gdy bedzie to możliwe',
        ],
        lineValues: [
          { label: 'A', value: 2, valueSize: VALUE_SIZES_ENUM.short },
          { label: 'B', value: 2, valueSize: VALUE_SIZES_ENUM.short },
          { label: 'C', valueSize: VALUE_SIZES_ENUM.short },
          { label: 'D', valueSize: VALUE_SIZES_ENUM.short },
          { label: 'E', valueSize: VALUE_SIZES_ENUM.short },
        ],
      },
      {
        lineHeader: '4',
        descriptionHeader: 'SPECIAL EQUIPMENT',
        descriptionLines: [
          'Wymagany sprzęt specjalistyczny',
          'A – brak (None)',
          'B – podwieszenie (Hoist)',
          'C – wyciqgarka (Extraction Equipment)',
          'D — respirator (Ventilator)',
          'O: inne, podać szczegóły',
        ],
        lineValues: [
          { label: 'A', value: 2, valueSize: VALUE_SIZES_ENUM.short },
          { label: 'B', valueSize: VALUE_SIZES_ENUM.short },
          { label: 'C', value: 2, valueSize: VALUE_SIZES_ENUM.short },
          { label: 'D', valueSize: VALUE_SIZES_ENUM.short },
          { label: 'O', value: 'sdfsdf', valueSize: VALUE_SIZES_ENUM.long },
        ],
      },
      {
        lineHeader: '5',
        descriptionHeader: 'NUMBER OF PATIENTS BY TYPE',
        descriptionLines: [
          'Liczba pacjentów według mobilności',
          'A — siedzący (Ambulatory)',
          'L — na noszach (Litter)',
          'W — chodzący',
          'E — żołnierz będący eskortą dla poszkodowanego',
          'O: inna sytuacja, podać szczegóły',
        ],
        lineValues: [
          { label: 'A', valueSize: VALUE_SIZES_ENUM.short },
          { label: 'L', value: 2, valueSize: VALUE_SIZES_ENUM.short },
          { label: 'W', valueSize: VALUE_SIZES_ENUM.short },
          { label: 'E', valueSize: VALUE_SIZES_ENUM.short },
          { label: 'O', valueSize: VALUE_SIZES_ENUM.long },
        ],
      },
      {
        lineHeader: '6',
        descriptionHeader: 'SECURITY IN PICKUP SITE (WARTIME)',
        descriptionLines: [
          'Bezpieczeństwo w strefie podjęcia',
          'N - brak przeciwnika',
          'P - możliwa obecność przeciwnika',
          'E - przeciwnik w rejonie podjęcia',
          'X - przeciwnik obecny, wymagana uzbrojona eskorta',
        ],
        lineValues: [
          { label: 'N', value: true, valueType: VALUE_TYPES_ENUM.bool },
          { label: 'P', valueType: VALUE_TYPES_ENUM.bool },
          { label: 'E', value: true, valueType: VALUE_TYPES_ENUM.bool },
          { label: 'X', valueType: VALUE_TYPES_ENUM.bool },
        ],
      },
      {
        lineHeader: '6',
        isInPeacetime: true,
        descriptionHeader: '6 IN PEACETIME',
        descriptionLines: ['number and type of wound, injury, ilness'],
        lineValues: [{ label: 'Info', valueSize: VALUE_SIZES_ENUM.long }],
      },
      {
        lineHeader: '7',
        descriptionHeader: 'MARKING OF PICKUP SITE',
        descriptionLines: [
          'Metoda oznakowania strefy podjęcia',
          'A - panel',
          'B - petardy',
          'C - dym',
          'D - brak',
          'E: inne, np. lightstic',
        ],
        lineValues: [
          { label: 'A', valueType: VALUE_TYPES_ENUM.bool },
          { label: 'B', value: true, valueType: VALUE_TYPES_ENUM.bool },
          { label: 'C', valueType: VALUE_TYPES_ENUM.bool },
          { label: 'D', valueType: VALUE_TYPES_ENUM.bool },
          { label: 'E', valueSize: VALUE_SIZES_ENUM.long },
        ],
      },
      {
        lineHeader: '8',
        descriptionHeader: 'PATIENT NATIONALITY AND STATUS',
        descriptionLines: [
          'Liczba pacjentów wg narodowości/statusu.',
          'A — żołnierz NATO (swój) ',
          'B — cywil NATO (swój) ',
          'C — żołnierz spoza NATO ',
          'D — cywile inni niż z NATO ',
          'E — zatrzymani, jeńcy wojenni (POW) ',
          'F — wysoce wartościowy (wymagana eskorta), miejscowy tłumacz ',
          'G — cywile ranni na skutek działań sił własnych ',
          'H — Dziecko',
        ],
        lineValues: [
          { label: 'A', valueSize: VALUE_SIZES_ENUM.short },
          { label: 'B', valueSize: VALUE_SIZES_ENUM.short },
          { label: 'C', value: 2, valueSize: VALUE_SIZES_ENUM.short },
          { label: 'D', valueSize: VALUE_SIZES_ENUM.short },
          { label: 'E', value: 2, valueSize: VALUE_SIZES_ENUM.short },
          { label: 'F', valueSize: VALUE_SIZES_ENUM.short },
          { label: 'G', valueSize: VALUE_SIZES_ENUM.short },
          { label: 'H', valueSize: VALUE_SIZES_ENUM.short },
          { label: 'H', valueSize: VALUE_SIZES_ENUM.short },
        ],
      },
      {
        lineHeader: '9',
        descriptionHeader: 'NBC CONTAMINATION if exists (WARTIME)',
        descriptionLines: [
          'Zagrożenie skażeniem, uwarunkowania taktyczne i inne informacje: ',
          'N - jądrowe',
          'B - biologiczne ',
          'C - chemiczne ',
          'O: inne informacje (np. czas dotarcia do miejsca podjęcia)',
        ],
        lineValues: [
          { label: 'N', valueType: VALUE_TYPES_ENUM.bool },
          { label: 'B', value: true, valueType: VALUE_TYPES_ENUM.bool },
          { label: 'C', valueType: VALUE_TYPES_ENUM.bool },
          { label: 'O', valueSize: VALUE_SIZES_ENUM.long },
        ],
      },
      {
        lineHeader: '9',
        isInPeacetime: true,
        descriptionHeader: '9 IN PEACETIME',
        descriptionLines: ['detailed terrain feature description'],
        lineValues: [
          {
            label: 'Info',
            value: 'safdsa adsf ads fa d',
            valueSize: VALUE_SIZES_ENUM.long,
          },
        ],
      },
    ],
  },

  {
    name: 'MEDEVAC Report',
    isFavourite: true,
    lines: [
      {
        lineHeader: '1',
        descriptionHeader: 'LOCATION AT PICKUP SITE',
        descriptionLines: ['Miejsce podjęcia rannych (MGRS)'],
        lineValues: [{ label: 'MGRS', valueSize: VALUE_SIZES_ENUM.long }],
      },
      {
        lineHeader: '2',
        descriptionHeader: 'FREQENCY AND MY CALLSIGN AT PICKUP SITE',
        descriptionLines: [
          'częstotliwość radia i nasz kryptonim, na jakim pracuje pododdział oczekujący na MEDEVAC w miejscu ewakuacji',
        ],
        lineValues: [
          { label: 'FREQ', valueSize: VALUE_SIZES_ENUM.long },
          { label: 'MY CALLSIGN', valueSize: VALUE_SIZES_ENUM.long },
        ],
      },
      {
        lineHeader: '3',
        descriptionHeader: 'number of patients by precedence',
        descriptionLines: [
          'Liczba pacjentów ze względu na priorytet',
          'A – Urgent pilny nieoperacyjny (ewakuacja do 2 godzin)',
          'B – Urgent-surgical – pilny operacyjny (ewakuacja do 2 godzin)',
          'C – Priority - priorytetowy (ewakuacja do 4 godzin)',
          'D – Routine - rutynowy (ewakuacja do 24 godzin)',
          'E – Convenience - ewakuacja, gdy bedzie to możliwe',
        ],
        lineValues: [
          { label: 'A', valueSize: VALUE_SIZES_ENUM.short },
          { label: 'B', valueSize: VALUE_SIZES_ENUM.short },
          { label: 'C', valueSize: VALUE_SIZES_ENUM.short },
          { label: 'D', valueSize: VALUE_SIZES_ENUM.short },
          { label: 'E', valueSize: VALUE_SIZES_ENUM.short },
        ],
      },
      {
        lineHeader: '4',
        descriptionHeader: 'SPECIAL EQUIPMENT',
        descriptionLines: [
          'Wymagany sprzęt specjalistyczny',
          'A – brak (None)',
          'B – podwieszenie (Hoist)',
          'C – wyciqgarka (Extraction Equipment)',
          'D — respirator (Ventilator)',
          'O: inne, podać szczegóły',
        ],
        lineValues: [
          { label: 'A', valueSize: VALUE_SIZES_ENUM.short },
          { label: 'B', valueSize: VALUE_SIZES_ENUM.short },
          { label: 'C', valueSize: VALUE_SIZES_ENUM.short },
          { label: 'D', valueSize: VALUE_SIZES_ENUM.short },
          { label: 'O', valueSize: VALUE_SIZES_ENUM.long },
        ],
      },
      {
        lineHeader: '5',
        descriptionHeader: 'NUMBER OF PATIENTS BY TYPE',
        descriptionLines: [
          'Liczba pacjentów według mobilności',
          'A — siedzący (Ambulatory)',
          'L — na noszach (Litter)',
          'W — chodzący',
          'E — żołnierz będący eskortą dla poszkodowanego',
          'O: inna sytuacja, podać szczegóły',
        ],
        lineValues: [
          { label: 'A', valueSize: VALUE_SIZES_ENUM.short },
          { label: 'L', valueSize: VALUE_SIZES_ENUM.short },
          { label: 'W', valueSize: VALUE_SIZES_ENUM.short },
          { label: 'E', valueSize: VALUE_SIZES_ENUM.short },
          { label: 'O', valueSize: VALUE_SIZES_ENUM.long },
        ],
      },
      {
        lineHeader: '6',
        descriptionHeader: 'SECURITY IN PICKUP SITE (WARTIME)',
        descriptionLines: [
          'Bezpieczeństwo w strefie podjęcia',
          'N - brak przeciwnika',
          'P - możliwa obecność przeciwnika',
          'E - przeciwnik w rejonie podjęcia',
          'X - przeciwnik obecny, wymagana uzbrojona eskorta',
        ],
        lineValues: [
          { label: 'N', valueType: VALUE_TYPES_ENUM.bool },
          { label: 'P', valueType: VALUE_TYPES_ENUM.bool },
          { label: 'E', valueType: VALUE_TYPES_ENUM.bool },
          { label: 'X', valueType: VALUE_TYPES_ENUM.bool },
        ],
      },
      {
        lineHeader: '6',
        isInPeacetime: true,
        descriptionHeader: '6 IN PEACETIME',
        descriptionLines: ['number and type of wound, injury, ilness'],
        lineValues: [{ label: 'Info', valueSize: VALUE_SIZES_ENUM.long }],
      },
      {
        lineHeader: '7',
        descriptionHeader: 'MARKING OF PICKUP SITE',
        descriptionLines: [
          'Metoda oznakowania strefy podjęcia',
          'A - panel',
          'B - petardy',
          'C - dym',
          'D - brak',
          'E: inne, np. lightstic',
        ],
        lineValues: [
          { label: 'A', valueType: VALUE_TYPES_ENUM.bool },
          { label: 'B', valueType: VALUE_TYPES_ENUM.bool },
          { label: 'C', valueType: VALUE_TYPES_ENUM.bool },
          { label: 'D', valueType: VALUE_TYPES_ENUM.bool },
          { label: 'E', valueSize: VALUE_SIZES_ENUM.long },
        ],
      },
      {
        lineHeader: '8',
        descriptionHeader: 'PATIENT NATIONALITY AND STATUS',
        descriptionLines: [
          'Liczba pacjentów wg narodowości/statusu.',
          'A — żołnierz NATO (swój) ',
          'B — cywil NATO (swój) ',
          'C — żołnierz spoza NATO ',
          'D — cywile inni niż z NATO ',
          'E — zatrzymani, jeńcy wojenni (POW) ',
          'F — wysoce wartościowy (wymagana eskorta), miejscowy tłumacz ',
          'G — cywile ranni na skutek działań sił własnych ',
          'H — Dziecko',
        ],
        lineValues: [
          { label: 'A', valueSize: VALUE_SIZES_ENUM.short },
          { label: 'B', valueSize: VALUE_SIZES_ENUM.short },
          { label: 'C', valueSize: VALUE_SIZES_ENUM.short },
          { label: 'D', valueSize: VALUE_SIZES_ENUM.short },
          { label: 'E', valueSize: VALUE_SIZES_ENUM.short },
          { label: 'F', valueSize: VALUE_SIZES_ENUM.short },
          { label: 'G', valueSize: VALUE_SIZES_ENUM.short },
          { label: 'H', valueSize: VALUE_SIZES_ENUM.short },
          { label: 'H', valueSize: VALUE_SIZES_ENUM.short },
        ],
      },
      {
        lineHeader: '9',
        descriptionHeader: 'NBC CONTAMINATION if exists (WARTIME)',
        descriptionLines: [
          'Zagrożenie skażeniem, uwarunkowania taktyczne i inne informacje: ',
          'N - jądrowe',
          'B - biologiczne ',
          'C - chemiczne ',
          'O: inne informacje (np. czas dotarcia do miejsca podjęcia)',
        ],
        lineValues: [
          { label: 'N', valueType: VALUE_TYPES_ENUM.bool },
          { label: 'B', valueType: VALUE_TYPES_ENUM.bool },
          { label: 'C', valueType: VALUE_TYPES_ENUM.bool },
          { label: 'O', valueSize: VALUE_SIZES_ENUM.long },
        ],
      },
      {
        lineHeader: '9',
        isInPeacetime: true,
        descriptionHeader: '9 IN PEACETIME',
        descriptionLines: ['detailed terrain feature description'],
        lineValues: [{ label: 'Info', valueSize: VALUE_SIZES_ENUM.long }],
      },
    ],
  },

  { name: 'SALUTE' },
  { name: 'SALTR/SALTUR?' },
];
