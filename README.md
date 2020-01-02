# 生命周期

当输入属性是`Observable`的时候，并且在组件中进行`subscribe`操作，此时页面数据无法时时刷新，需要自己做变更检测插入到模板中：

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
  index: number;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    console.log('%cLifeCycleComponent.constructor(0)', CLASS_CONSTRUCTOR);
  }
    
  ngOnInit() {
    this.service.subscribe((result) => {
      this.index = result;
      this.changeDetectorRef.detectChanges();
    });
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


页面`index`值时时刷新

```
LifeCycleComponent.ngDoCheck(3)
LifeCycleComponent.ngAfterContentChecked(5)
LifeCycleComponent.ngAfterViewChecked(7)
...
```

