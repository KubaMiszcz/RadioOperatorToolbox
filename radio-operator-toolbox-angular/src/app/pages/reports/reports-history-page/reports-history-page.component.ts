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
export class ReportsHistoryComponent {
  savedReports: IReport[] = [];
  
  constructor(private appService: AppService, private appDataService: AppDataService, private appSettingsService: AppSettingsService,private router: Router) {
    this.savedReports = this.appDataService.appData.savedReports ?? [];
  }
  
  setCurrentReport(report: IReport) {
    this.appService.currentReportBS.next(report);
  }

  removeReport(report: IReport) {
  this.appDataService.removeReport(report)
  }
}
