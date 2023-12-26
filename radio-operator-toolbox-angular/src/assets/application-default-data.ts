import { IAppData } from "src/app/models/appData";

export const APP_DATA_JSON: IAppData = {
  procedures: [
    {
      name: 'MSBS',
      stages: [
        { name: 'start', actions: [], nextBlock: { name: 'step1' } },
        {
          name: 'step1',
          actions: [
            { name: 'palec ze spustu', audioFileName: 'palec ze spustu.mp3' },
            {
              name: 'zabezpiecz bron',
              audioFileName: 'zabezpiecz bron.mp3',
              delay_sec: 1,
              isDisabled: true,
            },
            {
              name: 'cofnij i zablokuj suwadlo',
              audioFileName: 'cofnij i zablokuj suwadlo.mp3',
              delay_sec: 1,
            },
          ],
          nextBlock: { name: 'step2' },
        },
        {
          name: 'step2',
          actions: [
            {
              name: 'podepnij magazynek',
              audioFileName: 'podepnij magazynek.mp3',
              isDisabled: true,
            },
            { name: 'obroc bron', audioFileName: 'obroc bron.mp3' },
            { name: 'patrz na komore', audioFileName: 'patrz na komore.mp3' },
            { name: 'zrzuc suwadlo', audioFileName: 'zrzuc suwadlo.mp3' },
          ],
          nextBlock: { name: 'czy naboj podany' },
        },
        {
          name: 'naboj podany',
          actions: [
            { name: 'niska gotowosc', audioFileName: 'niska gotowosc.mp3' },
            { name: 'czekaj na sygnal', audioFileName: 'czekaj na sygnal.mp3' },
          ],
          nextBlock: { name: 'cel' },
        },
        {
          name: 'cel',
          actions: [{ name: 'cel', audioFileName: 'cel.mp3' }],
          nextBlock: { name: 'step4' },
        },
        {
          name: 'step4',
          actions: [
            { name: 'przyceluj', audioFileName: 'przyceluj.mp3' },
            { name: 'odbezpiecz bron', audioFileName: 'odbezpiecz bron.mp3' },
          ],
          nextBlock: { name: 'strzelaj dalej' },
        },
        {
          name: 'strzelaj dalej',
          actions: [{ name: 'strzelaj', audioFileName: 'strzelaj.mp3' }],
          nextBlock: { name: 'czy strzelilo' },
        },
        {
          name: 'cel trafiony',
          actions: [
            { name: 'palec ze spustu', audioFileName: 'palec ze spustu.mp3' },
            { name: 'zabezpiecz bron', audioFileName: 'zabezpiecz bron.mp3' },
          ],
          nextBlock: { name: 'naboj podany' },
        },
        {
          name: 'deadEnd',
          actions: [{ name: 'koniec', audioFileName: 'koniec.mp3' }],
          nextBlock: { name: '' },
        },
      ],
      deciders: [
        {
          name: 'czy naboj podany',
          audioFileName: 'czy naboj podany',
          positiveChance: 0.9,
          positiveBlock: { name: 'naboj podany' },
          negativeBlock: { name: 'deadEnd' },
        },
        {
          name: 'czy strzelilo',
          audioFileName: 'czy strzelilo.mp3',
          positiveChance: 0.9,
          positiveBlock: { name: 'czy cel trafiony' },
          negativeBlock: { name: 'deadEnd' },
        },
        {
          name: 'czy cel trafiony',
          audioFileName: 'czy cel trafiony.mp3',
          positiveChance: 0.6,
          positiveBlock: { name: 'cel trafiony' },
          negativeBlock: { name: 'strzelaj dalej' },
        },
      ],
      magazineCapacity: 30,
      defaultFailureChance: 0.25,
      isDefault: false,
    },
    {
      name: '9mm',
      stages: [],
      deciders: [],
      magazineCapacity: 12,
      defaultFailureChance: 0.25,
      isDefault: false,
    },
    {
      name: '3-way decider',
      stages: [
        { name: 'Krok4', actions: [], nextBlock: { name: '' } },
        { name: 'Krok3', actions: [], nextBlock: { name: '' } },
        { name: 'Krok2s', actions: [], nextBlock: { name: '' } },
        {
          name: 'start',
          actions: [{ name: 'NowaAkcja', audioFileName: '' }],
          nextBlock: { name: '' },
        },
      ],
      deciders: [
        {
          name: 'Decyzja3',
          audioFileName: '',
          positiveChance: 0.5,
          positiveBlock: { name: '' },
          negativeBlock: { name: '' },
        },
        {
          name: 'Decyzja2',
          audioFileName: '',
          positiveChance: 0.5,
          positiveBlock: { name: '' },
          negativeBlock: { name: '' },
        },
        {
          name: 'Decyzja1',
          audioFileName: '',
          positiveChance: 0.5,
          positiveBlock: { name: '' },
          negativeBlock: { name: '' },
        },
      ],
      magazineCapacity: 30,
      defaultFailureChance: 0.5,
      isDefault: false,
    },
    {
      name: 'Procedura1',
      stages: [
        {
          name: 'Krok1',
          actions: [
            { name: 'NowaAkcja1', audioFileName: 'zabezpiecz bron.mp3' },
            { name: 'NowaAkcja2', audioFileName: '' },
            { name: 'NowaAkcja3', audioFileName: 'palec ze spustu.mp3' },
            { name: 'NowaAkcja4', audioFileName: 'zrzuc suwadlo.mp3' },
          ],
          nextBlock: { name: '' },
        },
      ],
      deciders: [],
      magazineCapacity: 30,
      defaultFailureChance: 0.5,
      isDefault: true,
    },
  ],
  audioFilesPath: 'assets/audio/',
  maxPlaylistLength: 50,
  defaultAudioExtension: '.mp3',
  emptyAudioFileName: 'pause-1sec-delay.mp3'
};