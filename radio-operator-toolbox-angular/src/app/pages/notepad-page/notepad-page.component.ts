import { INotepadPage, NotepadPage } from './../../models/notepad.model';
import { AppDataService } from './../../services/app-data.service';
import { Component, OnDestroy, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CRUD as CRUD_METHODS } from 'src/app/models/constants/enums';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'app-notepad-page',
  templateUrl: './notepad-page.component.html',
  styleUrls: ['./notepad-page.component.scss'],
})
export class NotepadPageComponent {
  pages: INotepadPage[] = [];
  currentPage = new NotepadPage();
  @ViewChild('mymodal') mymodal: any;
  private modalRef!: NgbModalRef;
  CRUD_METHODS = CRUD_METHODS;

  subs: Subscription[] = [];

  constructor(
    private appDataService: AppDataService,
    private modalService: NgbModal
  ) {
    this.pages = this.appDataService.appData.notepad.pages;

    this.currentPage =
      this.pages?.find((p) => p.pageNo === 1) ?? new NotepadPage();
  }

  getPageNo(page: INotepadPage) {
    console.log('idx=', this.pages.indexOf(page));
  }

  addPage() {
    let page: INotepadPage = {
      pageNo: this.pages.length + 1,
      pageContent: '',
    };

    this.pages.push(page);
    this.currentPage = page;
  }

  prevPage() {
    if (this.currentPage.pageNo > 1) {
      this.currentPage =
        this.pages.find((p) => p.pageNo === this.currentPage.pageNo - 1) ??
        new NotepadPage();
    }
  }

  nextPage() {
    if (this.currentPage.pageNo < this.pages.length) {
      this.currentPage =
        this.pages.find((p) => p.pageNo === this.currentPage.pageNo + 1) ??
        new NotepadPage();
    }
  }

  removePage() {
    this.nextPage();
    _.remove(this.pages, { pageNo: this.currentPage.pageNo });
  }

  showDeletePageModal() {
    this.modalRef = this.modalService.open(this.mymodal, { size: 'sm' });
  }

  closeModal(value: any) {
    if (value === CRUD_METHODS.DELETE) {
      this.removePage();
    }

    this.modalRef.close();
  }
}
