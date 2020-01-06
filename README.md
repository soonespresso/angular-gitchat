# [组件]内容投影

>自定义标签和HTML原生标签之间的关系是什么呢？本质上说，这是“装饰模式”的一种应用，而内容投影`<ng-content></ng-content>`存在的意义就是可以让这个“装饰”的过程做得更加省力、更加优雅一些。

*src\app\ng-content\ng-content.component.html*

```html
<div class="panel panel-primary">
  <div class="panel-heading">父组件</div>
  <div class="panel-body">
    <app-child1>
      <h3>这是父层投影进来的内容</h3>
      <app-child2 (sayhello)="doSomething($event)"></app-child2>
      <p>这是底部内容</p>
    </app-child1>
  </div>
</div>
```



