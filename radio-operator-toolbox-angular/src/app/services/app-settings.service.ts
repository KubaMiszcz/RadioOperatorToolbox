import { Injectable } from '@angular/core';
import { IAppData } from '../models/appData';
import { APP_DATA_JSON } from 'src/assets/application-default-data';

@Injectable({
  providedIn: 'root',
})
export class AppSettingsService {
  iconPath = '';
  appData: IAppData;

  constructor() {
    this.appData = APP_DATA_JSON;
  }
}
