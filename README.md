# 生命周期

> `| async`相当于在模板中做`subscribe`也不用脏值检查`markForCheck()`

当输入属性是`Observable`

*src\app\service\observable.service.ts*

```typescript
@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  private messageSource = new BehaviorSubject(1);
  public comeOneData = this.messageSource.asObservable();

  constructor() { }

  changeData(message: any) {
    this.messageSource.next(message);
  }
}
```

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
    
  ngDoCheck(): void {
    console.log(`%cLifeCycleComponent.ngDoCheck(3)`, CLASS_MANY3);
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

  constructor(public service: ObservableService) {
    setInterval(() => {
      this.service.changeData(this.index++);
    }, 2000);
  }
}
```

结果：


页面`Observable`值不时时刷新

```
LifeCycleComponent.ngDoCheck(3) {"index":7}
LifeCycleComponent.ngAfterContentChecked(5)
LifeCycleComponent.ngAfterViewChecked(7)
...
```

