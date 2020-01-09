# 共享模块

现在需要在页面侧边栏添加一个展示用户资料的 Panel（面板），并且这个展示用户资料的 Panel 在 jokes 模块里也要用，而且其他地方未来可能也要用到。

这时候，“共享模块”机制出场！根据 Angular 规定：**组件必须定义在某个模块里面，但是不能同时属于多个模块。**

如果，把 UserInfo 面板定义在 home.module 中，jokes.module 就不能使用了，反之亦然。当然，UserInfo 定义在根模块 app.module 里也不好—— 如果系统功能不断增多，app.module 最终打包就会很胖。

所以，更优雅的做法是切分一个“共享模块”，对于所有想使用 UserInfo 的模块来说，只要 import 这个 SharedModule 就可以了。

*src\app\shared\shared.module.ts*

```typescript
import { NgModule } from '@angular/core';
import { UserInfoComponent } from '../user-info/user-info.component';
import { OrderInfoComponent } from '../order-info/order-info.component';



@NgModule({
  declarations: [
    UserInfoComponent,
    OrderInfoComponent
  ],
  exports: [
    UserInfoComponent,
    OrderInfoComponent
  ]
})
export class SharedModule { }

```

*src\app\home\home.module.ts*

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }

```

