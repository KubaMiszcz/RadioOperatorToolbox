import { Guid } from 'guid-typescript';
import { IAppData } from 'src/app/models/app-data.model';
import { TRANSMIT_DIRECTION } from 'src/app/models/constants/enums';
import { IReport, VALUE_TYPES_ENUM } from 'src/app/models/report.model';
import { Team } from 'src/app/models/team.model';
import { AppService } from 'src/app/services/app.service';


export const APP_EXAMPLE_DATA_JSON: IAppData = {
  reports: [
    {
      name: 'EXAMPLE MEDEVAC Report',
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
              value: '34U FA 711 428',
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
              value: 211.321223,
            },
            {
              label: 'MY CALLSIGN',
              valueType: VALUE_TYPES_ENUM.textLine,
              value: 'BURSZTYNEK-01',
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
              value: 2,
            },
            {
              label: 'B',
              description: 'pilny operacyjny (ewakuacja do 2 godzin)',
              valueType: VALUE_TYPES_ENUM.shortNumber,
              value: 98,
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
              value: 2,
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
              value: 2,
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
              value:
                'Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page.',
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
              value: 2,
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
              value: false,
            },
            {
              label: 'P',
              description: 'możliwa obecność przeciwnika',
              valueType: VALUE_TYPES_ENUM.bool,
              value: true,
            },
            {
              label: 'E',
              description: 'przeciwnik w rejonie podjęcia',
              valueType: VALUE_TYPES_ENUM.bool,
              value: true,
            },
            {
              label: 'X',
              description: 'przeciwnik obecny, wymagana uzbrojona eskorta',
              valueType: VALUE_TYPES_ENUM.bool,
              value: true,
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
              value: true,
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
              value: 2,
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
              value: 2,
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
              value: true,
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
        //       value: 'safdsa adsf ads fa d',
        //     },
        //   ],
        // },
      ],
    },
    {
      name: 'EXAMPLE SALUTE Report',
      isFavourite: true,
      lines: [
        {
          lineHeader: 'S',
          descriptionHeader: 'Size',
          descriptionLines: ['wielkość sił przeciwnika, ilosc ludzi, pojazdów itp'],
          lineValues: [
            {
              valueType: VALUE_TYPES_ENUM.textArea,
              value: 'ok 10 osob, 2 ciezarowki',
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
              value: 'siedza, na cos czekaja',
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
              value: 'azymut ok 35st, ok 1km od nas',
            },
            {
              label: 'F',
              description: 'nasza',
              valueType: VALUE_TYPES_ENUM.MGRS1km,
              value: '34 UEA 123 456',
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
              value: 'mundury w maskowaniu, brak oznaczen',
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
              value: '292312ASTY24',
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
              value: 'karabinki, kilka RPG, skrzynie na pojazdach',
            },
          ],
        },
      ],
    },
  ],
  correspondenceBook: [
    {
      guid: Guid.create().toString(),
      timestamp_DEPR: new Date(),
      timeDTG: '031530ASTY24',
      transmitDirection: TRANSMIT_DIRECTION.INCOMING,
      recipientCodename: 'team2',
      senderCodename: 'team1',
      content: 'meldune1',
    },
    {
      guid: Guid.create().toString(),
      timestamp_DEPR: new Date(),
      timeDTG: '031655ZSTY24',
      transmitDirection: TRANSMIT_DIRECTION.OUTGOING,
      recipientCodename: 'team1',
      senderCodename: 'team2',
      content: 'meldune1',
    },
    {
      guid: Guid.create().toString(),
      timestamp_DEPR: new Date(),
      timeDTG: '031530ASTY24',
      transmitDirection: TRANSMIT_DIRECTION.INCOMING,
      recipientCodename: 'team1',
      senderCodename: 'farewell02',
      content: 'casMEDAVEC c as c as c as',
    },
    {
      guid: Guid.create().toString(),
      timestamp_DEPR: new Date(),
      timeDTG: '031530ASTY24',
      transmitDirection: TRANSMIT_DIRECTION.OUTGOING,
      recipientCodename: 'team1',
      senderCodename: 'bukszpan08',
      content: 'caDALTUR as c as c as c as',
    },
  ],
  notepad: {
    pages: [{ pageContent: 'notatka 1' }, { pageContent: 'notatka 2b' }],
  },
  tdrData: {
    myTeam: { name: '312klp', codename: 'PASIBRZUCH21' },
    teams: [
      { name: '312klp', codename: 'PASIBRZUCH21' },
      { name: '3121plp', codename: 'ROZPUSTNIK22' },
      {
        name: '3122plp',
        codename: 'BURSZTYNEK23',
        isFavourite: true,
      },
      { name: '3123plp', codename: 'SUPERGLINA25' },
      { name: '', codename: '' },
      { name: '', codename: '' },
      { name: '3124plp', codename: 'GWIAZDOREK24' },
    ],
    alerts: [],
  },
  cheatsheetData: {
    wavesFreqsLengthPairs: [
      { freq: 4, length: 0 },
      { freq: 6, length: 0 },
      { freq: 8, length: 0 },
    ],
  },
};




























