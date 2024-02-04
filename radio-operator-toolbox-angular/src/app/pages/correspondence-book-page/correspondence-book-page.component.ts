import { AppDataService } from './../../services/app-data.service';
import { Component } from '@angular/core';
import { TRANSMIT_DIRECTION } from 'src/app/models/constants/enums';
import {
  CorrespondenceBookEntry,
  ICorrespondenceBookEntry,
} from 'src/app/models/correspondence-book-entry.model';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-correspondence-book-page',
  templateUrl: './correspondence-book-page.component.html',
  styleUrls: ['./correspondence-book-page.component.scss'],
})
export class CorrespondenceBookPageComponent {
  correspondenceBook: ICorrespondenceBookEntry[] = [];
  currentCorrespondenceBookEntry = new CorrespondenceBookEntry();
  transmitDirections = TRANSMIT_DIRECTION;

  constructor(
    private appService: AppService,
    private appDataService: AppDataService
  ) {
    this.correspondenceBook = appDataService.appData.correspondenceBook;
  }

  getTime(timestamp: Date) {
    return `${timestamp.getHours()}:${timestamp.getMinutes()}`;
  }

  getTimeDTG(timestamp: Date) {
    return this.appService.getTimeDTG(timestamp);
  }
}
