import { Component } from '@angular/core';
import { IAppData } from 'src/app/models/app-settings.model';
import { AppSettingsService } from 'src/app/services/app-settings.service';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-tdr-data-page',
  templateUrl: './tdr-data-page.component.html',
  styleUrls: ['./tdr-data-page.component.scss']
})
export class TDRDataPageComponent {
  constructor(
    private appService: AppService,
    private appSettings: AppSettingsService,
  ) {
  }
}
