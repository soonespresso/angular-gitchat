import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver, AfterContentInit } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit, AfterContentInit {

  @ViewChild('dynamic', { read: ViewContainerRef, static: true })
  dynamic: ViewContainerRef;

  child1: ComponentRef<ChildComponent>;
  child2: ComponentRef<ChildComponent>;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    console.log('Dynamically create components');
    const childComponentFactory = this.resolver.resolveComponentFactory(ChildComponent);
    this.child1 = this.dynamic.createComponent(childComponentFactory);
    this.child1.instance.title = 'Created Child1 Component';
    this.child1.instance.btnClicker.subscribe((data: string) => {
      console.log('[Click] ' + data);
    });

    this.child2 = this.dynamic.createComponent(childComponentFactory);
    this.child2.instance.title = 'Created Child2 Component';
  }

  destoryChild() {
    this.child1.destroy();
    this.child2.destroy();
  }
}
