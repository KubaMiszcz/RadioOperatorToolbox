import { Injectable } from '@angular/core';
import { AppData, IAppData } from '../models/app-settings.model';

@Injectable({
  providedIn: 'root',
})
export class AppDataService {
  appData: IAppData = new AppData();

  constructor() {}
}
