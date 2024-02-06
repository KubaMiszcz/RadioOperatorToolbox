import { IAppSettings } from 'src/app/models/app-settings.model';
import { IReport, VALUE_TYPES_ENUM } from 'src/app/models/report.model';

export const REPORTS_TEMPLATES: IReport[] = [
  {
    name: 'meldunek MEDEVAC',
    isFavourite: true,
    lines: [
      {
        lineHeader: '1',
        descriptionHeader: 'LOCATION AT PICKUP SITE',
        descriptionLines: ['Miejsce podjęcia rannych (MGRS)'],
        lineValues: [
          {
            label: 'MGRS',
            valueType: VALUE_TYPES_ENUM.MGRS1km,
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
            valueType: VALUE_TYPES_ENUM.longNumber,
          },
          {
            label: 'MY CALLSIGN',
            valueType: VALUE_TYPES_ENUM.textLine,
          },
        ],
      },
      {
        lineHeader: '3',
        descriptionHeader: 'number of patients by precedence',
        descriptionLines: ['Liczba pacjentów ze względu na priorytet'],
        lineValues: [
          {
            label: 'A',
            description: 'pilny nieoperacyjny (ewakuacja do 2 godzin)',
            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
          {
            label: 'B',
            description: 'pilny operacyjny (ewakuacja do 2 godzin)',
            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
          {
            label: 'C',
            description: 'priorytetowy (ewakuacja do 4 godzin)',
            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
          {
            label: 'D',
            description: 'rutynowy (ewakuacja do 24 godzin)',
            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
          {
            label: 'E',
            description: 'ewakuacja, gdy bedzie to możliwe',
            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
        ],
      },
      {
        lineHeader: '4',
        descriptionHeader: 'SPECIAL EQUIPMENT',
        descriptionLines: ['Wymagany sprzęt specjalistyczny'],
        lineValues: [
          {
            label: 'A',
            description: 'brak (None)',

            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
          {
            label: 'B',
            description: 'podwieszenie (Hoist)',
            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
          {
            label: 'C',
            description: 'wyciągarka (Extraction Equipment)',

            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
          {
            label: 'D',
            description: 'respirator (Ventilator)',
            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
          {
            label: 'O',
            description: 'inne, podać szczegóły',
            valueType: VALUE_TYPES_ENUM.textArea,
          },
        ],
      },
      {
        lineHeader: '5',
        descriptionHeader: 'NUMBER OF PATIENTS BY TYPE',
        descriptionLines: ['Liczba pacjentów według mobilności'],
        lineValues: [
          {
            label: 'A',
            description: 'siedzący (Ambulatory)',
            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
          {
            label: 'L',
            description: 'na noszach (Litter)',
            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
          {
            label: 'W',
            description: 'chodzący',
            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
          {
            label: 'E',
            description: 'żołnierz będący eskortą dla poszkodowanego',
            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
          {
            label: 'O',
            description: 'inna sytuacja, podać szczegóły',
            valueType: VALUE_TYPES_ENUM.textArea,
          },
        ],
      },
      {
        lineHeader: '6',
        descriptionHeader: 'SECURITY IN PICKUP SITE (WARTIME)',
        descriptionLines: ['Bezpieczeństwo w strefie podjęcia'],
        lineValues: [
          {
            label: 'N',
            description: 'brak przeciwnika',
            valueType: VALUE_TYPES_ENUM.bool,
          },
          {
            label: 'P',
            description: 'możliwa obecność przeciwnika',
            valueType: VALUE_TYPES_ENUM.bool,
          },
          {
            label: 'E',
            description: 'przeciwnik w rejonie podjęcia',
            valueType: VALUE_TYPES_ENUM.bool,
          },
          {
            label: 'X',
            description: 'przeciwnik obecny, wymagana uzbrojona eskorta',
            valueType: VALUE_TYPES_ENUM.bool,
          },
        ],
      },
      // {
      //   lineHeader: '6',
      //   isInPeacetime: true,
      //   descriptionHeader: '6 IN PEACETIME',
      //   descriptionLines: ['number and type of wound, injury, ilness'],
      //   lineValues: [
      //     {
      //       label: 'Info',
      //       valueType: VALUE_TYPES_ENUM.textArea,
      //     },
      //   ],
      // },
      {
        lineHeader: '7',
        descriptionHeader: 'MARKING OF PICKUP SITE',
        descriptionLines: ['Metoda oznakowania strefy podjęcia'],
        lineValues: [
          {
            label: 'A',
            description: 'panel',
            valueType: VALUE_TYPES_ENUM.bool,
          },
          {
            label: 'B',
            description: 'petardy',
            valueType: VALUE_TYPES_ENUM.bool,
          },
          {
            label: 'C',
            description: 'dym',
            valueType: VALUE_TYPES_ENUM.bool,
          },
          {
            label: 'D',
            description: 'brak',
            valueType: VALUE_TYPES_ENUM.bool,
          },
          {
            label: 'E',
            description: 'inne, np. lightstic',
            valueType: VALUE_TYPES_ENUM.textLine,
          },
        ],
      },
      {
        lineHeader: '8',
        descriptionHeader: 'PATIENT NATIONALITY AND STATUS',
        descriptionLines: ['Liczba pacjentów wg narodowości/statusu.'],
        lineValues: [
          {
            label: 'A',
            description: 'żołnierz NATO (swój) ',
            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
          {
            label: 'B',
            description: 'cywil NATO (swój) ',
            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
          {
            label: 'C',
            description: 'żołnierz spoza NATO ',
            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
          {
            label: 'D',
            description: 'cywile inni niż z NATO ',
            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
          {
            label: 'E',
            description: 'zatrzymani, jeńcy wojenni (POW) ',
            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
          {
            label: 'F',
            description:
              'wysoce wartościowy (wymagana eskorta), miejscowy tłumacz ',
            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
          {
            label: 'G',
            description: 'cywile ranni na skutek działań sił własnych ',
            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
          {
            label: 'H',
            description: 'Dziecko',
            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
        ],
      },
      {
        lineHeader: '9',
        descriptionHeader: 'NBC CONTAMINATION if exists (WARTIME)',
        descriptionLines: [
          'Zagrożenie skażeniem, uwarunkowania taktyczne i inne informacje: ',
        ],
        lineValues: [
          {
            label: 'N',
            description: 'jądrowe',
            valueType: VALUE_TYPES_ENUM.bool,
          },
          {
            label: 'B',
            description: 'biologiczne ',
            valueType: VALUE_TYPES_ENUM.bool,
          },
          {
            label: 'C',
            description: 'chemiczne ',
            valueType: VALUE_TYPES_ENUM.bool,
          },
          {
            label: 'O',
            description:
              'inne informacje (np. czas dotarcia do miejsca podjęcia)',
            valueType: VALUE_TYPES_ENUM.textArea,
          },
        ],
      },
      // {
      //   lineHeader: '9',
      //   isInPeacetime: true,
      //   descriptionHeader: '9 IN PEACETIME',
      //   descriptionLines: ['detailed terrain feature description'],
      //   lineValues: [
      //     {
      //       label: 'Info',
      //       valueType: VALUE_TYPES_ENUM.textArea,
      //
      //     },
      //   ],
      // },
    ],
  },
  {
    name: 'meldunek MEDEVAC',
    isFavourite: true,
    lines: [
      {
        lineHeader: '1',
        descriptionHeader: 'LOCATION AT PICKUP SITE',
        descriptionLines: ['Miejsce podjęcia rannych (MGRS)'],
        lineValues: [
          {
            label: 'MGRS',
            valueType: VALUE_TYPES_ENUM.MGRS1km,
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
            valueType: VALUE_TYPES_ENUM.longNumber,
          },
          {
            label: 'MY CALLSIGN',
            valueType: VALUE_TYPES_ENUM.textLine,
          },
        ],
      },
      {
        lineHeader: '3',
        descriptionHeader: 'number of patients by precedence',
        descriptionLines: ['Liczba pacjentów ze względu na priorytet'],
        lineValues: [
          {
            label: 'A',
            description: 'pilny nieoperacyjny (ewakuacja do 2 godzin)',
            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
          {
            label: 'B',
            description: 'pilny operacyjny (ewakuacja do 2 godzin)',
            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
          {
            label: 'C',
            description: 'priorytetowy (ewakuacja do 4 godzin)',
            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
          {
            label: 'D',
            description: 'rutynowy (ewakuacja do 24 godzin)',
            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
          {
            label: 'E',
            description: 'ewakuacja, gdy bedzie to możliwe',
            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
        ],
      },
      {
        lineHeader: '4',
        descriptionHeader: 'SPECIAL EQUIPMENT',
        descriptionLines: ['Wymagany sprzęt specjalistyczny'],
        lineValues: [
          {
            label: 'A',
            description: 'brak (None)',

            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
          {
            label: 'B',
            description: 'podwieszenie (Hoist)',
            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
          {
            label: 'C',
            description: 'wyciągarka (Extraction Equipment)',

            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
          {
            label: 'D',
            description: 'respirator (Ventilator)',
            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
          {
            label: 'O',
            description: 'inne, podać szczegóły',
            valueType: VALUE_TYPES_ENUM.textArea,
          },
        ],
      },
      {
        lineHeader: '5',
        descriptionHeader: 'NUMBER OF PATIENTS BY TYPE',
        descriptionLines: ['Liczba pacjentów według mobilności'],
        lineValues: [
          {
            label: 'A',
            description: 'siedzący (Ambulatory)',
            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
          {
            label: 'L',
            description: 'na noszach (Litter)',
            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
          {
            label: 'W',
            description: 'chodzący',
            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
          {
            label: 'E',
            description: 'żołnierz będący eskortą dla poszkodowanego',
            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
          {
            label: 'O',
            description: 'inna sytuacja, podać szczegóły',
            valueType: VALUE_TYPES_ENUM.textArea,
          },
        ],
      },
      {
        lineHeader: '6',
        descriptionHeader: 'SECURITY IN PICKUP SITE (WARTIME)',
        descriptionLines: ['Bezpieczeństwo w strefie podjęcia'],
        lineValues: [
          {
            label: 'N',
            description: 'brak przeciwnika',
            valueType: VALUE_TYPES_ENUM.bool,
          },
          {
            label: 'P',
            description: 'możliwa obecność przeciwnika',
            valueType: VALUE_TYPES_ENUM.bool,
          },
          {
            label: 'E',
            description: 'przeciwnik w rejonie podjęcia',
            valueType: VALUE_TYPES_ENUM.bool,
          },
          {
            label: 'X',
            description: 'przeciwnik obecny, wymagana uzbrojona eskorta',
            valueType: VALUE_TYPES_ENUM.bool,
          },
        ],
      },
      // {
      //   lineHeader: '6',
      //   isInPeacetime: true,
      //   descriptionHeader: '6 IN PEACETIME',
      //   descriptionLines: ['number and type of wound, injury, ilness'],
      //   lineValues: [
      //     {
      //       label: 'Info',
      //       valueType: VALUE_TYPES_ENUM.textArea,
      //     },
      //   ],
      // },
      {
        lineHeader: '7',
        descriptionHeader: 'MARKING OF PICKUP SITE',
        descriptionLines: ['Metoda oznakowania strefy podjęcia'],
        lineValues: [
          {
            label: 'A',
            description: 'panel',
            valueType: VALUE_TYPES_ENUM.bool,
          },
          {
            label: 'B',
            description: 'petardy',
            valueType: VALUE_TYPES_ENUM.bool,
          },
          {
            label: 'C',
            description: 'dym',
            valueType: VALUE_TYPES_ENUM.bool,
          },
          {
            label: 'D',
            description: 'brak',
            valueType: VALUE_TYPES_ENUM.bool,
          },
          {
            label: 'E',
            description: 'inne, np. lightstic',
            valueType: VALUE_TYPES_ENUM.textLine,
          },
        ],
      },
      {
        lineHeader: '8',
        descriptionHeader: 'PATIENT NATIONALITY AND STATUS',
        descriptionLines: ['Liczba pacjentów wg narodowości/statusu.'],
        lineValues: [
          {
            label: 'A',
            description: 'żołnierz NATO (swój) ',
            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
          {
            label: 'B',
            description: 'cywil NATO (swój) ',
            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
          {
            label: 'C',
            description: 'żołnierz spoza NATO ',
            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
          {
            label: 'D',
            description: 'cywile inni niż z NATO ',
            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
          {
            label: 'E',
            description: 'zatrzymani, jeńcy wojenni (POW) ',
            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
          {
            label: 'F',
            description:
              'wysoce wartościowy (wymagana eskorta), miejscowy tłumacz ',
            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
          {
            label: 'G',
            description: 'cywile ranni na skutek działań sił własnych ',
            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
          {
            label: 'H',
            description: 'Dziecko',
            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
        ],
      },
      {
        lineHeader: '9',
        descriptionHeader: 'NBC CONTAMINATION if exists (WARTIME)',
        descriptionLines: [
          'Zagrożenie skażeniem, uwarunkowania taktyczne i inne informacje: ',
        ],
        lineValues: [
          {
            label: 'N',
            description: 'jądrowe',
            valueType: VALUE_TYPES_ENUM.bool,
          },
          {
            label: 'B',
            description: 'biologiczne ',
            valueType: VALUE_TYPES_ENUM.bool,
          },
          {
            label: 'C',
            description: 'chemiczne ',
            valueType: VALUE_TYPES_ENUM.bool,
          },
          {
            label: 'O',
            description:
              'inne informacje (np. czas dotarcia do miejsca podjęcia)',
            valueType: VALUE_TYPES_ENUM.textArea,
          },
        ],
      },
      // {
      //   lineHeader: '9',
      //   isInPeacetime: true,
      //   descriptionHeader: '9 IN PEACETIME',
      //   descriptionLines: ['detailed terrain feature description'],
      //   lineValues: [
      //     {
      //       label: 'Info',
      //       valueType: VALUE_TYPES_ENUM.textArea,
      //
      //     },
      //   ],
      // },
    ],
  },
  {
    name: 'meldunek SALUTE',
    isFavourite: true,
    lines: [
      {
        lineHeader: 'S',
        descriptionHeader: 'Size',
        descriptionLines: [
          'wielkość sił przeciwnika, ilosc ludzi, pojazdów itp',
        ],
        lineValues: [
          {
            valueType: VALUE_TYPES_ENUM.textArea,
          },
        ],
      },
      {
        lineHeader: 'A',
        descriptionHeader: 'Activity',
        descriptionLines: ['co robią, co sie dzieje'],
        lineValues: [
          {
            valueType: VALUE_TYPES_ENUM.textArea,
          },
        ],
      },
      {
        lineHeader: 'L',
        descriptionHeader: 'Location',
        descriptionLines: ['lokalizacja MGRS, azymut itp'],
        lineValues: [
          {
            label: 'E',
            description: 'ich',
            valueType: VALUE_TYPES_ENUM.MGRS1km,
          },
          {
            label: 'F',
            description: 'nasza',
            valueType: VALUE_TYPES_ENUM.MGRS1km,
          },
        ],
      },
      {
        lineHeader: 'U',
        descriptionHeader: 'Uniforms',
        descriptionLines: [
          'charakterystyczne cechy wygladu, ubiory, maskowanie, flagi, barwy',
        ],
        lineValues: [
          {
            valueType: VALUE_TYPES_ENUM.textArea,
          },
        ],
      },
      {
        lineHeader: 'T',
        descriptionHeader: 'Time',
        descriptionLines: ['czas obserwacji DTG DDHHMMTmmmYY'],
        lineValues: [
          {
            label: 'Czas',
            valueType: VALUE_TYPES_ENUM.DTG,
          },
        ],
      },
      {
        lineHeader: 'E',
        descriptionHeader: 'Equipment',
        descriptionLines: ['bron, sprzet, wyposazenie'],
        lineValues: [
          {
            valueType: VALUE_TYPES_ENUM.textArea,
          },
        ],
      },
    ],
  },
  {
    name: 'Bazowy raport do edycji',
    lines: [
      {
        lineHeader: '1',
        descriptionHeader: 'naglowek - krotki opis, wymagany',
        descriptionLines: [
          'opis linii raportu, opcjonalny, moze byc dlugi, sam sie podzieli i dopasuje',
          'druga linia opisu',
        ],
        lineValues: [
          {
            label: 'etykieta',
            description: 'pojasnienie etykiety',
            valueType: VALUE_TYPES_ENUM.textLine,
          },
        ],
      },
      {
        lineHeader: 'A',
        descriptionHeader: 'kolejna linia',
        descriptionLines: ['kolejny opis'],
        lineValues: [
          {
            label: 'etykieta23',
            valueType: VALUE_TYPES_ENUM.textLine,
          },
        ],
      },
      {
        lineHeader: 'K',
        descriptionHeader: 'kolejna linia, bez opisu',
        lineValues: [
          {
            label: 'FREQ123',
            valueType: VALUE_TYPES_ENUM.longNumber,
          },
        ],
      },
      {
        lineHeader: 'Z',
        descriptionHeader: 'kolejna linia',
        lineValues: [
          {
            label: 'E1',
            description: 'opis do etykiety 1, etykieta i opis sa opcjonalne',
            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
          {
            description: 'w tej linii brak etykiety',
            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
          {
            label: 'a tu brak opisu',
            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
        ],
      },
      {
        lineHeader: '4',
        descriptionHeader: 'Typy danych',
        descriptionLines: [
          'wszytskie typu danych',
          'pole valueType: VALUE_TYPES_ENUM.shortNumber to typ danych',
          'pole value: to wartosc, tutaj wszzystkie puste',
        ],
        lineValues: [
          {
            label: 'A',
            description: 'shortNumber - krotka liczba 0-99, 0 tzn brak',
            valueType: VALUE_TYPES_ENUM.shortNumber,
          },
          {
            label: 'B',
            description:
              'longNumber - dluga dowolna liczba, na komorce pojawia sie klawiaturka z samymi cyferkami ',
            valueType: VALUE_TYPES_ENUM.longNumber,
          },
          {
            label: 'C',
            description:
              'DTG - czas w formacie DTG, kalendarz z boku pobiera aktualny czas',
            valueType: VALUE_TYPES_ENUM.DTG,
          },
          {
            label: 'D',
            description:
              'MGRS1km - MGRS dokladnosc 1km, celownik sam pobiera dane (tzreba zezwolic przegladarce)',
            valueType: VALUE_TYPES_ENUM.MGRS1km,
          },
          {
            label: 'D',
            description: 'MGRS1m - jw ale dokladnosc 1m',
            valueType: VALUE_TYPES_ENUM.MGRS1m,
          },
          {
            label: 'O',
            description: 'bool - checkbox, dwa stany, tak/nie',
            valueType: VALUE_TYPES_ENUM.bool,
          },
          {
            label: 'O',
            description:
              'textArea - duzo tekstu, 3 linie ale mozna powiekszyc uchwytem w prawym dolnym rogu, w raporcie bedzie caly tekst',
            valueType: VALUE_TYPES_ENUM.textArea,
          },
          {
            label: 'O',
            description:
              'textLine - jedna linia tekstu, moze byc dluga, jesli tutaj sie nei zmiesci ale w raporcie bedzie cala',
            valueType: VALUE_TYPES_ENUM.textLine,
          },
        ],
      },
    ],
  },
];
