import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[validateEqual][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ConfirmValidatorDirective),
      multi: true
    }
  ]
})
export class ConfirmValidatorDirective implements Validator {

  constructor(
    @Attribute('validateEqual') private validateEqual: string,
    @Attribute('reverse') private reverse: string
  ) { }

  validate(control: AbstractControl): ValidationErrors | null {
    // 当前控件值
    const currentValue = control.value;
    // 对比控件
    const targetControl = control.root.get(this.validateEqual);

    if (!targetControl) {
      return null;
    }

    // 值不相等且不反向查询
    if (currentValue !== targetControl.value && !this.isReverse) {
      return { validateEqual: true };
    }

    // 值相等且反向查询
    if (currentValue === targetControl.value && this.isReverse) {
      targetControl.setErrors(null);
      /* delete targetControl.errors.validateEqual;
      if (!Object.keys(targetControl.errors).length) {
        targetControl.setErrors(null);
      } */
    }

    // 值相不等且反向查询
    if (currentValue !== targetControl.value && this.isReverse) {
      targetControl.setErrors({ validateEqual: true });
    }
    return null;
  }


  private get isReverse() {
    if (!this.reverse) {
      return false;
    }
    return this.reverse === 'true' ? true : false;
  }
}
