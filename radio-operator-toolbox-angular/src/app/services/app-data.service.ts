import { Injectable } from '@angular/core';
import { AppData, IAppData } from '../models/app-data.model';

@Injectable({
  providedIn: 'root',
})
export class AppDataService {
  appData: IAppData = new AppData();

  constructor() {}

  clearAllData() {
    let emptyAppData: IAppData = {
      myCodename: '',
      teamsCodenames: [],
      reports: [],
      correspondenceBook: [],
      notepad: { pages: [] },
    };
    this.appData = emptyAppData;
    this.saveAppData();
  }

  saveAppData(json = '') {
    localStorage.setItem('appData', json);
    this.appData = JSON.parse(json);
  }

  loadAppData() {
    this.appData =
      JSON.parse(localStorage.getItem('appData') ?? '')
  }
}
