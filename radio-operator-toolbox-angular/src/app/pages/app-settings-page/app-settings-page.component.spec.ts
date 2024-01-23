import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSettingsPageComponent } from './app-settings-page.component';

describe('AppSettingsPageComponent', () => {
  let component: AppSettingsPageComponent;
  let fixture: ComponentFixture<AppSettingsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppSettingsPageComponent]
    });
    fixture = TestBed.createComponent(AppSettingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
