import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-none-mode',
  templateUrl: './none-mode.component.html',
  styleUrls: ['./none-mode.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NoneModeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
