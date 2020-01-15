import { Component, OnInit } from '@angular/core';
import { getProvinces, getCitiesByProvince, getAreasByCity } from '../common/utils/area';
import { User } from '../common/form.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {

  user: User = {
    email: 'icanflylzx2018@163.com', password: '', confirm: '',
    address: { province: '', city: '', area: '', street: '' }
  };

  provinces = getProvinces();
  cities = [];
  areas = [];

  constructor() { }

  ngOnInit() {
  }


  // ----- Event / Change ------------------------------------------------------------------------------------------------------------------

  onProvinceChange() {
    const { address: { province }, address } = this.user;
    this.cities = getCitiesByProvince(province);
    this.areas = [];
    address.city = '';
    address.area = '';
  }

  onCityChange() {
    const { address, address: { province, city } } = this.user;
    this.areas = getAreasByCity(province, city);
    address.area = '';
  }

  // ----- Event / Submit ------------------------------------------------------------------------------------------------------------------

  onSubmit({ value, valid }: NgForm, event: Event) {
    if (valid) {
      console.log(value);
    }
    event.preventDefault();
  }
}
