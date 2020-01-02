import { Component, OnInit, Input, SimpleChanges,
  OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { CLASS_CONSTRUCTOR, CLASS_MANY, CLASS_ONE, CLASS_MANY3, CLASS_MANY5, CLASS_MANY7 } from 'src/common/common';

// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent
implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() index = 0;

  constructor() {
    console.log('%cLifeCycleComponent.constructor(0)', CLASS_CONSTRUCTOR);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('%cLifeCycleComponent.ngOnChanges(1)', CLASS_MANY);
    console.log(`%c\tCurrentValue: ${changes.index.currentValue}, previousValue: ${changes.index.previousValue}`, CLASS_MANY);
  }

  ngOnInit() {
    console.log('%cLifeCycleComponent.ngOnInit(2)', CLASS_ONE);
  }

  ngDoCheck(): void {
    console.log('%cLifeCycleComponent.ngDoCheck(3)', CLASS_MANY3);
  }

  ngAfterContentInit(): void {
    console.log('%cLifeCycleComponent.ngAfterContentInit(4)', CLASS_ONE);
  }

  ngAfterContentChecked(): void {
    console.log('%cLifeCycleComponent.ngAfterContentChecked(5)', CLASS_MANY5);
  }

  ngAfterViewInit(): void {
    console.log('%cLifeCycleComponent.ngAfterViewInit(6)', CLASS_ONE);
  }

  ngAfterViewChecked(): void {
    console.log('%cLifeCycleComponent.ngAfterViewChecked(7)', CLASS_MANY7);
  }

  ngOnDestroy(): void {
    console.log('%cLifeCycleComponent.ngOnDestroy(8)', CLASS_ONE);
  }
}
