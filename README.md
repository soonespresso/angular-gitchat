# 生命周期

> **lifecycle-01-object**

输入属性是一个对象的时候，添加`ChangeDetectionStrategy.OnPush`，虽然`ngOnChanges`不执行，但是可以通过`ngDoCheck`执行！

*src\app\lifecycle\lifecycle.component.ts*

```typescript
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
    
  ngDoCheck(): void {
    console.log(`%cLifeCycleComponent.ngDoCheck(3) ${JSON.stringify(this.object)}`, CLASS_MANY3);
    // this.changeDetectorRef.markForCheck(); // 不 detach 的时候，这个也可以
    this.changeDetectorRef.detectChanges();
  }
}
```

结果：

页面值时时刷新

```
LifeCycleComponent.ngDoCheck(3) {"index":1}
LifeCycleComponent.ngAfterContentChecked(5)
LifeCycleComponent.ngAfterViewChecked(7)
...
```

