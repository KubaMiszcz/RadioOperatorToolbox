import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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

  constructor(
    private appService: AppService,
    private appDataService: AppDataService,
    private appSettings: AppSettingsService
  ) {}

  ngOnInit(): void {
    this.teams =
      this.tdrData?.teams.filter((t) => t.name !== '' || t.codename !== '') ??
      [];
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
}

const helpLines = `
podreczne dane z TDR
- kryptonimy, czestotliwosci, kody itp
- sciezki do opcji w RRC: GPS,KODEK,ALERT,AUTH itp
- alerty - numer/opis
- SARNEG parzyste/nieparzyste, losownik slow
- import/export TDR from json/txt
`;
