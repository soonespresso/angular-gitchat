# 路由概述与基本用法

> Angular 中的 Router 模块会负责模块的加载、组件的初始化、销毁等操作，它是整个乐队的总指挥。

Router 的本质是记录当前页面的状态，它和当前页面上展示的内容一一对应，

在 Angular 里面，Router 是一个独立的模块，定义在`@angular/router`模块里面，有以下重要的作用：

- Router 可以配合 NGModule 进行模块的懒加载、预加载操作；
- Router 会管理组件的生命周期，它负责创建、销毁组件。

*src\app\app-routing.module.ts*

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JokesComponent } from './jokes/jokes.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'jokes', component: JokesComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```

路由配置文件全部用`component`配置项，这种方式叫“同步路由”。也就是说，`@angular/cli`在编译的时候不会把组件切分到独立的 module 文件里，不会继续异步加载，所有组件都会被打包到一份 JS 文件里去。

- 注意文件的切分，很多人把路由配置直接写在 *app.module.ts* 里面，这样不好。随着项目功能越来越多，全部写在一起未来不好维护。配置归配置，代码归代码。
- 通配符配置必须写在最后一项，否则会导致路由无效。

