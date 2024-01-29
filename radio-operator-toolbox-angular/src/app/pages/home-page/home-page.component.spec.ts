import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTabComponent } from './home-page.component';

describe('HomeTabComponent', () => {
  let component: HomeTabComponent;
  let fixture: ComponentFixture<HomeTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeTabComponent]
    });
    fixture = TestBed.createComponent(HomeTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
