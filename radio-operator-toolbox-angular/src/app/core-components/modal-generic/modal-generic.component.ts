import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MODAL_RESULT } from 'src/app/models/constants/enums';

@Component({
  selector: 'app-modal-generic',
  templateUrl: './modal-generic.component.html',
  styleUrls: ['./modal-generic.component.scss'],
})
export class ModalGenericComponent {
  @Output() modalResult = new EventEmitter<MODAL_RESULT>();
  @Input() title = '';
  @Input() content = '';
  // @Input() modalResults = [MODAL_RESULT.YES, MODAL_RESULT.NO];
  @Input() modalResults = [MODAL_RESULT.YES, MODAL_RESULT.NO, MODAL_RESULT.CLOSE, MODAL_RESULT.CANCEL];

  MODAL_RESULTS = MODAL_RESULT;

  constructor() {}

  isButtonVisible(button: MODAL_RESULT): boolean {
    // return Array(this.MODAL_RESULTS).some((m) => String(m) === arg0.toString()); //km
    let result = this.modalResults.some((r) => r === button);
    console.log(result);

    return result;
    // if (Object.values(this.MODAL_RESULTS).includes(result)) {
    //   return true;
    // }

    // return false;
  }
}
