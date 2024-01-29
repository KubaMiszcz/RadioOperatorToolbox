import { IReport, VALUE_TYPES_ENUM } from 'src/app/models/report.model';

export const exampleMEDEVAC_PL: IReport = {
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
          valueType: VALUE_TYPES_ENUM.textLine,
          value: '34UEA 12345 54321',
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
          value: 'trololotrololotrololotrololo',
        },
      ],
    },
    {
      lineHeader: '3',
      descriptionHeader:'number of patients by precedence',
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
      descriptionLines: [
        'Wymagany sprzęt specjalistyczny',
        'A – brak (None)',
        'B – podwieszenie (Hoist)',
        'C – wyciqgarka (Extraction Equipment)',
        'D — respirator (Ventilator)',
        'O: inne, podać szczegóły',
      ],
      lineValues: [
        {
          label: 'A',
          value: 2,
          valueType: VALUE_TYPES_ENUM.shortNumber,
        },
        {
          label: 'B',
          valueType: VALUE_TYPES_ENUM.shortNumber,
        },
        {
          label: 'C',
          value: 2,
          valueType: VALUE_TYPES_ENUM.shortNumber,
        },
        {
          label: 'D',
          valueType: VALUE_TYPES_ENUM.shortNumber,
        },
        {
          label: 'O',
          value:
            'Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page.',
          valueType: VALUE_TYPES_ENUM.textArea,
        },
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
        {
          label: 'A',
          valueType: VALUE_TYPES_ENUM.shortNumber,
        },
        {
          label: 'L',
          valueType: VALUE_TYPES_ENUM.shortNumber,
          value: 2,
        },
        {
          label: 'W',
          valueType: VALUE_TYPES_ENUM.shortNumber,
        },
        {
          label: 'E',
          valueType: VALUE_TYPES_ENUM.shortNumber,
        },
        {
          label: 'O',
          valueType: VALUE_TYPES_ENUM.textArea,
        },
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
        { label: 'N', valueType: VALUE_TYPES_ENUM.bool, value: true },
        { label: 'P', valueType: VALUE_TYPES_ENUM.bool, value: true },
        { label: 'E', valueType: VALUE_TYPES_ENUM.bool, value: true },
        { label: 'X', valueType: VALUE_TYPES_ENUM.bool, value: true },
      ],
    },
    {
      lineHeader: '6',
      isInPeacetime: true,
      descriptionHeader: '6 IN PEACETIME',
      descriptionLines: ['number and type of wound, injury, ilness'],
      lineValues: [
        {
          label: 'Info',
          valueType: VALUE_TYPES_ENUM.textArea,
        },
      ],
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
        { label: 'B', valueType: VALUE_TYPES_ENUM.bool, value: true },
        { label: 'C', valueType: VALUE_TYPES_ENUM.bool },
        { label: 'D', valueType: VALUE_TYPES_ENUM.bool },
        {
          label: 'E',
          valueType: VALUE_TYPES_ENUM.textLine,
        },
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
        {
          label: 'A',
          valueType: VALUE_TYPES_ENUM.shortNumber,
        },
        {
          label: 'B',
          valueType: VALUE_TYPES_ENUM.shortNumber,
        },
        {
          label: 'C',
          valueType: VALUE_TYPES_ENUM.shortNumber,
          value: 2,
        },
        {
          label: 'D',
          valueType: VALUE_TYPES_ENUM.shortNumber,
        },
        {
          label: 'E',
          valueType: VALUE_TYPES_ENUM.shortNumber,
          value: 2,
        },
        {
          label: 'F',
          valueType: VALUE_TYPES_ENUM.shortNumber,
        },
        {
          label: 'G',
          valueType: VALUE_TYPES_ENUM.shortNumber,
        },
        {
          label: 'H',
          valueType: VALUE_TYPES_ENUM.shortNumber,
        },
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
        { label: 'B', valueType: VALUE_TYPES_ENUM.bool, value: true },
        { label: 'C', valueType: VALUE_TYPES_ENUM.bool },
        {
          label: 'O',
          valueType: VALUE_TYPES_ENUM.textArea,
        },
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
          valueType: VALUE_TYPES_ENUM.textArea,
          value: 'safdsa adsf ads fa d',
        },
      ],
    },
  ],
};

