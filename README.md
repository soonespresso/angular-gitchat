# 表单检验

表单校验一定会牵扯到一个比较头疼的技术点：正则表达式。正则表达式是不可或缺的。

## 状态标志位

Form、FormGroup、FormControl（输入项）都有一些标志位可以使用，这些标志位是 Angular 提供的，一共 9 个（官方的文档里面没有明确列出来，或者列得不全）：

- valid：校验成功
- invalid：校验失败
- pending：表单正在提交过程中
- pristine：数据依然处于原始状态，用户没有修改过
- dirty：数据已经变脏了，被用户改过了
- touched：被触摸或者点击过
- untouched：未被触摸或者点击
- enabled：启用状态
- disabled：禁用状态

Form 上面多一个状态标志位 submitted，可以用来判断表单是否已经提交。

我们可以利用这些标志位来判断表单和输入项的状态。

## 内置校验规则

Angular 一共内置了 8 种校验规则：

1. required
2. requiredTrue
3. minLength
4. maxLength
5. pattern
6. nullValidator
7. compose
8. composeAsync

详细 API：https://angular.cn/api/forms/Validators

## 判断验证通过

在 Angular 中，我们可以通过 `#userName="ngModel"` 方式获取 `ngModel` 对象，然后通过 `userName.valid` 判断表单控件是否通过。

```html
<input type="text"  required [(ngModel)]="username" #userName="ngModel">
	{{userName.valid}}
```

## 获取表单提交的值

在 Angular 中，我们可以 `#loginForm="ngForm"` 方式获取 `ngForm` 对象，然后通过 `loginForm.value` 来获取表单的值。

```html
<form #loginForm="ngForm" (ngSubmit)="onSubmit(loginForm.value)">
	<input type="text" required minlength="3" name="username" [(ngModel)]="username"
     #userName="ngModel">
    <hr>
    <div *ngIf="userName.errors?.required">请您输入用户名</div>
    <div *ngIf="userName.errors?.minlength">
		用户名的长度必须大于 {{userName.errors?.minlength.requiredLength}}，
		当前的长度为 {{userName.errors?.minlength.actualLength}}
    </div>
    <button type="submit">提交</button>
    {{loginForm.value | json}}
  </form>
```

```typescript
export class AppComponent {
  username = 'semlinker';

  onSubmit(value) {
    console.dir(value);
  }
}
```

## 简单校验

*src\app\form-quick-start\form-quick-start.component.html*

```html
<div class="panel panel-primary">
  <div class="panel-heading">User registry</div>
  <div class="panel-body">
    <form #registerForm="ngForm" class="form-horizontal">
      <div class="form-group" 
           [ngClass]="{'has-error': userName.invalid && (userName.dirty || userName.touched) }">
        <label class="col-xs-2 control-label">User Name :</label>
        <div class="col-xs-10">
          <input #userName="ngModel" [(ngModel)]="register.userName" name="userName" 
                 required minlength="12" maxlength="32"
                 type="email" placeholder="Email" class="form-control">
          <div *ngIf="userName.invalid && (userName.dirty || userName.touched)" class="text-danger">
            <div *ngIf="userName.errors.required">
              This field is required.
            </div>
            <div *ngIf="userName.errors.minlength">
              Please enter no at least {{ userName.errors.minlength }} characters.
            </div>
            <div *ngIf="userName.errors.maxlength">
              Please enter no more than {{ userName.errors.maxlength }} characters.
            </div>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label class="col-xs-2 control-label">Password :</label>
        <div class="col-xs-10">
          <input #pwd [(ngModel)]="register.password" name="password" (keyup)="0" 
                 type="password" placeholder="Password" class="form-control">
        </div>
      </div>
    </form>
  </div>
  <div class="panel-footer">
    <p>User Name: {{userName.value}}</p>
    <p>userName.valid: {{userName.valid}}</p>
    <p>userName.invalid: {{userName.invalid}}</p>
    <p>userName.pending: {{userName.pending}}</p>
    <p>userName.pristine: {{userName.pristine}}</p>
    <p>userName.dirty: {{userName.dirty}}</p>
    <p>userName.untouched: {{userName.untouched}}</p>
    <p>userName.touched: {{userName.touched}}</p>
    <br>
    <p>Password: {{ pwd.value }}</p>
    <br>
    <p>Form state</p>
    <p>registerForm.valid: {{registerForm.valid}}</p>
    <p>registerForm.invalid: {{registerForm.invalid}}</p>
    <p>registerForm.pending: {{registerForm.pending}}</p>
    <p>registerForm.pristine: {{registerForm.pristine}}</p>
    <p>registerForm.dirty: {{registerForm.dirty}}</p>
    <p>registerForm.untouched: {{registerForm.untouched}}</p>
    <p>registerForm.touched: {{registerForm.touched}}</p>
  </div>
</div>

```

## 自定义校验

*src\app\form-quick-start\form-quick-start.component.html*

