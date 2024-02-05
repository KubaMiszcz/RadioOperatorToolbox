import { AppDataService } from 'src/app/services/app-data.service';
import { AppService } from './../../services/app.service';
import { Component } from '@angular/core';
import { AppSettingsService } from 'src/app/services/app-settings.service';
import { IWaveFreqLengthPair } from 'src/app/models/cheatsheet-data.model';

@Component({
  selector: 'app-cheatsheet-page',
  templateUrl: './cheatsheet-page.component.html',
  styleUrls: ['./cheatsheet-page.component.scss'],
})
export class CheatsheetComponent {
  wavesFreqsLengthsPairs =
    this.appDataService.appData.cheatsheetData?.wavesFreqsLengthPairs;
  speedOfLight = 299792458; //c — speedOfLight: 299 792 458 m/s
  helpLines = helpLines;

  constructor(
    private appService: AppService,
    private appDataService: AppDataService,
    private appSettingsService: AppSettingsService
  ) {
    this.wavesFreqsLengthsPairs =
      this.appDataService.appData.cheatsheetData?.wavesFreqsLengthPairs;

    this.wavesFreqsLengthsPairs?.forEach((p) => this.udpateLength(p));
  }

  updateFreq(wave: IWaveFreqLengthPair) {
    if (wave.length > 0) {
      wave.freq =
        Math.round((10 * this.speedOfLight) / wave.length / 1000000) / 10 / 2;
    }
  }

  udpateLength(wave: IWaveFreqLengthPair) {
    if (wave.freq > 0) {
      wave.length =
        Math.round((10 * this.speedOfLight) / (wave.freq * 1000000)) / 10 / 2;
    }
  }

  update(wave: IWaveFreqLengthPair) {
    if (wave.freq > 0) {
      wave.length =
        Math.round((10 * this.speedOfLight) / (wave.freq * 1000000)) / 10;
    }
  }
}

const helpLines = `
- kalkulatory itp wskazowki,
- sciezki do menu i zmiany ustawien
`;
