import { KeyValue } from '@angular/common';
import { AppService } from 'src/app/services/app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-quick-data',
  templateUrl: './quick-data.component.html',
  styleUrls: ['./quick-data.component.scss'],
})
export class QuickDataComponent {
  currentPosition1m = '';
  currentPosition1km = '';
  currentTimeDTG = '';
  currentDateDTG = '';

  quickData: KeyValue<string, string>[] = [];

  constructor(private appService: AppService) {
    this.appService.getMyPositionMGRS().then((pos) =>
      this.quickData.push({
        key: 'current Position MGRS 1m',
        value: pos,
      })
    );

    this.appService.getMyPositionMGRS(3).then((pos) =>
      this.quickData.push({
        key: 'current Position MGRS 1km',
        value: pos,
      })
    );

    this.quickData.push({
      key: 'local Time DTG',
      value: this.appService.getTimeDTG(new Date()),
    });

    this.quickData.push({
      key: 'ZULU Time DTG',
      value: this.appService.getTimeDTG(new Date(), true),
    });

    this.quickData.push({
      key: 'local Date DTG',
      value: this.appService.getDateDTG(new Date()),
    });
  }

  copyToClipboard() {}
}
