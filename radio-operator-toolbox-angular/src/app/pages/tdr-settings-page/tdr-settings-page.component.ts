import { Component } from '@angular/core';
import { IAppData } from 'src/app/models/app-settings.model';
import { AppSettingsService } from 'src/app/services/app-settings.service';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-tdrsettings-page',
  templateUrl: './tdr-settings-page.component.html',
  styleUrls: ['./tdr-settings-page.component.scss']
})
export class TDRSettingsPageComponent {
  constructor(
    private appService: AppService,
    private appSettings: AppSettingsService,
  ) {
  }
}
