import { Component, Input, OnInit } from '@angular/core';
import { ICheatsheetsData, IWaveFreqLengthPair } from 'src/app/models/cheatsheet-data.model';
import { AppDataService } from 'src/app/services/app-data.service';
import { AppSettingsService } from 'src/app/services/app-settings.service';
import { AppService } from 'src/app/services/app.service';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-kf-antenna-calculator',
  templateUrl: './kf-antenna-calculator.component.html',
  styleUrls: ['./kf-antenna-calculator.component.scss'],
})
export class KfAntennaCalculatorComponent implements OnInit {
  @Input() cheatsheetsData?: ICheatsheetsData;
  wavesFreqsLengthsPairs?: IWaveFreqLengthPair[] = [];
  angles = [150, 160, 170]; //km do saved defaults
  shrinkFactor = 0.97; //km do saved defaults

  speedOfLight = 299792458; //c — speedOfLight: 299 792 458 m/s
  isCollapsed = false;
  anglesHeights: { angle: number; height: number }[] = []; //km do saved defaults

  constructor(
    private coreService: CoreService,
    private appService: AppService,
    private appDataService: AppDataService,
    private appSettingsService: AppSettingsService
  ) {}
  ngOnInit(): void {
    this.wavesFreqsLengthsPairs = this.cheatsheetsData?.wavesFreqsLengthPairs ?? [{ freq: 5, length: 0 }];
    this.wavesFreqsLengthsPairs.forEach((p) => this.udpateLength(p));

    this.angles = this.cheatsheetsData?.angles ?? this.angles;
    this.angles.map((x) => this.anglesHeights.push({ angle: x, height: this.getHeight(x) }));

    this.shrinkFactor = this.cheatsheetsData?.shrinkFactor ?? this.shrinkFactor;
  }

  updateFreq(freqLengthPair: IWaveFreqLengthPair) {
    if (freqLengthPair.length > 0) {
      let freq = this.speedOfLight / ((freqLengthPair.length / this.shrinkFactor) * 4);
      freq = freq / 1000000; //in [MHz]
      freqLengthPair.freq = this.coreService.round(freq, 2);

      if (this.wavesFreqsLengthsPairs?.indexOf(freqLengthPair) === 0) {
        this.anglesHeights.forEach((a) => this.updateHeight(a));
      }
    }
  }

  udpateLength(freqLengthPair: IWaveFreqLengthPair) {
    if (freqLengthPair.freq > 0) {
      let length = this.speedOfLight / (freqLengthPair.freq * 1000000);
      length = (this.shrinkFactor * length) / 4; //in [m]
      freqLengthPair.length = this.coreService.round(length, 2);

      if (this.wavesFreqsLengthsPairs?.indexOf(freqLengthPair) === 0) {
        this.anglesHeights.forEach((a) => this.updateHeight(a));
      }
    }
  }

  applyShrinkFactor() {
    throw new Error('Method not implemented.');
  }

  updateHeight(angleheight: { angle: number; height: number }) {
    angleheight.height = this.getHeight(angleheight.angle);
  }

  getHeight(angle: number) {
    angle = this.coreService.deg2Rad(angle / 2);
    let cos = Math.cos(angle);
    return this.coreService.round((this.wavesFreqsLengthsPairs?.[0]?.length ?? 0) * cos, 2);
  }
}
