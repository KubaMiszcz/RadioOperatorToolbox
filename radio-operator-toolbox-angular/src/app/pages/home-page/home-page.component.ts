import { AppDataService } from 'src/app/services/app-data.service';
import { AppService } from '../../services/app.service';
import { Component } from '@angular/core';
import { AppSettingsService } from 'src/app/services/app-settings.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomeTabComponent {

  appData = this.appDataService.appData;
  appSettings = this.appSettingsService.appSettings;

  constructor(
    private appService: AppService,
    private appDataService: AppDataService,
    private appSettingsService: AppSettingsService
  ) {}

  saveAppData() {
    this.appDataService.saveAppData();
  }

  loadAppData() {
    this.appDataService.loadAppData();
  }

  validateLink(link: string|undefined): string {
    return link?.startsWith('/') ? link : '/' + link;
    }
}
