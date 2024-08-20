import { KeyValue } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalGenericComponent } from 'src/app/core-components/modal-generic/modal-generic.component';
import { MODAL_RESULT } from 'src/app/models/constants/enums';
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
export class TDRDataPageComponent implements OnInit {
  teams: ITeam[] = [];
  myTeam = this.appDataService.appData.tdrData?.myTeam ?? new Team();
  helpLines = helpLines;
  tdrData: ITDRData = this.appDataService.appData.tdrData ?? new TDRData();
  timezones = this.appSettings.timezones;
  private modalRef!: NgbModalRef;
  @ViewChild('teamsPanelHelp') teamsPanelHelp: any;


  constructor(
    private appService: AppService,
    private appDataService: AppDataService,
    private appSettings: AppSettingsService,
    private modalService: NgbModal,
  ) {}

  ngOnInit(): void {
    this.teams = this.tdrData?.teams.filter((t) => t.name !== '' || t.codename !== '') ?? [];
  }

  setMyTeam(team: ITeam) {
    this.myTeam = team;
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
    this.tdrData.alerts.push({ key: 0, value: 'alert' });
  }

  removeAlert(alert: KeyValue<number, string>) {
    let idx = this.tdrData.alerts.indexOf(alert);
    this.tdrData.alerts.splice(idx, 1);
  }

  getTimezoneLabel(timezoneOffset: number) {
    let tzCode = this.appSettings.timezones.find((t) => t.key === timezoneOffset)?.value;
    // return tzkey + '   ' + (timezoneOffset > 0 ? '+' : '-') + timezoneOffset + 'h';
    return `${tzCode} \xa0\xa0\xa0 ${timezoneOffset < 0 ? '' : '+'}${timezoneOffset}h`;
  }

  showTooltip() {
    const modalRef = this.modalService.open(ModalGenericComponent);
    modalRef.componentInstance.title = 'Help';
    modalRef.componentInstance.content = helpLines;
    modalRef.componentInstance.modalResults = [MODAL_RESULT.CLOSE];
    modalRef.componentInstance.modalResult.subscribe((result: MODAL_RESULT) => {
      modalRef.close();
    });
  }

  showTooltipBS() {
    this.modalRef = this.modalService.open(this.teamsPanelHelp, {
      size: 'md',
      backdrop: true,
    });
  }

  closeModal(value: any) {
    this.modalRef.close();
  }
}

const helpLines = `
podreczne dane z TDR\n
- kryptonimy, czestotliwosci, kody itp
- sciezki do opcji w RRC: GPS,KODEK,ALERT,AUTH itp
- alerty - numer/opis
- SARNEG parzyste/nieparzyste, losownik slow
- import/export TDR from json/txt
`;
