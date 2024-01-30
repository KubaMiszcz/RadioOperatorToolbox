import { Component } from '@angular/core';
import { forward } from 'mgrs';
import { AppDataService } from 'src/app/services/app-data.service';
import { AppSettingsService } from 'src/app/services/app-settings.service';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-app-settings-page',
  templateUrl: './app-settings-page.component.html',
  styleUrls: ['./app-settings-page.component.scss'],
})
export class AppSettingsPageComponent {
  appSettingsJSON = '';
  appDataJSON = '';

  constructor(
    private appService: AppService,
    private appSettingsService: AppSettingsService,
    private appDataService: AppDataService
  ) {
    this.appSettingsJSON = JSON.stringify(appSettingsService.appSettings);
    this.appDataJSON = JSON.stringify(appDataService.appData);
  }

  saveAppSettings() {
    this.appSettingsService.saveAppSettings(this.appSettingsJSON);
  }

  saveAppData(){
    this.appDataService.saveAppData(this.appDataJSON)
  }

  alert(message: string) {
    alert(message);
  }
}
