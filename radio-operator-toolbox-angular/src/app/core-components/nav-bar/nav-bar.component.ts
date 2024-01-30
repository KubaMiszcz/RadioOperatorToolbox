import { AppService } from 'src/app/services/app.service';
import { AppSettingsService } from 'src/app/services/app-settings.service';
import { Component } from '@angular/core';
import { IReport } from 'src/app/models/report.model';
import { AppDataService } from 'src/app/services/app-data.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {

  reports: IReport[] = [];

  constructor(
    private appService: AppService,
    private appDataService: AppDataService,
    private appSettingsService: AppSettingsService,
  ) {
    this.reports = this.appSettingsService.appSettings.reportsTemplates;
  }

  setCurrentReport(report: IReport) {
    this.appService.currenReportBS.next(report);
  }

  getFavouriteReports() {
    return this.reports.filter((r) => !!r.isFavourite);
  }

  clearAllData() {
    this.appDataService.clearAllData();
  }
}
