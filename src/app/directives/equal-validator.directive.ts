import { Directive, Attribute } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[equalValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EqualValidatorDirective,
      multi: true
    }
  ]
})
export class EqualValidatorDirective implements Validator {

  constructor(
    @Attribute('equalValidator') public equalValidator: string,
    @Attribute('reverse') public reverse: string
  ) { }


  private get isReverse() {
    if (!this.reverse) {
      return false;
    }
    return this.reverse === 'true' ? true : false;
  }

  validate(control: AbstractControl): ValidationErrors {
    // console.log(control.errors);
    // 当前控件值
    const value = control.value;
    // equalValidator 属性注入值的 控件的值
    const equalControl = control.root.get(this.equalValidator);
    // console.log(this.equalValidator, value, equalControl);
    // 值不等
    if (equalControl && value !== equalControl.value && !this.isReverse) {
      return { equalValidator: false };
    }

    // 值相等 reverse
    if (equalControl && value === equalControl.value && this.isReverse) {
      delete equalControl.errors.equalValidator;
      if (!Object.keys(equalControl.errors).length) {
        equalControl.setErrors(null);
      }
    }

    // 值不相等 reverse
    if (equalControl && value !== equalControl.value && this.isReverse) {
      console.log('value not equal and reverse');
      equalControl.setErrors({ equalValidator: false, equalValidatorTest: 'Darwin' });
    }
    return null;
  }
}
