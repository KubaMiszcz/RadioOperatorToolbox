import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TDRSettingsPageComponent } from './tdrsettings-page.component';

describe('TDRSettingsPageComponent', () => {
  let component: TDRSettingsPageComponent;
  let fixture: ComponentFixture<TDRSettingsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TDRSettingsPageComponent]
    });
    fixture = TestBed.createComponent(TDRSettingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
