import { Component, OnInit, Input, SimpleChanges, ChangeDetectionStrategy,
  OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CLASS_CONSTRUCTOR, CLASS_MANY, CLASS_ONE, CLASS_MANY3, CLASS_MANY5, CLASS_MANY7 } from 'src/common/common';
import { timingSafeEqual } from 'crypto';
import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
import { triggerAsyncId } from 'async_hooks';

// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LifecycleComponent
implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() object = { index: 0 };

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    console.log('%cLifeCycleComponent.constructor(0)', CLASS_CONSTRUCTOR);
    this.changeDetectorRef.detach(); // 如果detach, 那么markForCheck就不起作用了
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('%cLifeCycleComponent.ngOnChanges(1)', CLASS_MANY);
    console.log(`%c\t└ CurrentValue: ${changes.object.currentValue}, previousValue: ${changes.object.previousValue}`, CLASS_MANY);
  }

  ngOnInit() {
    console.log('%cLifeCycleComponent.ngOnInit(2)', CLASS_ONE);
  }

  ngDoCheck(): void {
    console.log(`%cLifeCycleComponent.ngDoCheck(3) ${JSON.stringify(this.object)}`, CLASS_MANY3);
    // this.changeDetectorRef.markForCheck(); // 不 detach 的时候，这个也可以
    this.changeDetectorRef.detectChanges();
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
