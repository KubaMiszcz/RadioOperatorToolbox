import { Component } from '@angular/core';
import {
  IReport,
  IReportLineValue,
  VALUE_TYPES_ENUM,
} from 'src/app/models/report.model';
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
  isCreatorCollapsed = false;

  //todo refactor layout of reports
  constructor(
    private appService: AppService,
    private appSettingsService: AppSettingsService
  ) {
    this.appService.currenReportBS.subscribe((r) => (this.report = r));
  }

  getNotEmptyLineValues(lineValues: IReportLineValue[]): IReportLineValue[] {
    return lineValues.filter((lv) => !!lv.value);
  }
}
