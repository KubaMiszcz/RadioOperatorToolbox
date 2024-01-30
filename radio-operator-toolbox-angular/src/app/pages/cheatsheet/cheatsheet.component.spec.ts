import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheatsheetComponent } from './cheatsheet.component';

describe('CheatsheetComponent', () => {
  let component: CheatsheetComponent;
  let fixture: ComponentFixture<CheatsheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheatsheetComponent]
    });
    fixture = TestBed.createComponent(CheatsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
