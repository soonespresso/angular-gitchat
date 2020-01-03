import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { fader } from '../animations/fader';

@Component({
  selector: 'app-fader',
  templateUrl: './fader.component.html',
  styleUrls: ['./fader.component.scss'],
  animations: [fader]
})
export class FaderComponent implements OnChanges {

  visibility = 'shown';

  @Input() isVisible = true;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.visibility = this.isVisible ? 'shown' : 'hidden';
  }
}
