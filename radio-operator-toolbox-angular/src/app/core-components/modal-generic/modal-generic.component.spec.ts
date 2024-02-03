import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGenericComponent } from './modal-generic.component';

describe('ModalGenericComponent', () => {
  let component: ModalGenericComponent;
  let fixture: ComponentFixture<ModalGenericComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalGenericComponent]
    });
    fixture = TestBed.createComponent(ModalGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
