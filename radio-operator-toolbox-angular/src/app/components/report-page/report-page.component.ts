import { Component } from '@angular/core';
import { IReport, VALUE_SIZES_ENUM, VALUE_TYPES_ENUM,  } from 'src/app/models/report.model';
import { AppSettingsService } from 'src/app/services/app-settings.service';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.scss'],
})
export class ReportPageComponent {
  report: IReport = { name: '' };
  lineValueTypes = VALUE_TYPES_ENUM;
  lineValueSizes = VALUE_SIZES_ENUM;

  constructor(
    private appService: AppService,
    private appSettingsService: AppSettingsService
  ) {
    this.appService.currenReportBS.subscribe((r) => (this.report = r));
  }
}