```html
<!-- 自定义校验 -->
<div class="form-group" [ngClass]="{'has-error': mobile.invalid && (mobile.dirty || mobile.touched) }">
    <label class="col-xs-2 control-label">Mobile :</label>
    <div class="col-xs-10">
        <input #mobile="ngModel" [(ngModel)]="register.mobile" name="mobile" 
               chineseMobileValidator required
               type="text" placeholder="Mobile" class="form-control">
        <div *ngIf="mobile.invalid && (mobile.dirty || mobile.touched)" class="text-danger">
            <div *ngIf="mobile.errors.required">
                This field is required.
            </div>
            <div *ngIf="mobile.errors.chineseMobileValidator">
                Please enter a valid mobile number.
            </div>
        </div>
    </div>
</div>
```

*src\app\directives\chinese-mobile-validator.directive.ts*

```typescript
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
    const value = control.value;
    const flag = /^1(3|4|5|7|8)\d{9}$/.test(value);
    if (flag) {
      control.setErrors(null);
    } else {
      control.setErrors({ chineseMobileValidator: true });
    }
    return flag ? null : { chineseMobileValidator: false }; // control.errors;
  }
}

```

## 确认密码验证

*src\app\form-quick-start\form-quick-start.component.html*

```html
<!-- 确认密码 -->
<div class="form-group">
    <label class="col-xs-2 control-label">Password :</label>
    <div class="col-xs-10">
        <input #pwd="ngModel" [(ngModel)]="register.password" name="password"
               required
               type="password" placeholder="Password" class="form-control">
        <div *ngIf="pwd.invalid && (pwd.dirty || pwd.touched)" class="text-danger">
            <div *ngIf="pwd.errors.required">
                This field is required.
            </div>
        </div>
    </div>
</div>
<div class="form-group">
    <label class="col-xs-2 control-label">Confirm password :</label>
    <div class="col-xs-10">
        <input #cpwd="ngModel" [(ngModel)]="register.confirmPassword" name="confirmPassword"
               required equalValidator="password"
               type="password" placeholder="Confirm Password" class="form-control">
        <div *ngIf="cpwd.invalid && (cpwd.dirty || cpwd.touched)" class="text-danger">
            <div *ngIf="cpwd.errors.required">
                This field is required.
            </div>
            <div *ngIf="!cpwd.errors.equalValidator">
                Password mismatch.
            </div>
        </div>
    </div>
</div>
```

*src\app\directives\equal-validator.directive.ts*

```typescript
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
    @Attribute('equalValidator') public equalValidator: string
  ) { }



  validate(control: AbstractControl): ValidationErrors {
    // 当前控件值
    const value = control.value;
    // equalValidator 属性注入值的 控件的值
    const equalControl = control.root.get(this.equalValidator);
    console.log(this.equalValidator, value, equalControl);
    // 值不等
    if (equalControl && value !== equalControl.value) {
      return { equalValidator: false };
    }
    return null;
  }
}

```

当你在 password 字段中输入 “123”，在 confirmPassword 字段中也输入 “123”，然后将 password 字段值改为 “1234”，验证仍然通过，**Why？**

因为我们只把等值验证器应用到 confirmPassword 字段，只有当 confirmPassword 的值发生变化时才会触发验证。

**解决办法**

再次使用 equalValidator 验证器添加一个 reverse 属性。

*src\app\form-quick-start\form-quick-start.component.html*

```html
<input #pwd="ngModel" [(ngModel)]="register.password" name="password"
       required equalValidator="confirmPassword" reverse="true"
       type="password" placeholder="Password" class="form-control">

<input #cpwd="ngModel" [(ngModel)]="register.confirmPassword" name="confirmPassword"
       required equalValidator="password"
       type="password" placeholder="Confirm Password" class="form-control">
```

- reverse：是 false 或者没有设置的时候，会像之前的那样执行等值验证器。
- reverse：是 true 的时候，仍然会执行等值验证器，但是不会为当前控件添加错误消息，而是**为指定会把的目标控件添加错误消息**。

我们设置 password 验证的 reverse 为 true。只要 password 与 confirmPassword 的值不等，我们会为 confirmPassword 字段添加一个错误消息，而不是重置 password 字段。

```typescript
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

```

## 一些猜想

```typescript
class EqualValidatorDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors {}
}
```

校验指令类中的 validate 方法参入当前控件 control，返回当前指令校验的结果，以及 control.setErrors 方法。一下伪代码猜想原理：

```typescript
// 错误信息提示对象
let errors = {};
// 当前控件
let control;

for(let control of controls) {
	errors[control.getClass()] = form.validate((control) => {
       control.setErrors((e) => {
           errors[control.getClass()] = e;
       });
    });
}

if(!Object.keys(errors).length) {
    this.form.errors = null;
}else {
    this.form.errors = errors;
}

```

- validate()：返回当前控件的错误信息
- control.setErrors：设置当前控件的错误信息
- validate()返回的错误信息优先级大于control.setErrors设置的