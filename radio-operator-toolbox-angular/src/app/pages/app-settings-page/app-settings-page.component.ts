import { Component } from '@angular/core';
import { forward } from 'mgrs';
import { AppSettingsService } from 'src/app/services/app-settings.service';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-app-settings-page',
  templateUrl: './app-settings-page.component.html',
  styleUrls: ['./app-settings-page.component.scss'],
})
export class AppSettingsPageComponent {
  mgrs5 = '';
  mgrs3 = '';

  constructor(
    private appService: AppService,
    private appSettingsService: AppSettingsService
  ) {
    this.appService.getPositionLatiLong().then((pos) => {
      console.log(`Positon lat lon: ${pos.long} ${pos.lati}`);
      this.mgrs5 = this.appService.LatiLong2MGRS(pos.lati, pos.long, 5);
      console.log(`MGRS prec5: ${this.mgrs5}`);
      this.mgrs3 = this.appService.LatiLong2MGRS(pos.lati, pos.long, 3);
      console.log(`MGRS prec3 100m: ${this.mgrs3}`);
    });
  }
}
