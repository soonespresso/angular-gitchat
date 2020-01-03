import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { flyInOut } from '../animations/fly-inout';

@Component({
  selector: 'app-fly-inout',
  templateUrl: './fly-inout.component.html',
  styleUrls: ['./fly-inout.component.scss'],
  animations: [flyInOut]
})
export class FlyInoutComponent implements OnChanges {

  visibility = 'in';

  @Input() isVisible = true;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.visibility = this.isVisible ? 'in' : 'out';
  }
}
