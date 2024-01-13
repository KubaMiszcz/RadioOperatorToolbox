import { AppService } from 'src/app/services/app.service';
import { AppSettingsService } from 'src/app/services/app-settings.service';
import { Component } from '@angular/core';
import { IReport } from 'src/app/models/report.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {

  reports: IReport[] = [];

  constructor(
    private appSettingsService: AppSettingsService,
    private appService: AppService
  ) {
    this.reports = this.appSettingsService.appData.reports;
  }

  setCurrentReport(report: IReport) {
    this.appService.currenReportBS.next(report);
  }

  getFavouriteReports() {
    return this.reports.filter((r) => !!r.isFavourite);
  }

  ClearAllData() {
    this.appService.clearAllData();
  }
}
