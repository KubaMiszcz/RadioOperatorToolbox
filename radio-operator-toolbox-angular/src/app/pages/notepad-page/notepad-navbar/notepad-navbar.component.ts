import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-notepad-navbar',
  templateUrl: './notepad-navbar.component.html',
  styleUrls: ['./notepad-navbar.component.scss'],
})
export class NotepadNavbarComponent {
  @Output() nextPage = new EventEmitter();
  @Output() prevPage = new EventEmitter();
  @Output() addPage = new EventEmitter();
  @Output() removePage = new EventEmitter();
}
