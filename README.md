# 生命周期

输入属性为非对象的时候

```typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  index = 0;

  constructor() {
    setInterval(() => {
      this.index++;
    }, 2000);
  }
}

```

结果：

```
LifeCycleComponent.ngOnChanges(1)
  └ CurrentValue: 2, previousValue: 1
LifeCycleComponent.ngDoCheck(3)
LifeCycleComponent.ngAfterContentChecked(5)
LifeCycleComponent.ngAfterViewChecked(7)
...
```

