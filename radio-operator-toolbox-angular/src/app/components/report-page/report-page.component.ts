import { Component } from '@angular/core';
import {
  IReport,
  IReportLineValue,
  VALUE_SIZES_ENUM,
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
  lineValueSizes = VALUE_SIZES_ENUM;
  isCreatorCollapsed = false;

  constructor(
    private appService: AppService,
    private appSettingsService: AppSettingsService
  ) {
    this.appService.currenReportBS.subscribe((r) => (this.report = r));
  }

  getNotEmptyLineValues(lineValues: IReportLineValue[]): IReportLineValue[] {
    return lineValues.filter((lv) => !!lv.value);
  }

  getValueType(valueType: VALUE_TYPES_ENUM | undefined,label:any): any {
    // switch (valueType) {
    //   case VALUE_TYPES_ENUM.text:
    //     ret
    //     break;
    
    //   default:
    //     break;
    // }
    // return !valueType || (valueType === VALUE_TYPES_ENUM.text);
  }
}
