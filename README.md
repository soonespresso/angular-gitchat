# 生命周期

输入属性是一个对象的时候，修改对象的引用

```typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  object = {
    index: 1
  };

  constructor() {
    setInterval(() => {
      this.object = {
        index: this.object.index++
      };
    }, 2000);
  }
}
```

结果：

```
LifeCycleComponent.ngOnChanges(1)
    └ CurrentValue: {"index":1}, previousValue: {"index":2}
LifeCycleComponent.ngDoCheck(3)
LifeCycleComponent.ngAfterContentChecked(5)
LifeCycleComponent.ngAfterViewChecked(7)
...
```