// example reports
// export const exampleSALUTE_PL: IReport = {
//   name: 'EXAMPLE SALUTE Report',
//   isFavourite: true,
//   lines: [
//     {
//       lineHeader: 'S',
//       descriptionHeader: 'Size',
//       descriptionLines: ['wielkość sił przeciwnika, ilosc ludzi, pojazdów itp'],
//       lineValues: [
//         {
//           valueType: VALUE_TYPES_ENUM.textArea,
//           value: 'ok 10 osob, 2 ciezarowki',
//         },
//       ],
//     },
//     {
//       lineHeader: 'A',
//       descriptionHeader: 'Activity',
//       descriptionLines: ['co robią, co sie dzieje'],
//       lineValues: [
//         {
//           valueType: VALUE_TYPES_ENUM.textArea,
//           value: 'siedza, na cos czekaja',
//         },
//       ],
//     },
//     {
//       lineHeader: 'L',
//       descriptionHeader: 'Location',
//       descriptionLines: ['lokalizacja MGRS, azymut itp'],
//       lineValues: [
//         {
//           label: 'E',
//           description: 'ich',
//           valueType: VALUE_TYPES_ENUM.MGRS,
//           value: 'azymut ok 35st, ok 1km od nas',
//         },
//         {
//           label: 'F',
//           description: 'nasza',
//           valueType: VALUE_TYPES_ENUM.MGRS,
//           value: '34 UEA 123 456',
//         },
//       ],
//     },
//     {
//       lineHeader: 'U',
//       descriptionHeader: 'Uniforms',
//       descriptionLines: [
//         'charakterystyczne cechy wygladu, ubiory, maskowanie, flagi, barwy',
//       ],
//       lineValues: [
//         {
//           valueType: VALUE_TYPES_ENUM.textArea,
//           value: 'mundury w maskowaniu, brak oznaczen',
//         },
//       ],
//     },
//     {
//       lineHeader: 'T',
//       descriptionHeader: 'Time',
//       descriptionLines: ['czas obserwacji DTG DDHHMMTmmmYY'],
//       lineValues: [
//         {
//           label: 'Czas',
//           valueType: VALUE_TYPES_ENUM.DTG,
//           value: '292312ASTY24',
//         },
//       ],
//     },
//     {
//       lineHeader: 'E',
//       descriptionHeader: 'Equipment',
//       descriptionLines: ['bron, sprzet, wyposazenie'],
//       lineValues: [
//         {
//           valueType: VALUE_TYPES_ENUM.textArea,
//           value: 'karabinki, kilka RPG, skrzynie na pojazdach',
//         },
//       ],
//     },
//   ],
// };

