import { Injectable } from '@angular/core';
import { AppData, IAppData } from '../models/app-data.model';
import { BehaviorSubject } from 'rxjs';
import { INotepadPage } from '../models/notepad.model';
import { APP_EXAMPLE_DATA_JSON } from 'src/assets/app-example-data';

@Injectable({
  providedIn: 'root',
})
export class AppDataService {
  appData: IAppData = new AppData();

  constructor() {
    this.appData = APP_EXAMPLE_DATA_JSON;
  }

  clearAllData() {
    // let emptyAppData: IAppData = {
    //   myCodename: '',
    //   teamsCodenames: [],
    //   reports: [],
    //   correspondenceBook: [],
    //   notepad: { pages: [] },
    // };
    let emptyAppData = new AppData();
    this.appData = emptyAppData;
    this.saveAppData(JSON.stringify(emptyAppData));
  }

  saveAppData(json = '') {
    localStorage.setItem('appData', json);
    this.appData = JSON.parse(json);
  }

  loadAppData() {
    this.appData = JSON.parse(localStorage.getItem('appData') ?? '');
  }
}
