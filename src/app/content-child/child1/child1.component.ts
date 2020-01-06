import { Component, OnInit, ContentChildren, QueryList, AfterContentInit, ContentChild } from '@angular/core';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit, AfterContentInit {

  @ContentChild(/* Child2Component */'child2', { static: true })
  children2: Child2Component;
  /* @ContentChildren(Child2Component)
  children2: QueryList<Child2Component>; */

  constructor() { }

  ngOnInit() {
    console.log(this.children2);
  }

  ngAfterContentInit(): void {
    console.log(this.children2);
    /* this.children2.forEach((item) => {
      console.log(item);
    }); */
  }
}
