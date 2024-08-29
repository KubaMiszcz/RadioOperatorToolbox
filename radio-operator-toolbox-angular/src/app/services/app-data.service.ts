import { Injectable } from '@angular/core';
import { AppData, IAppData } from '../models/app-data.model';
import { APP_EXAMPLE_DATA_JSON } from 'src/assets/app-example-data';

@Injectable({
  providedIn: 'root',
})
export class AppDataService {
  appData: IAppData = new AppData();

  constructor() {
    this.initAppData();
  }

  initAppData() {
    try {
      let appDataJson = localStorage.getItem('appData');
      if (appDataJson) {
        this.importAppData(appDataJson);
        return;
      }
      this.importAppData(JSON.stringify(APP_EXAMPLE_DATA_JSON));
    } catch (error) {
      console.log(error);
    }
  }

  clearAllData() {
    let emptyAppData = new AppData();
    this.appData = emptyAppData;
    this.saveAppDataToLocalStorage();
  }

  importAppData(json: string) {
    try {
      this.appData = this.ValidatedAppData(json);
      console.log('Poprawnie zaimportowano dane aplikacji');
      this.saveAppDataToLocalStorage();
      alert('Poprawnie zaimportowano dane aplikacji');
    } catch (error) {
      alert(error);
    }
  }

  ValidatedAppData(json: string) {
    let result: IAppData = JSON.parse(json);
    result.tdrData.teams = result.tdrData?.teams?.filter((t) => t.name !== '' && t.codename !== '') ?? [];

    return result;
  }

  saveAppDataToLocalStorage() {
    localStorage.setItem('appData', JSON.stringify(this.appData));
    console.log('Poprawnie zapisano dane aplikacji');
  }

  loadAppDataFromLocalStorage() {
    this.appData = JSON.parse(localStorage.getItem('appData') ?? '');
  }
}
