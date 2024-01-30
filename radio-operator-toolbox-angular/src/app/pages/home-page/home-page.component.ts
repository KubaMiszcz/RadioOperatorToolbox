import { AppDataService } from 'src/app/services/app-data.service';
import { AppService } from '../../services/app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomeTabComponent {
  myvar = '';
  appdatasize = 0;

  constructor(
    private appService: AppService,
    private appDataService: AppDataService,
    ) {
      this.appdatasize = JSON.stringify(this.appDataService.appData).length;
    }

  savels() {
    localStorage.setItem('myvar', this.myvar);
  }

  loadls() {
    this.myvar = localStorage.getItem('myvar') ?? 'no-data';
    this.appDataService.loadAppData();
  }

  saveAppData() {
    this.appDataService.saveAppData();
    this.appdatasize = JSON.stringify(this.appDataService.appData).length;
  }

  loadAppData() {
    this.appDataService.loadAppData();
    this.appdatasize = JSON.stringify(this.appDataService.appData).length;
  }
}
