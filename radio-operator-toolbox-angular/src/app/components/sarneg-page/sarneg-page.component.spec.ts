import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarnegPageComponent } from './sarneg-page.component';

describe('SarnegPageComponent', () => {
  let component: SarnegPageComponent;
  let fixture: ComponentFixture<SarnegPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SarnegPageComponent]
    });
    fixture = TestBed.createComponent(SarnegPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
