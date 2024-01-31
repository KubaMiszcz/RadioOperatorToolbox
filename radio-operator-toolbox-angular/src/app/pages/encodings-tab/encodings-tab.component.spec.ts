import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncodingsTabComponent } from './encodings-tab.component';

describe('EncodingsTabComponent', () => {
  let component: EncodingsTabComponent;
  let fixture: ComponentFixture<EncodingsTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncodingsTabComponent]
    });
    fixture = TestBed.createComponent(EncodingsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
