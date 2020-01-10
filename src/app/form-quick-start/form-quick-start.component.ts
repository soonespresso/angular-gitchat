import { Component, OnInit } from '@angular/core';
import { RegisterModel } from './form-quick-start.model';

@Component({
  selector: 'app-form-quick-start',
  templateUrl: './form-quick-start.component.html',
  styleUrls: ['./form-quick-start.component.scss']
})
export class FormQuickStartComponent implements OnInit {

  register = new RegisterModel();

  constructor() { }

  ngOnInit() {
  }
}
