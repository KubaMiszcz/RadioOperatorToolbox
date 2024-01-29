import { Injectable } from '@angular/core';
import { AppSettingsService } from './app-settings.service';
import { BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';
import { IReport, Report } from '../models/report.model';
import { CoreService } from './core.service';
import { AppData, IAppData } from '../models/app-settings.model';
import { AppDataService } from './app-data.service';
import { forward } from 'mgrs';
import { exampleMEDEVAC_PL, exampleSALUTE_PL } from 'src/assets/application-example-data';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  currenReportBS = new BehaviorSubject<IReport>(new Report());

  constructor(
    private AppDataService: AppDataService,
    private appSettingsService: AppSettingsService,
    private coreServiceService: CoreService
  ) {
    this.currenReportBS.next(
      appSettingsService.appSettings.reportsTemplates[0] ?? new Report()
    );

    
    //laod example medevac
    this.currenReportBS.next(exampleSALUTE_PL);
  }

  clearAllData() {
    //todo emergency clear data
    throw new Error('Method not implemented.');
  }

  saveAppData() {
    localStorage.setItem(
      'appData',
      JSON.stringify(this.AppDataService.appData)
    );
  }

  loadAppData() {
    this.AppDataService.appData =
      JSON.parse(localStorage.getItem('appData') ?? '') ?? new AppData();
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

  LatiLong2MGRS(lati: number, long: number, precision: number = 5) {
    let mgrs = forward([long, lati], precision);
    let str =
      mgrs.substring(0, 2) +
      ' ' +
      mgrs.substring(2, 5) +
      ' ' +
      mgrs.substring(5, 5 + precision) +
      ' ' +
      mgrs.substring(5 + precision, 5+precision+precision);
    return str;
  }
}
