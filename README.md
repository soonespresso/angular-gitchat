# 生命周期

当输入属性是`Observable`的时候，使用`async`管道可以替代组件的`subscribe`操作以及变更检查：

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

  @Input() service: Observable<any>;

  constructor() {
    console.log('%cLifeCycleComponent.constructor(0)', CLASS_CONSTRUCTOR);
  }
    
  ngOnInit() {
    console.log('%cLifeCycleComponent.ngOnInit(2)', CLASS_ONE);
  }
}
```

*src\app\app.component.ts*

```typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  index = 1;
  observer: Subscriber<number>;
  service = Observable.create((observer: Subscriber<number>) => {
    this.observer = observer;
  });

  constructor() {
    setInterval(() => {
      this.observer.next(this.index++);
    }, 2000);
  }
}
```

结果：


页面`service`值时时刷新

```
LifeCycleComponent.ngDoCheck(3)
LifeCycleComponent.ngAfterContentChecked(5)
LifeCycleComponent.ngAfterViewChecked(7)
...
```

