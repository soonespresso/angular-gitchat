# 生命周期

输入属性是一个对象的时候，添加`ChangeDetectionStrategy.OnPush`，Click事件触发导致组件进行了变更检查

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

  click() {
    console.log('Do click!');
  }
}
```

结果：

点击`Do Click`按钮后，页面`object`值刷新

```
LifeCycleComponent.ngDoCheck(3)
LifeCycleComponent.ngAfterContentChecked(5)
LifeCycleComponent.ngAfterViewChecked(7)
...
```

