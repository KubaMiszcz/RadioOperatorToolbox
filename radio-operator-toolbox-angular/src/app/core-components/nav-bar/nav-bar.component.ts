import { AppService } from 'src/app/services/app.service';
import { AppSettingsService } from 'src/app/services/app-settings.service';
import {
  Component,
} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  reportsNames = this.appSettingsService.appData.reportsNames;

  constructor(
    private appSettingsService: AppSettingsService,
    private appService: AppService
  ) {}
}
