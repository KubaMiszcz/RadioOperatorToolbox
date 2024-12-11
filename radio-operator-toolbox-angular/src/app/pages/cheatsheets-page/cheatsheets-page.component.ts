import { Component } from '@angular/core';
import { IWaveFreqLengthPair } from 'src/app/models/cheatsheet-data.model';
import { AppDataService } from 'src/app/services/app-data.service';
import { AppSettingsService } from 'src/app/services/app-settings.service';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-cheatsheets-page',
  templateUrl: './cheatsheets-page.component.html',
  styleUrls: ['./cheatsheets-page.component.scss'],
})
export class CheatsheetsPageComponent {
  constructor(private appService: AppService, private appDataService: AppDataService, private appSettingsService: AppSettingsService) {}
}
