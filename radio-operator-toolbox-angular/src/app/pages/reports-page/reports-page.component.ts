import { Component } from '@angular/core';
import { forward } from 'mgrs';
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

  //todo refactor layout of reports
  constructor(
    private appService: AppService,
    private appSettingsService: AppSettingsService,
    
  ) {
    this.appService.currenReportBS.subscribe((r) => (this.report = r));

    this.appService.getPositionLatiLong().then(pos=>
      {
         console.log(`Positon: ${pos.long} ${pos.lati}`);
         console.log(`MGRS222: ${forward([pos.long, pos.lati])}`);
         console.log(`MGRS222: ${forward([pos.long, pos.lati],3)}`);
         console.log(`MGRS: ${this.appService.LatiLong2MGRS(pos.lati,pos.long, 5)}`);
         console.log(`MGRS: ${this.appService.LatiLong2MGRS(pos.lati,pos.long, 3)}`);
      });
  }

  getNotEmptyLineValues(lineValues: IReportLineValue[]): IReportLineValue[] {
    return lineValues.filter((lv) => !!lv.value);
  }


}
