import { Guid } from 'guid-typescript';
import { Injectable } from '@angular/core';
import { AppSettingsService } from './app-settings.service';
import { BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';
import { IReport, Report } from '../models/report.model';
import { CoreService } from './core.service';
import { AppDataService } from './app-data.service';
import { forward } from 'mgrs';
import { formatDate } from '@angular/common';
import {
  DTG_TIMEZONES_CODES,
  MONTHS_NAMES_PL,
} from 'src/assets/app-default-settings';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  currenReportBS = new BehaviorSubject<IReport>(new Report());

  constructor(
    private AppDataService: AppDataService,
    private appSettingsService: AppSettingsService,
    private coreService: CoreService
  ) {
    appSettingsService.loadAppSettingsOrDefault();

    this.currenReportBS.next(
      appSettingsService.appSettings.reportsTemplates[0] ?? new Report()
    );
  }

  getPositionLatiLong(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (resp) => {
          resolve({ lati: resp.coords.latitude, long: resp.coords.longitude });
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  LatiLong2MGRS(lati: number, long: number, precision: number = 5): string {
    let mgrs = forward([long, lati], precision);
    let str =
      mgrs.substring(0, 3) +
      ' ' +
      mgrs.substring(3, 5) +
      ' ' +
      mgrs.substring(5, 5 + precision) +
      ' ' +
      mgrs.substring(5 + precision, 5 + precision + precision);
    return str;
  }

  getMyPositionMGRS(precision = 5) {
    return new Promise<string>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (resp) => {
          resolve(
            this.LatiLong2MGRS(
              resp.coords.latitude,
              resp.coords.longitude,
              precision
            )
          );
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  getTimeDTG(date: Date, isZulu = false): string {
    if (isZulu) {
      date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    }

    let timezoneCode = isZulu
      ? 'Z'
      : DTG_TIMEZONES_CODES.find(
          (c) => c.key === (-1 * date.getTimezoneOffset()) / 60
        )?.value ?? '_';

    let monthNameMMM = MONTHS_NAMES_PL[date.getMonth()];

    let dtg = formatDate(date, 'ddHHmmxxxxyy', 'en')
      .replace('xxxx', timezoneCode + monthNameMMM)
      .toUpperCase();

    return dtg;
  }

  getDateDTG(date: Date, isZulu = false): string {
    if (isZulu) {
      date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    }

    let monthNameMMM = MONTHS_NAMES_PL[date.getMonth()];

    let dtg = formatDate(date, 'ddxxxyy', 'en')
      .replace('xxx', monthNameMMM)
      .toUpperCase();

    return dtg;
  }

  getGUID() {
    return Guid.create().toString();
  }
}
