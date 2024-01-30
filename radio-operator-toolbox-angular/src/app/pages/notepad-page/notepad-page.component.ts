import { INotepadPage, NotepadPage } from 'src/app/models/notepad.model';
import { AppDataService } from './../../services/app-data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-notepad-page',
  templateUrl: './notepad-page.component.html',
  styleUrls: ['./notepad-page.component.scss'],
})
export class NotepadPageComponent {
  pages = this.appDataService.appData.notepad.pages;
  currentPage = new NotepadPage();
  // pageNo = 1;

  constructor(private appDataService: AppDataService) {
    this.currentPage = this.pages?.find((p) => p.pageNo === 1) ?? new NotepadPage();
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
        this.pages.find((p) => p.pageNo === (this.currentPage.pageNo - 1)) ??
        new NotepadPage();
    }
  }

  nextPage() {
    if (this.currentPage.pageNo < this.pages.length) {
      this.currentPage = this.pages.find((p) => p.pageNo === (this.currentPage.pageNo = 1)) ??
      new NotepadPage();
    }
  }

  removePage() {
    // this.pages.push('');
  }
}
