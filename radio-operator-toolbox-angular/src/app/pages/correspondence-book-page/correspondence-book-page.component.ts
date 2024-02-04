import { Guid } from 'guid-typescript';
import { AppDataService } from './../../services/app-data.service';
import { Component } from '@angular/core';
import { TRANSMIT_DIRECTION } from 'src/app/models/constants/enums';
import {
  CorrespondenceBookEntry,
  ICorrespondenceBookEntry,
} from 'src/app/models/correspondence-book-entry.model';
import { ITeam } from 'src/app/models/team.model';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-correspondence-book-page',
  templateUrl: './correspondence-book-page.component.html',
  styleUrls: ['./correspondence-book-page.component.scss'],
})
export class CorrespondenceBookPageComponent {
  correspondenceBook: ICorrespondenceBookEntry[] = [];
  // currentCorrespondenceBookEntry = new CorrespondenceBookEntry();
  myTeam = this.appDataService.appData.tdrData?.myTeam;
  teams = this.appDataService.appData.tdrData?.teams.filter(
    (t) => t.codename !== '' && t.codename
  );

  newEntry = new CorrespondenceBookEntry();
  newEntryDTG = '';

  transmitDirections = TRANSMIT_DIRECTION;

  constructor(
    private appService: AppService,
    private appDataService: AppDataService
  ) {
    this.correspondenceBook = appDataService.appData.correspondenceBook;

    this.newEntry = this.getReInitNewEntry();
  }

  getTime(timestamp: Date) {
    return `${timestamp.getHours()}:${timestamp.getMinutes()}`;
  }

  getTimeDTG(timestamp: Date = new Date()) {
    this.newEntryDTG = this.appService.getTimeDTG(timestamp);
    return this.appService.getTimeDTG(timestamp);
  }

  setNewEntryRecipient(team: ITeam) {
    this.newEntry.recipientCodename = team.codename;
  }

  setNewEntrySender(team: ITeam) {
    this.newEntry.senderCodename = team.codename;
  }

  addNewEntry() {
    if (this.newEntry.recipientCodename === this.myTeam?.codename) {
      this.newEntry.transmitDirection = TRANSMIT_DIRECTION.INCOMING;
    } else if (this.newEntry.senderCodename === this.myTeam?.codename) {
      this.newEntry.transmitDirection = TRANSMIT_DIRECTION.OUTGOING;
    } else {
      this.newEntry.transmitDirection = TRANSMIT_DIRECTION.BYPASSING;
      console.log('bypas');
      
    }

    this.correspondenceBook.push(this.newEntry);
    this.newEntry = this.getReInitNewEntry();

    this.appService.getGUID()
  }

  private getReInitNewEntry(): CorrespondenceBookEntry {
    return {
      guid: this.appService.getGUID(),
      timestamp: new Date(),
      senderCodename: this.myTeam?.codename ?? '',
      recipientCodename: 'Odbiorca',
      content: '',
    };
  }
}
