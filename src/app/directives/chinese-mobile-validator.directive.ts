import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[chineseMobileValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ChineseMobileValidatorDirective,
      multi: true
    }
  ]
})
export class ChineseMobileValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    /* console.log('ChineseMobileValidatorDirective.validate');
    console.log('control.errors: ' + control.errors); */
    const value = control.value;
    const flag = /^1(3|4|5|7|8)\d{9}$/.test(value);
    // console.log('Validation: ' + flag);
    if (flag) {
      control.setErrors(null);
    } else {
      control.setErrors({ chineseMobileValidator: true });
    }
    // console.log('control.errors[validate]: ' + JSON.stringify(control.errors));
    return flag ? null : { chineseMobileValidator: false }; // control.errors;
  }
}
