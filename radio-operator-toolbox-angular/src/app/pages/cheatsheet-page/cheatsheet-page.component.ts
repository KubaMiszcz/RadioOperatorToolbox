import { Component } from '@angular/core';

@Component({
  selector: 'app-cheatsheet-page',
  templateUrl: './cheatsheet-page.component.html',
  styleUrls: ['./cheatsheet-page.component.scss'],
})
export class CheatsheetComponent {
  waves: IWave[] = [];
  speedOfLight = 299792458; //c — speedOfLight: 299 792 458 m/s

  constructor() {
    this.waves.push({ freq: 4, length: 0 });
    this.waves.push({ freq: 6, length: 0 });
    this.waves.push({ freq: 8, length: 0 });
  }

  updateFreq(wave: IWave) {
    if (wave.length > 0) {
      wave.freq =
        Math.round((10 * this.speedOfLight) / wave.length / 1000000) / 10 / 2;
    }
  }

  udpateLength(wave: IWave) {
    if (wave.freq > 0) {
      wave.length =
        Math.round((10 * this.speedOfLight) / (wave.freq * 1000000)) / 10 / 2;
    }
  }

  update(wave: IWave) {
    if (wave.freq > 0) {
      wave.length =
        Math.round((10 * this.speedOfLight) / (wave.freq * 1000000)) / 10;
    }
  }
}

interface IWave {
  freq: number;
  length: number;
}
