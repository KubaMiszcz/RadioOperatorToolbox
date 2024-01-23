import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrespondenceBookPageComponent } from './correspondence-book-page.component';

describe('CorrespondenceBookPageComponent', () => {
  let component: CorrespondenceBookPageComponent;
  let fixture: ComponentFixture<CorrespondenceBookPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorrespondenceBookPageComponent]
    });
    fixture = TestBed.createComponent(CorrespondenceBookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
