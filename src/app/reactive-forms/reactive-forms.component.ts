import { getProvinces } from './../common/utils/area';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ValidatorFn, ValidationErrors, AbstractControl, FormArray } from '@angular/forms';
import { mergeMap } from 'rxjs/operators';
import { getCitiesByProvince, getAreasByCity } from '../common/utils/area';
import { combineLatest, of, Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  user: FormGroup;
  provinces: string[];
  cities$: Observable<string[]>[] = [];
  areas$: Observable<string[]>[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // FormBuilder 初始化表单
    this.user = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm: ['', [Validators.required, Validators.minLength(8)]],
      /* address: this.formBuilder.group({
        province: [],
        city: [],
        area: [],
        street: []
      }) */
      address: this.formBuilder.array([])
    }, {// 自定义验证
      validators: this.validateEqual('password', 'confirm')
    });

    this.provinces = getProvinces();
    /* // 初始化表单
    this.user = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+.[a-zA-Z]{2,4}/)
      ]),
      password: new FormControl('', [Validators.required]),
      confirm: new FormControl('', [Validators.required]),
      address: new FormGroup({
        province: new FormControl(''),
        city: new FormControl(''),
        area: new FormControl(''),
        street: new FormControl('')
      })
    }); */
  }


  validateEqual(passwordKey: string, confirmKey: string): ValidatorFn {
    return (group: FormGroup): ValidationErrors | null => {
      const password = group.controls[passwordKey];
      const confirm = group.controls[confirmKey];
      if (password.value !== confirm.value) {
        return { validateEqual: true };
      }
      return null;
    };
  }

  onSubmit(user: FormGroup, event: Event) {
    console.log(user);
    console.log(event);
  }


  addAddress() {
    (this.user.controls.address as FormArray).push(this.createAddress());
  }

  private createAddress() {
    const group = this.formBuilder.group({
      province: [],
      city: [],
      area: [],
      street: []
    });
    const provinceChanges = group.get('province').valueChanges;
    const cityChanges = group.get('city').valueChanges;

    const city$ = provinceChanges.pipe(mergeMap(province => of(getCitiesByProvince(province))));
    const area$ = combineLatest(provinceChanges, cityChanges, (province, city) => ({ province, city })).pipe(
      mergeMap(({ province, city }) => of(getAreasByCity(province, city)))
    );

    this.cities$.push(city$);
    this.areas$.push(area$);

    return group;
  }
}
