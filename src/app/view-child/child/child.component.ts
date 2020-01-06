import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  public id: string;

  @Input() title = 'Child Component';

  @Output() helloEvent = new EventEmitter<string>();

  constructor() {
    this.id = '[ID] - ' + Math.floor(Math.random() * 100000000);
  }

  ngOnInit() {
  }

  sayHello() {
    this.helloEvent.emit(this.id);
  }
}
