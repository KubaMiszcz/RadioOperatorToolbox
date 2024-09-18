import { CoreService } from 'src/app/services/core.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IWaveFreqLengthPair } from 'src/app/models/cheatsheet-data.model';
import { AppDataService } from 'src/app/services/app-data.service';
import { AppSettingsService } from 'src/app/services/app-settings.service';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-calculators-page',
  templateUrl: './calculators-page.component.html',
  styleUrls: ['./calculators-page.component.scss'],
})
export class CalculatorsPageComponent implements OnDestroy {
  cheatsheetsData = this.appDataService.appData.cheatsheetsData;

  constructor(private appDataService: AppDataService) {}


  ngOnDestroy(): void {
    //km validate all form and page
    this.appDataService.updateAndSaveAppData();
  }
}
