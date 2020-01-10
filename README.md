

# 路由守卫

在 Angular 里面，权限控制的任务由 “路由守卫” 来负责，路由守卫的经典用法：

- 控制路由能否激活
- 控制路由能否退出
- 控制异步模块能否被加载

## CanActivate

一个接口，某些类可以实现它以扮演一个守卫，来决定该路由能否激活。 如果所有守卫都返回 `true`，就会继续导航。如果任何一个守卫返回了 `false`，就会取消导航。 如果任何一个守卫返回了 `UrlTree`，就会取消当前导航，并开始导航到这个守卫所返回的 `UrlTree`。

### UrlTree

```typescript
interface UrlTree {
  root: UrlSegmentGroup
  queryParams: Params
  fragment: string | null
  queryParamMap: ParamMap
  toString(): string
}
```

## CanLoad

一个接口，某些类可以实现它以扮演一个守卫，来决定该路由的子路由能否加载。

## CanActivateChild

一个接口，某些类可以实现它以扮演一个守卫，来决定该路由的子路由能否激活。 如果所有守卫都返回 `true`，就会继续导航。如果任何一个守卫返回了 `false`，就会取消导航。 如果任何一个守卫返回了 `UrlTree`，就会取消当前导航，并开始导航到这个守卫所返回的 `UrlTree`。

## 守护示例

*src\app\auth\auth.guard.ts*

```typescript
import { Injectable } from '@angular/core';
import {
  CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private auth: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.canActivate();
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return false;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.canLoad();
  }
}

```

*src\app\auth\auth.service.ts*

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  canLoad() {
    // HTTP 调用后端的服务检查授权
    return true;
  }

  canActivate() {
    // HTTP 调用后端的服务检查授权
    return true;
  }
}

```

*src\app\picture\picture-routing.module.ts*

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PictureComponent } from './picture.component';
import { AuthGuard } from '../auth/auth.guard';
import { JpgComponent } from './jpg/jpg.component';
import { GifComponent } from './gif/gif.component';


const routes: Routes = [
  {
    path: '',
    component: PictureComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: 'jpg', component: JpgComponent },
      { path: 'gif', component: GifComponent },
      { path: '**', component: JpgComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PictureRoutingModule { }

```

*src\app\app-routing.module.ts*

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';
import { MyPreloadingStrategy } from './common/my-preloading-strategy';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  {
    path: 'jokes',
    data: { preload: true },
    canLoad: [AuthGuard], // 优先级高于预加载策略，会阻塞预加载
    canActivate: [AuthGuard],
    loadChildren: () => import('./jokes/jokes.module').then(m => m.JokesModule)
  },
  {
    path: 'picture',
    data: { preload: false },
    loadChildren: () => import('./picture/picture.module').then(m => m.PictureModule)
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: MyPreloadingStrategy })],
  exports: [RouterModule],
  providers: [MyPreloadingStrategy]
})
export class AppRoutingModule { }

```

### 控制退出

当用户已经在表单里输入了大量的内容，如果不小心导航到了其他 URL，那么输入的内容就会全部丢失，所以需要做一定的防护，避免这种意外情况。

*src\app\jokes\jokes.guard.ts*

```typescript
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JokesComponent } from './jokes.component';

@Injectable()
export class JokesGuard implements CanDeactivate<JokesComponent> {

  canDeactivate(
    component: JokesComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log(component);
    if (!component.saved) {
      // window.confirm 会阻塞
      const result = window.confirm('Are you sure not to save?');
      console.log(result);
      return result;
    }
    return true;
  }
}

```

*src\app\jokes\jokes.component.ts*

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {

  jokeContent = '';
  saved = true;

  constructor() { }

  ngOnInit() {
  }

  writeJoke(content) {
    this.jokeContent = content;
    this.saved = false;
  }

  saveContent() {
    console.log(this.jokeContent);
    this.jokeContent = '';
    this.saved = true;
  }
}

```

*src\app\jokes\jokes.component.html*

```typescript
<h2>Jokes HA HA HA!</h2>
<form class="form-horizontal">
  <div class="form-group">
    <div class="col-xs-12">
      <input type="text" class="form-control" 
		placeholder="Please have a joke!" 
        [value]="jokeContent" 
        (change)="writeJoke($event.target.value)" name="jokeContent">
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-10">
      <button type="button" class="btn btn-success" (click)="saveContent()">提交</button>
    </div>
  </div>
</form>

```

