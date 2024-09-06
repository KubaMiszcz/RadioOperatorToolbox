import { CoreService } from './core.service';
import { Injectable } from '@angular/core';
import { AppData, IAppData } from '../models/app-data.model';
import { APP_EXAMPLE_DATA_JSON } from 'src/assets/app-example-data';
import packageJson from './../../../package.json';
import { IReport } from '../models/report.model';

@Injectable({
  providedIn: 'root',
})
export class AppDataService {
  appData: IAppData = new AppData();

  constructor(private coreService: CoreService) {
    this.initAppData();
  }

  initAppData() {
    try {
      let appDataJson = localStorage.getItem('appData');
      if (appDataJson) {
        this.importAppData(appDataJson);
        return;
      }
    } catch (error) {
      console.log(error);
    }
  }

  clearAllData() {
    let emptyAppData = new AppData();
    this.appData = emptyAppData;
    this.importAppData(JSON.stringify(APP_EXAMPLE_DATA_JSON)); //km dev only, comment it in PROD
    this.saveAppDataToLocalStorage();
  }

  importAppData(json: string) {
    try {
      this.appData = this.ValidatedAppData(json);
      console.log('Poprawnie zaimportowano dane aplikacji');
      this.saveAppDataToLocalStorage();
      // alert('Poprawnie zaimportowano dane aplikacji');
    } catch (error) {
      alert(error);
    }
  }

  ValidatedAppData(json: string) {
    let result: IAppData = JSON.parse(json);
    result.tdrData.teams = result.tdrData?.teams?.filter((t) => !!t.name && !!t.codename) ?? [];
    result.savedReports = result.savedReports?.filter((r) => !!r.name && !!r.name) ?? [];
    result.tdrData.alerts = result.tdrData?.alerts?.filter((t) => t.value) ?? [];
    result.tdrData.keywords = result.tdrData?.keywords?.filter((t) => t.value);
    result.tdrData.keywords?.forEach((k) => (k.key = k.key.toUpperCase()));

    return result;
  }

  saveAppDataToLocalStorage() {
    localStorage.setItem('appData', JSON.stringify(this.appData));
    console.log('Poprawnie zapisano dane aplikacji');
  }

  loadAppDataFromLocalStorage() {
    this.appData = JSON.parse(localStorage.getItem('appData') ?? '');
  }

  saveReport(report: IReport) {
    if (!this.appData.savedReports) {
      this.appData.savedReports = [];
    }

    this.appData.savedReports.push(report);
  }

  updateReport(oldReport: IReport, report: IReport) {
    this.coreService.replaceItemInArray(this.appData.savedReports, oldReport, report);
  }

  removeReport(report: IReport) {
    this.coreService.removeItemInArray(this.appData.savedReports, report);
  }
}
