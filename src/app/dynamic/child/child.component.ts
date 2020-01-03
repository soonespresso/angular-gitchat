import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() title = 'Child Component';

  @Output() btnClicker = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  triggerEvent() {
    this.btnClicker.emit('Child 1 Click Event');
  }
}