export const exampleMEDEVAC_EN: IReport = {
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
          valueType: VALUE_TYPES_ENUM.textLine,
          value: '34UEA 12345 54321',
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
          value: 'trololotrololotrololotrololo',
        },
      ],
    },
    {
      lineHeader: '3',
      descriptionHeader: 'number of patients by precedence',
      descriptionLines: [
        'Liczba pacjentów ze względu na priorytet',
        // 'A – Urgent pilny nieoperacyjny (ewakuacja do 2 godzin)',
        // 'B – Urgent-surgical – pilny operacyjny (ewakuacja do 2 godzin)',
        // 'C – Priority - priorytetowy (ewakuacja do 4 godzin)',
        // 'D – Routine - rutynowy (ewakuacja do 24 godzin)',
        // 'E – Convenience - ewakuacja, gdy bedzie to możliwe',
      ],
      lineValues: [
        {
          label: 'A – Urgent pilny nieoperacyjny (ewakuacja do 2 godzin)',
          valueType: VALUE_TYPES_ENUM.shortNumber,
          value: 2,
        },
        {
          label:
            'B – Urgent-surgical – pilny operacyjny (ewakuacja do 2 godzin)',
          valueType: VALUE_TYPES_ENUM.shortNumber,
          value: 2,
        },
        {
          label: 'C – Priority - priorytetowy (ewakuacja do 4 godzin)',
          valueType: VALUE_TYPES_ENUM.shortNumber,
        },
        {
          label: 'D – Routine - rutynowy (ewakuacja do 24 godzin)',
          valueType: VALUE_TYPES_ENUM.shortNumber,
        },
        {
          label: 'E – Convenience - ewakuacja, gdy bedzie to możliwe',
          valueType: VALUE_TYPES_ENUM.shortNumber,
        },
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
        {
          label: 'A',
          value: 2,
          valueType: VALUE_TYPES_ENUM.shortNumber,
        },
        {
          label: 'B',
          valueType: VALUE_TYPES_ENUM.shortNumber,
        },
        {
          label: 'C',
          value: 2,
          valueType: VALUE_TYPES_ENUM.shortNumber,
        },
        {
          label: 'D',
          valueType: VALUE_TYPES_ENUM.shortNumber,
        },
        {
          label: 'O',
          value:
            'Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page.',
          valueType: VALUE_TYPES_ENUM.textArea,
        },
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
        {
          label: 'A',
          valueType: VALUE_TYPES_ENUM.shortNumber,
        },
        {
          label: 'L',
          valueType: VALUE_TYPES_ENUM.shortNumber,
          value: 2,
        },
        {
          label: 'W',
          valueType: VALUE_TYPES_ENUM.shortNumber,
        },
        {
          label: 'E',
          valueType: VALUE_TYPES_ENUM.shortNumber,
        },
        {
          label: 'O',
          valueType: VALUE_TYPES_ENUM.textArea,
        },
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
        { label: 'N', valueType: VALUE_TYPES_ENUM.bool, value: true },
        { label: 'P', valueType: VALUE_TYPES_ENUM.bool, value: true },
        { label: 'E', valueType: VALUE_TYPES_ENUM.bool, value: true },
        { label: 'X', valueType: VALUE_TYPES_ENUM.bool, value: true },
      ],
    },
    {
      lineHeader: '6',
      isInPeacetime: true,
      descriptionHeader: '6 IN PEACETIME',
      descriptionLines: ['number and type of wound, injury, ilness'],
      lineValues: [
        {
          label: 'Info',
          valueType: VALUE_TYPES_ENUM.textArea,
        },
      ],
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
        { label: 'B', valueType: VALUE_TYPES_ENUM.bool, value: true },
        { label: 'C', valueType: VALUE_TYPES_ENUM.bool },
        { label: 'D', valueType: VALUE_TYPES_ENUM.bool },
        {
          label: 'E',
          valueType: VALUE_TYPES_ENUM.textLine,
        },
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
        {
          label: 'A',
          valueType: VALUE_TYPES_ENUM.shortNumber,
        },
        {
          label: 'B',
          valueType: VALUE_TYPES_ENUM.shortNumber,
        },
        {
          label: 'C',
          valueType: VALUE_TYPES_ENUM.shortNumber,
          value: 2,
        },
        {
          label: 'D',
          valueType: VALUE_TYPES_ENUM.shortNumber,
        },
        {
          label: 'E',
          valueType: VALUE_TYPES_ENUM.shortNumber,
          value: 2,
        },
        {
          label: 'F',
          valueType: VALUE_TYPES_ENUM.shortNumber,
        },
        {
          label: 'G',
          valueType: VALUE_TYPES_ENUM.shortNumber,
        },
        {
          label: 'H',
          valueType: VALUE_TYPES_ENUM.shortNumber,
        },
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
        { label: 'B', valueType: VALUE_TYPES_ENUM.bool, value: true },
        { label: 'C', valueType: VALUE_TYPES_ENUM.bool },
        {
          label: 'O',
          valueType: VALUE_TYPES_ENUM.textArea,
        },
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
          valueType: VALUE_TYPES_ENUM.textArea,
          value: 'safdsa adsf ads fa d',
        },
      ],
    },
  ],
};
