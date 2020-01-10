# 表单快速开始

如果没有表单，我们将没有途经收集用户输入。所以，表单是前端开发里的重头戏。在日常开发中，处理表单会占据大块编码时间。

一个简单的用户注册界面

*src\app\form-quick-start\form-quick-start.component.html*

```html
<div class="panel panel-primary">
  <div class="panel-heading">User registry</div>
  <div class="panel-body">
    <form class="form-horizontal">
      <div class="form-group">
        <label class="col-xs-2 control-label">User Name :</label>
        <div class="col-xs-10">
          <input type="email" class="form-control" placeholder="Email" 
                 (keyup)="userNameChange($event)">
        </div>
      </div>
      <div class="form-group">
        <label class="col-xs-2 control-label">Password :</label>
        <div class="col-xs-10">
          <input #pwd type="password" class="form-control" placeholder="Password" (keyup)="3">
        </div>
      </div>
    </form>
  </div>
  <div class="panel-footer">
    <p>User Name: {{ userName }}</p>
    <p>Password: {{ pwd.value }}</p>
  </div>
</div>

```

*src\app\form-quick-start\form-quick-start.component.ts*

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-quick-start',
  templateUrl: './form-quick-start.component.html',
  styleUrls: ['./form-quick-start.component.scss']
})
export class FormQuickStartComponent implements OnInit {

  userName: string;

  constructor() { }

  ngOnInit() {
  }

  userNameChange(event: any): void {
    console.log(event);
    this.userName = event.target.value;
  }

}

```

- 第一个 input 用事件绑定的方式，将值传递给组件定义的 `userName` 属性，然后页面再用 `{{ userName }}` 获取数据。

- 第二个 input 定义一个模板局部变量 `#pwd`，然后底部直接用这个名字来获取 input 的值 `{{ pwd.value }}`。

  这里注意一点：标签必须写 `(keyup)="0"`，不然 Angular 不会启动变更检测机制，`{{ pwd.value }}`取不到值。

>`(keyup)="0"`, means, when that event happens, then return 0, which is quite equivalent to "do nothing". There is no shorter way of expressing that, except not adding any event binding at all.
>
>The event binding is used in that example to cause change detection to run, which is by default run every time an event handler was called.
>
>Without the event binding, there is no event handler and Angular won't run change detection, which will cause `{{ pwd.value }}` to not update the value.



