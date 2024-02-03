import { AppService } from 'src/app/services/app.service';
import { AppSettingsService } from 'src/app/services/app-settings.service';
import { Component, ViewChild } from '@angular/core';
import { IReport } from 'src/app/models/report.model';
import { AppDataService } from 'src/app/services/app-data.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  reports: IReport[] = [];
  private modalRef!: NgbModalRef;
  @ViewChild('infoModal') infoModal: any;
  isMenuHidden = true;

  constructor(
    private appService: AppService,
    private appDataService: AppDataService,
    private appSettingsService: AppSettingsService,
    private modalService: NgbModal
  ) {
    this.reports = this.appSettingsService.appSettings.reportsTemplates;
  }

  setCurrentReport(report: IReport) {
    this.appService.currenReportBS.next(report);
  }

  getFavouriteReports() {
    return this.reports.filter((r) => !!r.isFavourite);
  }

  clearAllData() {
    this.appDataService.clearAllData();
  }

  showQuickSheetModal() {
    this.modalRef = this.modalService.open(this.infoModal, { size: 'sm' });
  }

  closeModal(value: any) {
    this.modalRef.close();
  }
}
