import { Component, OnInit, Input } from '@angular/core';
import { faderSimplify } from '../animations/fader-simplify';

@Component({
  selector: 'app-fader-simplify',
  templateUrl: './fader-simplify.component.html',
  styleUrls: ['./fader-simplify.component.scss'],
  animations: [faderSimplify]
})
export class FaderSimplifyComponent implements OnInit {

  @Input() isVisible = true;

  constructor() { }

  ngOnInit() {
  }

}
