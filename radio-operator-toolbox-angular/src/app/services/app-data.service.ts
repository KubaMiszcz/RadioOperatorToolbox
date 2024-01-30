import { Injectable } from '@angular/core';
import { AppData, IAppData } from '../models/app-settings.model';

@Injectable({
  providedIn: 'root',
})
export class AppDataService {
  appData: IAppData = new AppData();

  constructor() {}

  clearAllData() {
    let emptyAppData: IAppData = {
      myNickname: '',
      teamsNicknames: [],
      reports: [],
      correspondenceBook: [],
      notepad: { pages: [] },
    };
    this.appData = emptyAppData;
    this.saveAppData();
  }

  saveAppData() {
    localStorage.setItem('appData', JSON.stringify(this.appData));
  }

  loadAppData() {
    this.appData =
      JSON.parse(localStorage.getItem('appData') ?? '') ?? new AppData();
  }
}
