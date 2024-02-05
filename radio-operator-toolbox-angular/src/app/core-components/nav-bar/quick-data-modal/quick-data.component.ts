import { KeyValue } from '@angular/common';
import { AppService } from 'src/app/services/app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-quick-data',
  templateUrl: './quick-data.component.html',
  styleUrls: ['./quick-data.component.scss'],
})
export class QuickDataComponent {
  quickData: KeyValue<string, string>[] = [];

  constructor(private appService: AppService) {
    this.appService.getMyPositionMGRS().then(
      (pos) => {
        this.quickData.push({
          key: 'twoja pozycja MGRS 1m',
          value: pos,
        });
      },
      (err) => {
        console.error(err);
        this.quickData.push({
          key: 'twoja pozycja MGRS 1m',
          value: err?.message,
        });
      }
    );

    this.appService.getMyPositionMGRS(3).then(
      (pos) => {
        this.quickData.push({
          key: 'twoja pozycja MGRS 1km',
          value: pos,
        });
      },
      (err) => {
        console.error(err);
        this.quickData.push({
          key: 'twoja pozycja MGRS 1km',
          value: err?.message,
        });
      }
    );

    this.quickData.push({
      key: 'czas lokalny DTG',
      value: this.appService.getTimeDTG(new Date()),
    });

    this.quickData.push({
      key: 'czas ZULU DTG',
      value: this.appService.getTimeDTG(new Date(), true),
    });

    this.quickData.push({
      key: 'lokalna data DTG',
      value: this.appService.getDateDTG(new Date()),
    });
  }
}
