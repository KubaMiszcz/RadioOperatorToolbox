import { Component } from '@angular/core';
import { CRUD_METHODS } from 'src/app/models/constants/enums';
import { IReport, IReportLineValue, Report, VALUE_TYPES_ENUM } from 'src/app/models/report.model';
import { AppDataService } from 'src/app/services/app-data.service';
import { AppSettingsService } from 'src/app/services/app-settings.service';
import { AppService } from 'src/app/services/app.service';
import { CoreService } from 'src/app/services/core.service';
import { NATO_ALPHABET_EN } from 'src/assets/app-constants';

@Component({
  selector: 'app-report-tab',
  templateUrl: './report-tab.component.html',
  styleUrls: ['./report-tab.component.scss'],
})
export class ReportTabComponent {
  report: IReport = { type: '' };

  useNatoLetters = false;
  isCreatorCollapsed = false;
  reportContentTXT = '';
  lineValueTypes = VALUE_TYPES_ENUM;
  isInEditMode = false;
  oldReport: IReport = new Report();

  constructor(
    private appService: AppService,
    private appSettingsService: AppSettingsService,
    private appDataService: AppDataService,
    private coreService: CoreService
  ) {
    this.appService.currentReportBS.subscribe((r) => {
      this.report = coreService.deepCopy(r);
      if (!this.isTemplate(r)) {
        this.oldReport = r;
        this.isInEditMode = true;
        return;
      }

      this.report.name = this.report.type + ' nr: ' + appDataService.appData.currentReportCounter;
      this.isInEditMode = false;
    });
  }

  isTemplate(report: IReport) {
    return !report.name;
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

  getMGRS(line: IReportLineValue, precision: number) {
    this.appService.getMyPositionMGRS(precision).then((pos) => (line.value = pos));
  }

  getTimeDTG(line: IReportLineValue) {
    line.value = this.appService.getTimeDTG(new Date());
  }

  copyToClipboard() {
    let result = this.appService.convertReportToTXT(this.report);
    alert(`Skopiowano raport do schowka:\n\n${result}`);
    this.reportContentTXT = result;
  }

  saveReport() {
    if (this.isReportExist(this.report)) {
      alert(`Raport: ${this.report.name} już istnieje, nadaj inną nazwę.`);
      return;
    }

    this.appDataService.saveReport(this.report);
  }

  updateReport() {
    this.appDataService.updateReport(this.oldReport, this.report);
  }

  isReportExist(report: IReport) {
    return this.appDataService.appData.savedReports?.some((r) => r.name === this.report.name);
  }

  toNatoCode(value: string) {
    if (value.length === 1 && this.useNatoLetters) {
      return NATO_ALPHABET_EN.find((v) => v.key === value)?.value;
    }

    return value;
  }

  //km
  // getReportName(): string {
  //   return !this.reportName ? this.report.type + ' nr: ' : this.report.name ?? '';
  // }
}
