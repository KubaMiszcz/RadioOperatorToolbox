import { Component } from '@angular/core';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.component.html',
  styleUrls: ['./home-tab.component.scss'],
})
export class HomeTabComponent {
  myvar = '';

  savels() {
    localStorage.setItem('myvar', this.myvar);
  }

  loadls() {
    this.myvar = localStorage.getItem('myvar') ?? 'no-data';
  }
}
