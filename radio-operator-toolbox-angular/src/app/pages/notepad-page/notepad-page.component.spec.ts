import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotepadPageComponent } from './notepad-page.component';

describe('NotepadPageComponent', () => {
  let component: NotepadPageComponent;
  let fixture: ComponentFixture<NotepadPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotepadPageComponent]
    });
    fixture = TestBed.createComponent(NotepadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
