import { Component, OnInit } from '@angular/core';
import { RegisterModel } from './form-quick-start.model';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form-quick-start',
  templateUrl: './form-quick-start.component.html',
  styleUrls: ['./form-quick-start.component.scss']
})
export class FormQuickStartComponent implements OnInit {

  obj: ValidationErrors = {};
  register = new RegisterModel();

  constructor() { }

  ngOnInit() {
  }
}
