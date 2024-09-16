import { AppService } from 'src/app/services/app.service';
import { AppSettingsService } from 'src/app/services/app-settings.service';
import { Component, ViewChild } from '@angular/core';
import { IReport } from 'src/app/models/report.model';
import { AppDataService } from 'src/app/services/app-data.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { MODAL_RESULT } from 'src/app/models/constants/enums';
import { ModalGenericComponent } from '../modal-generic/modal-generic.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  reports: IReport[] = [];
  private modalRef!: NgbModalRef;
  @ViewChild('quickDataModal') quickDataModal: any;
  @ViewChild('clearAllModal') clearAllModal: any;
  isMenuHidden = true;

  constructor(
    private appService: AppService,
    private appDataService: AppDataService,
    private appSettingsService: AppSettingsService,
    private modalService: NgbModal
  ) {
    this.reports = this.appSettingsService.appSettings.reportsTemplates ?? [];
  }

  setCurrentReport(report: IReport) {
    this.appService.currentReportBS.next(report);
  }

  getFavouriteReports() {
    return this.reports.filter((r) => !!r.isFavourite);
  }

  showClearAllModal() {
    const modalRef = this.modalService.open(ModalGenericComponent);
    modalRef.componentInstance.title = '';
    modalRef.componentInstance.content = 'Wyczyścic wszystkie dane?';
    modalRef.componentInstance.modalResults = [MODAL_RESULT.YES, MODAL_RESULT.NO];
    modalRef.componentInstance.modalResult.subscribe((result:MODAL_RESULT) => {
      if (result === MODAL_RESULT.YES) {
        this.appDataService.clearAllData();
        this.appSettingsService.clearAllSettings();
      }
      modalRef.close();
    })
    }
  
  showQuickSheetModal() {
    this.modalRef = this.modalService.open(this.quickDataModal, {
      size: 'sm',
      backdrop: true,
    });
  }

  closeModal(value: any) {
    this.modalRef.close();
  }
}
