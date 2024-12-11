import { Report } from './../../../models/report.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IReport } from 'src/app/models/report.model';
import { AppDataService } from 'src/app/services/app-data.service';
import { AppSettingsService } from 'src/app/services/app-settings.service';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-reports-history-page',
  templateUrl: './reports-history-page.component.html',
  styleUrls: ['./reports-history-page.component.scss'],
})
export class ReportsHistoryPageComponent {
  savedReports: IReport[] = [];
  activeReport: IReport = new Report();
  activeReportContent = '';
  isShowContent = false;

  constructor(
    private appService: AppService,
    private appDataService: AppDataService,
    private appSettingsService: AppSettingsService,
    private router: Router
  ) {
    this.savedReports = this.appDataService.appData.savedReports ?? [];
  }

  setCurrentReport(report: IReport) {
    this.appService.currentReportBS.next(report);
  }

  removeReport(report: IReport) {
    this.appDataService.removeReport(report);
  }

  setActiveReport(report: IReport) {
    this.isShowContent = this.activeReport.name !== report.name ? true : !this.isShowContent;
    this.activeReport = report;
    this.activeReportContent = this.appService.convertReportToTXT(report, false);
  }
}
