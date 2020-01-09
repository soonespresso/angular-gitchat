# 路由事件

Angular 的路由上暴露了 8 个事件：

- NavigationStart
- RoutesRecognized
- RouteConfigLoadStart
- RouteConfigLoadEnd
- NavigationEnd
- NavigationCancel
- NavigationError
- Scroll

从 Angular 5.0 开始，新增了 8 个事件：

- GuardsCheckStart
- ChildActivationStart
- ActivationStart
- GuardsCheckEnd
- ResolveStart
- ResolveEnd
- ActivationEnd
- ChildActivationEnd

*src\app\app-routing.module.ts*

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JokesComponent } from './jokes/jokes.component';


const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'jokes', component: JokesComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```

*src\app\home\home.component.ts*

```typescript
import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.router);
    this.router.events.subscribe((event: any) => {
      console.log(event);
      // 可以用 instanceof 来判断事件的类型，然后进行操作
      if (event instanceof NavigationStart) {
        console.log('NavigationStart');
      }
    });
  }

}

```

`private router: Router`对象及是`AppRoutingModule`对象所定义，是唯一的。