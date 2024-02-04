import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpTileComponent } from './help-tile.component';

describe('HelpTileComponent', () => {
  let component: HelpTileComponent;
  let fixture: ComponentFixture<HelpTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelpTileComponent]
    });
    fixture = TestBed.createComponent(HelpTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