// export const exampleMEDEVAC_EN: IReport = {
//   name: 'MEDEVAC Report EXAMPLE',
//   isFavourite: true,
//   lines: [
//     {
//       lineHeader: '1',
//       descriptionHeader: 'LOCATION AT PICKUP SITE',
//       descriptionLines: ['Miejsce podjęcia rannych (MGRS)'],
//       lineValues: [
//         {
//           label: 'MGRS',
//           valueType: VALUE_TYPES_ENUM.textLine,
//           value: '34UEA 12345 54321',
//         },
//       ],
//     },
//     {
//       lineHeader: '2',
//       descriptionHeader: 'FREQENCY AND MY CALLSIGN AT PICKUP SITE',
//       descriptionLines: [
//         'częstotliwość radia i nasz kryptonim, na jakim pracuje pododdział oczekujący na MEDEVAC w miejscu ewakuacji',
//       ],
//       lineValues: [
//         {
//           label: 'FREQ',
//           valueType: VALUE_TYPES_ENUM.longNumber,
//           value: 211.321223,
//         },
//         {
//           label: 'MY CALLSIGN',
//           valueType: VALUE_TYPES_ENUM.textLine,
//           value: 'trololotrololotrololotrololo',
//         },
//       ],
//     },
//     {
//       lineHeader: '3',
//       descriptionHeader: 'number of patients by precedence',
//       descriptionLines: [
//         'Liczba pacjentów ze względu na priorytet',
//         // 'A – Urgent pilny nieoperacyjny (ewakuacja do 2 godzin)',
//         // 'B – Urgent-surgical – pilny operacyjny (ewakuacja do 2 godzin)',
//         // 'C – Priority - priorytetowy (ewakuacja do 4 godzin)',
//         // 'D – Routine - rutynowy (ewakuacja do 24 godzin)',
//         // 'E – Convenience - ewakuacja, gdy bedzie to możliwe',
//       ],
//       lineValues: [
//         {
//           label: 'A – Urgent pilny nieoperacyjny (ewakuacja do 2 godzin)',
//           valueType: VALUE_TYPES_ENUM.shortNumber,
//           value: 2,
//         },
//         {
//           label:
//             'B – Urgent-surgical – pilny operacyjny (ewakuacja do 2 godzin)',
//           valueType: VALUE_TYPES_ENUM.shortNumber,
//           value: 2,
//         },
//         {
//           label: 'C – Priority - priorytetowy (ewakuacja do 4 godzin)',
//           valueType: VALUE_TYPES_ENUM.shortNumber,
//         },
//         {
//           label: 'D – Routine - rutynowy (ewakuacja do 24 godzin)',
//           valueType: VALUE_TYPES_ENUM.shortNumber,
//         },
//         {
//           label: 'E – Convenience - ewakuacja, gdy bedzie to możliwe',
//           valueType: VALUE_TYPES_ENUM.shortNumber,
//         },
//       ],
//     },
//     {
//       lineHeader: '4',
//       descriptionHeader: 'SPECIAL EQUIPMENT',
//       descriptionLines: [
//         'Wymagany sprzęt specjalistyczny',
//         'A – brak (None)',
//         'B – podwieszenie (Hoist)',
//         'C – wyciqgarka (Extraction Equipment)',
//         'D — respirator (Ventilator)',
//         'O: inne, podać szczegóły',
//       ],
//       lineValues: [
//         {
//           label: 'A',
//           value: 2,
//           valueType: VALUE_TYPES_ENUM.shortNumber,
//         },
//         {
//           label: 'B',
//           valueType: VALUE_TYPES_ENUM.shortNumber,
//         },
//         {
//           label: 'C',
//           value: 2,
//           valueType: VALUE_TYPES_ENUM.shortNumber,
//         },
//         {
//           label: 'D',
//           valueType: VALUE_TYPES_ENUM.shortNumber,
//         },
//         {
//           label: 'O',
//           value:
//             'Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page.',
//           valueType: VALUE_TYPES_ENUM.textArea,
//         },
//       ],
//     },
//     {
//       lineHeader: '5',
//       descriptionHeader: 'NUMBER OF PATIENTS BY TYPE',
//       descriptionLines: [
//         'Liczba pacjentów według mobilności',
//         'A — siedzący (Ambulatory)',
//         'L — na noszach (Litter)',
//         'W — chodzący',
//         'E — żołnierz będący eskortą dla poszkodowanego',
//         'O: inna sytuacja, podać szczegóły',
//       ],
//       lineValues: [
//         {
//           label: 'A',
//           valueType: VALUE_TYPES_ENUM.shortNumber,
//         },
//         {
//           label: 'L',
//           valueType: VALUE_TYPES_ENUM.shortNumber,
//           value: 2,
//         },
//         {
//           label: 'W',
//           valueType: VALUE_TYPES_ENUM.shortNumber,
//         },
//         {
//           label: 'E',
//           valueType: VALUE_TYPES_ENUM.shortNumber,
//         },
//         {
//           label: 'O',
//           valueType: VALUE_TYPES_ENUM.textArea,
//         },
//       ],
//     },
//     {
//       lineHeader: '6',
//       descriptionHeader: 'SECURITY IN PICKUP SITE (WARTIME)',
//       descriptionLines: [
//         'Bezpieczeństwo w strefie podjęcia',
//         'N - brak przeciwnika',
//         'P - możliwa obecność przeciwnika',
//         'E - przeciwnik w rejonie podjęcia',
//         'X - przeciwnik obecny, wymagana uzbrojona eskorta',
//       ],
//       lineValues: [
//         { label: 'N', valueType: VALUE_TYPES_ENUM.bool, value: true },
//         { label: 'P', valueType: VALUE_TYPES_ENUM.bool, value: true },
//         { label: 'E', valueType: VALUE_TYPES_ENUM.bool, value: true },
//         { label: 'X', valueType: VALUE_TYPES_ENUM.bool, value: true },
//       ],
//     },
//     // {
//     //   lineHeader: '6',
//     //   isInPeacetime: true,
//     //   descriptionHeader: '6 IN PEACETIME',
//     //   descriptionLines: ['number and type of wound, injury, ilness'],
//     //   lineValues: [
//     //     {
//     //       label: 'Info',
//     //       valueType: VALUE_TYPES_ENUM.textArea,
//     //     },
//     //   ],
//     // },
//     {
//       lineHeader: '7',
//       descriptionHeader: 'MARKING OF PICKUP SITE',
//       descriptionLines: [
//         'Metoda oznakowania strefy podjęcia',
//         'A - panel',
//         'B - petardy',
//         'C - dym',
//         'D - brak',
//         'E: inne, np. lightstic',
//       ],
//       lineValues: [
//         { label: 'A', valueType: VALUE_TYPES_ENUM.bool },
//         { label: 'B', valueType: VALUE_TYPES_ENUM.bool, value: true },
//         { label: 'C', valueType: VALUE_TYPES_ENUM.bool },
//         { label: 'D', valueType: VALUE_TYPES_ENUM.bool },
//         {
//           label: 'E',
//           valueType: VALUE_TYPES_ENUM.textLine,
//         },
//       ],
//     },
//     {
//       lineHeader: '8',
//       descriptionHeader: 'PATIENT NATIONALITY AND STATUS',
//       descriptionLines: [
//         'Liczba pacjentów wg narodowości/statusu.',
//         'A — żołnierz NATO (swój) ',
//         'B — cywil NATO (swój) ',
//         'C — żołnierz spoza NATO ',
//         'D — cywile inni niż z NATO ',
//         'E — zatrzymani, jeńcy wojenni (POW) ',
//         'F — wysoce wartościowy (wymagana eskorta), miejscowy tłumacz ',
//         'G — cywile ranni na skutek działań sił własnych ',
//         'H — Dziecko',
//       ],
//       lineValues: [
//         {
//           label: 'A',
//           valueType: VALUE_TYPES_ENUM.shortNumber,
//         },
//         {
//           label: 'B',
//           valueType: VALUE_TYPES_ENUM.shortNumber,
//         },
//         {
//           label: 'C',
//           valueType: VALUE_TYPES_ENUM.shortNumber,
//           value: 2,
//         },
//         {
//           label: 'D',
//           valueType: VALUE_TYPES_ENUM.shortNumber,
//         },
//         {
//           label: 'E',
//           valueType: VALUE_TYPES_ENUM.shortNumber,
//           value: 2,
//         },
//         {
//           label: 'F',
//           valueType: VALUE_TYPES_ENUM.shortNumber,
//         },
//         {
//           label: 'G',
//           valueType: VALUE_TYPES_ENUM.shortNumber,
//         },
//         {
//           label: 'H',
//           valueType: VALUE_TYPES_ENUM.shortNumber,
//         },
//       ],
//     },
//     {
//       lineHeader: '9',
//       descriptionHeader: 'NBC CONTAMINATION if exists (WARTIME)',
//       descriptionLines: [
//         'Zagrożenie skażeniem, uwarunkowania taktyczne i inne informacje: ',
//         'N - jądrowe',
//         'B - biologiczne ',
//         'C - chemiczne ',
//         'O: inne informacje (np. czas dotarcia do miejsca podjęcia)',
//       ],
//       lineValues: [
//         { label: 'N', valueType: VALUE_TYPES_ENUM.bool },
//         { label: 'B', valueType: VALUE_TYPES_ENUM.bool, value: true },
//         { label: 'C', valueType: VALUE_TYPES_ENUM.bool },
//         {
//           label: 'O',
//           valueType: VALUE_TYPES_ENUM.textArea,
//         },
//       ],
//     },
//     // {
//     //   lineHeader: '9',
//     //   isInPeacetime: true,
//     //   descriptionHeader: '9 IN PEACETIME',
//     //   descriptionLines: ['detailed terrain feature description'],
//     //   lineValues: [
//     //     {
//     //       label: 'Info',
//     //       valueType: VALUE_TYPES_ENUM.textArea,
//     //       value: 'safdsa adsf ads fa d',
//     //     },
//     //   ],
//     // },
//   ],
// };
