import { AppDataService } from './../../services/app-data.service';
import { Component } from '@angular/core';
import { ICorrespondenceRegistryEntry } from 'src/app/models/correspondence-registry-entry.model';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-correspondence-book-page',
  templateUrl: './correspondence-book-page.component.html',
  styleUrls: ['./correspondence-book-page.component.scss'],
})
export class CorrespondenceBookPageComponent {
  correspondenceBook: ICorrespondenceRegistryEntry[] = [];

  constructor(
    private appService: AppService,
    private appDataService: AppDataService
  ) {
    this.correspondenceBook=appDataService.appData.correspondenceBook;
  }
}
