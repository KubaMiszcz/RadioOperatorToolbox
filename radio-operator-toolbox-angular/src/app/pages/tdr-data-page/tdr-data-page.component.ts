import { KeyValue } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ITDRData, TDRData } from 'src/app/models/tdr-data.model';
import { ITeam, Team } from 'src/app/models/team.model';
import { AppDataService } from 'src/app/services/app-data.service';
import { AppSettingsService } from 'src/app/services/app-settings.service';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-tdr-data-page',
  templateUrl: './tdr-data-page.component.html',
  styleUrls: ['./tdr-data-page.component.scss'],
})
export class TDRDataPageComponent {
  teams = this.appDataService.appData.tdrData?.teams ?? [];
  appData = this.appDataService.appData;
  tdrData: ITDRData = this.appDataService.appData.tdrData ?? new TDRData();
  timezones = this.appSettingsService.timezones;
  private modalRef!: NgbModalRef;
  @ViewChild('teamsPanelHelp') teamsPanelHelp: any;

  constructor(
    private appService: AppService,
    private appDataService: AppDataService,
    private appSettingsService: AppSettingsService,
    private modalService: NgbModal
  ) {
    console.log('fire'); //km
  }

  setMyTeam(team: ITeam) {
    this.appData.myTeam = team;
    // this.appDataService.appData.myTeam = team;
  }

  toggleFavourite(team: ITeam) {
    team.isFavourite = !team.isFavourite;
  }

  addNewTeam() {
    this.teams.push({ name: 'nazwa', codename: 'kryptonim' });
  }

  removeTeam(team: ITeam) {
    let idx = this.teams.indexOf(team);
    this.teams.splice(idx, 1);
  }

  addNewAlert() {
    this.tdrData.alerts?.push({ key: 0, value: 'alert' });
  }

  removeAlert(alert: KeyValue<number, string>) {
    let idx = this.tdrData.alerts?.indexOf(alert) ?? 0;
    this.tdrData.alerts?.splice(idx, 1);
  }

  getTimezoneLabel(timezoneOffset: number = 0) {
    let tzCode = this.appSettingsService.timezones.find((t) => t.key === timezoneOffset)?.value;
    return `${tzCode} \xa0\xa0\xa0 ${timezoneOffset < 0 ? '' : '+'}${timezoneOffset}h`;
  }

  showTooltip() {
    this.modalRef = this.modalService.open(this.teamsPanelHelp, {
      size: 'md',
      backdrop: true,
    });
  }

  closeModal(value: any) {
    this.modalRef.close();
  }
}
