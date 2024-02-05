import { Component } from '@angular/core';
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
  myTeam = this.appDataService.appData.tdrData?.myTeam ?? new Team();

  constructor(
    private appService: AppService,
    private appDataService: AppDataService,
    private appSettings: AppSettingsService
  ) {}

  setMyTeam(team: ITeam) {
    this.myTeam = team;
  }

  toggleFavourite(team: ITeam) {
    team.isFavourite = !team.isFavourite;
  }

  addNewTeam() {
    this.teams.push(new Team());
  }

  removeTeam(team: ITeam) {
    let idx = this.teams.indexOf(team);
    this.teams.splice(idx, 1);
  }
}
