import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {

  @Output() sayhello = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  sayHello() {
    this.sayhello.emit('Hello World!');
  }
}
