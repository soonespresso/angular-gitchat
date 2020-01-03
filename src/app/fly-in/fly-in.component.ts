import { Component, OnInit } from '@angular/core';
import { flyIn } from '../animations/fly-in';

@Component({
  selector: 'app-fly-in',
  templateUrl: './fly-in.component.html',
  styleUrls: ['./fly-in.component.scss'],
  animations: [flyIn]
})
export class FlyInComponent implements OnInit {

  state: string;

  constructor() { }

  ngOnInit() {
  }

}
