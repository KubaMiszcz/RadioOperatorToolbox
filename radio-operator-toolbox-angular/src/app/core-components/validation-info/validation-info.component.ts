import { VALIDATIONS_TYPES } from '../../models/constants/validations-types.enum';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation-info',
  templateUrl: './validation-info.component.html',
  styleUrls: ['./validation-info.component.scss'],
})
export class ValidationInfoComponent implements OnInit {
  @Input() type = VALIDATIONS_TYPES.CUSTOM;
  @Input() types = [VALIDATIONS_TYPES.CUSTOM];
  @Input() pattern = VALIDATIONS_TYPES.PATTERN;
  @Input() maxLength = VALIDATIONS_TYPES.PATTERN;
  @Input() minLength = VALIDATIONS_TYPES.MAXMIN;

  @Input() errorMessages: string[] = [];
  @Input() errorMessage = '';

  constructor() {}

  ngOnInit(): void {
    let defaultErrorMessage = '';
    switch (this.type) {
      case VALIDATIONS_TYPES.REQUIRED:
        defaultErrorMessage = 'wartość wymagana';
        break;
      case VALIDATIONS_TYPES.PATTERN:
        defaultErrorMessage = 'pattern\n';
        break;
      default:
        defaultErrorMessage = 'Błąd walidacji';
        break;
    }

    this.errorMessages = [defaultErrorMessage, this.errorMessage, ...this.errorMessages];
  }
}
