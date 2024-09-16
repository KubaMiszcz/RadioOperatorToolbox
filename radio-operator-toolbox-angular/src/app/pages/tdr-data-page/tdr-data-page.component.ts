import { values } from 'lodash-es';
import { KeyValue } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ITDRData, TDRData } from 'src/app/models/tdr-data.model';
import { ITeam, Team } from 'src/app/models/team.model';
import { AppDataService } from 'src/app/services/app-data.service';
import { AppSettingsService } from 'src/app/services/app-settings.service';
import { AppService } from 'src/app/services/app.service';
import { CoreService } from 'src/app/services/core.service';
import { IPoint3D } from 'src/app/models/point3D.model';
import { VALIDATIONS_TYPES } from 'src/app/models/constants/validations-types.enum';

@Component({
  selector: 'app-tdr-data-page',
  templateUrl: './tdr-data-page.component.html',
  styleUrls: ['./tdr-data-page.component.scss'],
})
export class TDRDataPageComponent implements OnDestroy {
  teams = this.appDataService.appData.tdrData?.teams ?? [];
  appData = this.appDataService.appData;
  tdrData: ITDRData = this.appDataService.appData.tdrData ?? new TDRData();
  timezones = this.appSettingsService.timezones;
  private modalRef!: NgbModalRef;
  @ViewChild('teamsPanelHelp') teamsPanelHelp: any;
  console = console;
  VALIDATIONS_TYPES=VALIDATIONS_TYPES;

  constructor(
    private appService: AppService,
    private appDataService: AppDataService,
    private appSettingsService: AppSettingsService,
    private coreService: CoreService,
    private modalService: NgbModal
  ) {}

  setMyTeam(team: ITeam) {
    this.appData.myTeam = team;
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

  addNewKeyword() {
    this.tdrData.keywords?.push({ key: '', value: '' });
  }

  removeKeyword(keyword: KeyValue<string, string>) {
    let idx = this.tdrData.keywords?.indexOf(keyword) ?? 0;
    this.tdrData.keywords?.splice(idx, 1);
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

  validateNetworkNo(value: any) {
    let networkNo = value.target['valueAsNumber'];
    this.tdrData.networkNo = networkNo;
  }

  timezoneDown(value: number | undefined) {
    let curTZ = this.tdrData.currentTimezoneOffset ?? 0;
    if (curTZ > -12) {
      this.tdrData.currentTimezoneOffset = curTZ - 1;
    }
  }

  timezoneUp(value: number | undefined) {
    let curTZ = this.tdrData.currentTimezoneOffset ?? 0;
    if (curTZ < 12) {
      this.tdrData.currentTimezoneOffset = curTZ + 1;
    }
  }

  updateGridOffset(arg0: IPoint3D | undefined, dir: string, event: FocusEvent) {
    if (arg0) {
      arg0[dir as keyof typeof arg0] = this.coreService.getValueAsNumberFromEvent(event);
    }
  }

  validateAlert(value: KeyValue<number, string>) {
    if (this.tdrData.alerts?.some((k) => k.key === value.key)) {
      alert('alert z tym numerem juz istnieje');
    }
    if (this.tdrData.alerts?.some((k) => k.value === value.value)) {
      alert('alert z taka trescia juz istnieje');
    }
  }
  validateKeyword(value: KeyValue<string, string>) {
    if (this.tdrData.keywords?.some((k) => k.key.toLowerCase() === value.key.toLowerCase())) {
      alert('takie slowo kodowe juz istnieje');
    }
    if (this.tdrData.alerts?.some((k) => k.value.toLowerCase() === value.value.toLowerCase())) {
      alert('slowo kodowe z taka trescia juz istnieje');
    }
  }

  ngOnDestroy(): void {
    //km validate all form and page
    this.appDataService.updateAndSaveAppData();
  }
}
