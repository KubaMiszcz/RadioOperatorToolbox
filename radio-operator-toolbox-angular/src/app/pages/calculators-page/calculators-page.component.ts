import { CoreService } from 'src/app/services/core.service';
import { Component } from '@angular/core';
import { IWaveFreqLengthPair } from 'src/app/models/cheatsheet-data.model';
import { AppDataService } from 'src/app/services/app-data.service';
import { AppSettingsService } from 'src/app/services/app-settings.service';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-calculators-page',
  templateUrl: './calculators-page.component.html',
  styleUrls: ['./calculators-page.component.scss'],
})
export class CalculatorsPageComponent {
  wavesFreqsLengthsPairs = this.appDataService.appData.cheatsheetData?.wavesFreqsLengthPairs;
  speedOfLight = 299792458; //c — speedOfLight: 299 792 458 m/s
  shrinkFactor = 0.97;

  constructor(
    private coreService: CoreService,
    private appService: AppService,
    private appDataService: AppDataService,
    private appSettingsService: AppSettingsService
  ) {
    this.wavesFreqsLengthsPairs = this.appDataService.appData.cheatsheetData?.wavesFreqsLengthPairs;

    this.wavesFreqsLengthsPairs?.forEach((p) => this.udpateLength(p));
  }

  updateFreq(wave: IWaveFreqLengthPair) {
    if (wave.length > 0) {
      let result = this.speedOfLight / (wave.length * 4);
      result = result / 1000000; //in [MHz]
      wave.freq = this.coreService.round(result, 2);
    }
  }

  udpateLength(wave: IWaveFreqLengthPair) {
    if (wave.freq > 0) {
      let result = this.speedOfLight / (wave.freq * 1000000);
      result = (this.shrinkFactor * result) / 4; //in [m]
      wave.length = this.coreService.round(result, 2);
    }
  }

  udpateResults() {
    throw new Error('Method not implemented.');
  }

  // update(wave: IWaveFreqLengthPair) {
  //   if (wave.freq > 0) {
  //     wave.length = Math.round((10 * this.speedOfLight) / (wave.freq * 1000000)) / 10;
  //   }
  // }
}
