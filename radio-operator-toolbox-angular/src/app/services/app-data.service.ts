import { CoreService } from './core.service';
import { Injectable } from '@angular/core';
import { AppData, IAppData } from '../models/app-data.model';
import { APP_EXAMPLE_DATA_JSON } from 'src/assets/app-example-data';
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
      let appData = this.coreService.getFromLocalStorage('appData');
      if (!appData) {
        this.updateAndSaveAppData(APP_EXAMPLE_DATA_JSON)
        return;
      }
      
      this.updateAndSaveAppData(appData);
    } catch (error) {
      console.log(error);
    }
  }

  clearAllData() {
    this.appData = this.getValidatedAppData(new AppData());
    if (this.coreService.isDevEnv()) {
      this.updateAndSaveAppData(APP_EXAMPLE_DATA_JSON); //km dev only, comment it in PROD
    }

    this.updateAndSaveAppData(this.appData);
  }

  updateAndSaveAppData(appData: IAppData = this.appData) {
    try {
      this.appData = this.getValidatedAppData(appData);
      this.coreService.saveToLocalStorage('appData', this.appData);
      console.log('Poprawnie zupdatowano i zapisano DANE aplikacji');
    } catch (error) {
      alert(error);
    }
  }

  private getValidatedAppData(value: IAppData) {
    value.tdrData.teams = value.tdrData?.teams?.filter((t) => !!t.name && !!t.codename) ?? [];
    value.savedReports = value.savedReports?.filter((r) => !!r.name && !!r.name) ?? [];
    value.tdrData.alerts = value.tdrData?.alerts?.filter((t) => t.value) ?? [];
    value.tdrData.alerts = this.coreService.getArraySortedByPropertyName(value.tdrData.alerts, 'key');
    value.tdrData.keywords = value.tdrData?.keywords?.filter((t) => t.value);
    value.tdrData.keywords?.forEach((k) => (k.key = k.key.toUpperCase()));

    return value;
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
