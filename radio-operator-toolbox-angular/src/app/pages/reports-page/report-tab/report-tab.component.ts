import { Component } from '@angular/core';
import {
  IReport,
  IReportLineValue,
  VALUE_TYPES_ENUM,
} from 'src/app/models/report.model';
import { AppSettingsService } from 'src/app/services/app-settings.service';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-report-tab',
  templateUrl: './report-tab.component.html',
  styleUrls: ['./report-tab.component.scss'],
})
export class ReportTabComponent {
  report: IReport = { name: '' };
  lineValueTypes = VALUE_TYPES_ENUM;
  isCreatorCollapsed = false;
  isPeaceTime = this.appSettingsService.appSettings.isPeaceTime;
  reportContentTXT = '';

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

  getMGRS(line: IReportLineValue, precision:number) {
    this.appService
      .getMyPositionMGRS(precision)
      .then((pos) => (line.value = pos));
  }

  getTimeDTG(line: IReportLineValue) {
    line.value = this.appService.getTimeDTG(new Date());
  }

  convertReportToTXT() {
    let result = '';
    result += this.report.name + '\n';
    this.report.lines?.forEach((line) => {
      result += `${line.lineHeader}: `;
      line.lineValues.forEach((lineValue) => {
        if (lineValue.value) {
          if (lineValue.valueType !== VALUE_TYPES_ENUM.bool) {
            result += `${lineValue.label}:${lineValue.value}, `;
          } else {
            result += `${lineValue.label}, `;
          }
        }
      });

      result += `\n`;
    });

    alert(`Skopiowano raport do schowka:\n\n${result}`);
    this.reportContentTXT = result;
  }
}
