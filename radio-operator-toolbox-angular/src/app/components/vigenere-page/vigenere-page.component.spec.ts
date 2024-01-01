import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VigenerePageComponent } from './vigenere-page.component';

describe('VigenerePageComponent', () => {
  let component: VigenerePageComponent;
  let fixture: ComponentFixture<VigenerePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VigenerePageComponent]
    });
    fixture = TestBed.createComponent(VigenerePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
