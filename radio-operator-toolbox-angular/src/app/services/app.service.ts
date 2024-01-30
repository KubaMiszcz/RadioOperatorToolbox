import { Injectable, TemplateRef } from '@angular/core';
import { AppSettingsService } from './app-settings.service';
import { BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';
import { IReport, Report } from '../models/report.model';
import { CoreService } from './core.service';
import { AppData, IAppData } from '../models/app-settings.model';
import { AppDataService } from './app-data.service';
import { forward } from 'mgrs';
import {
  exampleMEDEVAC_PL,
  exampleSALUTE_PL,
} from 'src/assets/application-example-data';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { formatDate } from '@angular/common';
import { DTG_TIMEZONES } from 'src/assets/application-default-data';

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
    this.currenReportBS.next(
      appSettingsService.appSettings.reportsTemplates[0] ?? new Report()
    );

    //laod example medevac
    this.currenReportBS.next(exampleMEDEVAC_PL);
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
      mgrs.substring(0, 2) +
      ' ' +
      mgrs.substring(2, 5) +
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

  getCurrentTimeDTG(): string {
    let date = new Date();
    let timezoneCode = DTG_TIMEZONES.find(c=>c.key===(-1*date.getTimezoneOffset()/60))?.value;

    let dtg = `${date.getDate()}${date.getHours()}${date.getMinutes()}${timezoneCode}${this.getMonthMMM(
      date
    )}${date.getFullYear().toString().slice(2, 4)}`;
    
    return dtg;
  }

  private getMonthMMM(date: Date) {
    return date
      .toLocaleString('default', { month: 'long' })
      .slice(0, 3)
      .toUpperCase();
  }

  getCurrentDateDTG(): string {
    let date = new Date();

    let dtg = `${date.getDate()}${this.getMonthMMM(date)}${date
      .getFullYear()
      .toString()
      .slice(2, 4)}`;

    return dtg;
  }
}
