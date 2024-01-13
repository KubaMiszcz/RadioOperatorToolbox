import { Injectable } from '@angular/core';
import { AppSettingsService } from './app-settings.service';
import { BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';
import { IReport, Report } from '../models/report.model';
import { CoreService } from './core.service';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  currenReportBS = new BehaviorSubject<IReport>(new Report());

  constructor(
    private appSettings: AppSettingsService,
    private coreServiceService: CoreService
  ) {
    this.currenReportBS.next(appSettings.appData.reports[0] ?? new Report());
  }

  clearAllData() {
    //todo
    throw new Error('Method not implemented.');
  }
}
