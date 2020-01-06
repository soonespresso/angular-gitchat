import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shadow-dom-mode',
  templateUrl: './shadow-dom-mode.component.html',
  styleUrls: ['./shadow-dom-mode.component.scss'],
  encapsulation: ViewEncapsulation.Native,
})
export class ShadowDomModeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
