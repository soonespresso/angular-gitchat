# 动态组件

动态创建组件的过程是通过`ViewContainerRef`和`ComponentFactoryResolver`这两个工具类来配合完成的。

> `entryCompoenents`：不会在模板中被引用到的组件。这个属性一般情况下只有NG自己使用，一般是bootstrap组件或者路由组件，NG会自动把bootstrap、路由组件放入其中。除非不通过路由动态将component加入到DOM中，否则不会用到这个属性。

*src\app\dynamic\dynamic.component.ts*

```typescript
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
```

