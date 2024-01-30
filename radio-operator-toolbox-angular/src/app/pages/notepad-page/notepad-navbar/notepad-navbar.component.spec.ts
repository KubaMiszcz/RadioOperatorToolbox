import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotepadNavbarComponent } from './notepad-navbar.component';

describe('NotepadNavbarComponent', () => {
  let component: NotepadNavbarComponent;
  let fixture: ComponentFixture<NotepadNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotepadNavbarComponent]
    });
    fixture = TestBed.createComponent(NotepadNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
