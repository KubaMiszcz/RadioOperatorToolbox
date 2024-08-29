import { Component } from '@angular/core';
import { forward } from 'mgrs';
import { ITeam } from 'src/app/models/team.model';
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
  appSettings = this.appSettingsService.appSettings;
  appData = this.appDataService.appData;

  constructor(private appService: AppService, private appSettingsService: AppSettingsService, private appDataService: AppDataService) {
    this.appSettingsJSON = JSON.stringify(this.appSettings);
    this.appDataJSON = JSON.stringify(this.appData);
    this.appSettingsService.saveAppSettingsToLocalStorage();
    this.appDataService.saveAppDataToLocalStorage();
    console.log('fire');
  }

  importAppSettings() {
    this.appSettingsService.importAppSettings(this.appSettingsJSON);
  }

  importAppData() {
    this.appDataService.importAppData(this.appDataJSON);
  }

  setMyTeam(team: ITeam) {
    this.appData.myTeam = team;
  }

  alert(message: string) {
    alert(message);
  }
}
