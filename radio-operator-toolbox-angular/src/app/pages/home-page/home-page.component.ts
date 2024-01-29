import { AppService } from '../../services/app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomeTabComponent {
  myvar = '';

  constructor(private appService: AppService) {}

  savels() {
    localStorage.setItem('myvar', this.myvar);
    this.appService.saveAppData();
  }
  
  loadls() {
    this.myvar = localStorage.getItem('myvar') ?? 'no-data';
    this.appService.loadAppData();
  }
}
