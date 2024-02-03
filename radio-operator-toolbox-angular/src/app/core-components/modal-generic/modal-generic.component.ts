import { Component, EventEmitter, Output } from '@angular/core';
import { MODAL_RESULT } from 'src/app/models/constants/enums';

@Component({
  selector: 'app-modal-generic',
  templateUrl: './modal-generic.component.html',
  styleUrls: ['./modal-generic.component.scss'],
})
export class ModalGenericComponent {
  @Output() modalResult = new EventEmitter<MODAL_RESULT>();
  MODAL_RESULTS = MODAL_RESULT;

  constructor() {}
}
