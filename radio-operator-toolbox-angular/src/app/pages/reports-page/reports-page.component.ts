import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IReport } from 'src/app/models/report.model';
import { AppDataService } from 'src/app/services/app-data.service';
import { AppSettingsService } from 'src/app/services/app-settings.service';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-reports-page',
  templateUrl: './reports-page.component.html',
  styleUrls: ['./reports-page.component.scss'],
})
export class ReportsPageComponent {
  reports: IReport[] = [];

  constructor(
    private appService: AppService,
    private appDataService: AppDataService,
    private appSettingsService: AppSettingsService
  ) {
    this.reports = this.appSettingsService.appSettings.reportsTemplates;
  }

  setCurrentReport(report: IReport) {
    this.appService.currenReportBS.next(report);
  }
}
