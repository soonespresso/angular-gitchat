import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent implements OnInit, AfterViewInit {

  /* @ViewChild(ChildComponent, { static: false })
  child: ChildComponent; */
  @ViewChildren(ChildComponent)
  children: QueryList<ChildComponent>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    /* this.child.helloEvent.subscribe((param: string) => {
      console.log(param);
      console.log(this.child.title);
    }); */
    this.children.forEach((child) => {
      child.helloEvent.subscribe((param: string) => {
        console.log(param);
        console.log(child.title);
      });
    });
  }
}
