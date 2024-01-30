import { Component } from '@angular/core';
import {
  IReport,
  IReportLineValue,
  VALUE_TYPES_ENUM,
} from 'src/app/models/report.model';
import { AppSettingsService } from 'src/app/services/app-settings.service';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-reports-page',
  templateUrl: './reports-page.component.html',
  styleUrls: ['./reports-page.component.scss'],
})
export class ReportPageComponent {
  report: IReport = { name: '' };
  lineValueTypes = VALUE_TYPES_ENUM;
  isCreatorCollapsed = false;
  isPeaceTime = this.appSettingsService.appSettings.isPeaceTime;

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

  decreaseValue(line: IReportLineValue) {
    line.value = line.value ?? 0;
    line.value--;
    line.value = line.value <= 0 ? null : line.value;
  }

  increaseValue(line: IReportLineValue) {
    line.value = line.value ?? 0;
    line.value++;
    line.value = line.value > 99 ? 99 : line.value;
  }

  toggleValue(line: IReportLineValue) {
    line.value = !line.value;
  }

  getMGRS(line: IReportLineValue) {
    this.appService.getMyPositionMGRS(3).then((pos) => (line.value = pos));
  }

  getDTG(line: IReportLineValue) {
    line.value = this.appService.getTimeDTG(new Date());
  }
}
