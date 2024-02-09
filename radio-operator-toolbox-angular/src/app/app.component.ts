import { Component } from '@angular/core';
import { AppSettingsService } from './services/app-settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'RadioOperatorToolbox';
  isDevelopmentMode = this.appSettingsService.build.startsWith('dev');

  constructor(private appSettingsService: AppSettingsService){
  }
}