# 双向数据绑定

Angular 是第一个把 “双向数据绑定” 机制引入到前端开发领域的框架。

*src\app\app.module.ts*

```typescript
@NgModule({
  imports: [
    ...,
    FormsModule
  ]
})
export class AppModule { }
```

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
                 [(ngModel)]="register.userName" name="userName">
        </div>
      </div>
      <div class="form-group">
        <label class="col-xs-2 control-label">Password :</label>
        <div class="col-xs-10">
          <input type="password" class="form-control" placeholder="Password" 
                 [(ngModel)]="register.password" name="password">
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <div class="checkbox">
            <label>
                <input type="checkbox" name="rememberMe" 
                       [(ngModel)]="register.rememberMe">Remember Me
            </label>
          </div>
        </div>
      </div>
    </form>
  </div>
  <div class="panel-footer">
    <p>User Name: {{ register.userName }}</p>
    <p>Password: {{ register.password }}</p>
    <p>Remember Me: {{ register.rememberMe }}</p>
  </div>
</div>

```

*src\app\form-quick-start\form-quick-start.model.ts*

```typescript
export class RegisterModel {
  userName: string;
  password: string;
  rememberMe = false;
}

```

*src\app\form-quick-start\form-quick-start.component.ts*

```typescript
import { Component, OnInit } from '@angular/core';
import { RegisterModel } from './form-quick-start.model';

@Component({
  selector: 'app-form-quick-start',
  templateUrl: './form-quick-start.component.html',
  styleUrls: ['./form-quick-start.component.scss']
})
export class FormQuickStartComponent implements OnInit {

  register = new RegisterModel();

  constructor() { }

  ngOnInit() {
  }
}

```

- 要想使用 `[(ngModel)]` 进行双向绑定，必须在你的 `@NgModule` 定义中 import `FormsModule` 模块。
- 使用双向绑定的时候，必须给 `<input>` 标签设置 name 或 id，否则会报错。
- 表单上展现的字段和你处理业务用的数据模型不一定完全一致，推荐设计 2 个 Model：
  - 一个用来给表单进行绑定操作
  - 一个用来处理的业务

