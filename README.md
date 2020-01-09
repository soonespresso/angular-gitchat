

# 路由传参

Angular 的 Router 可以传递 2 种类型的参数：

- 简单类型的参数
- “矩阵式”参数

## 简单类型参数

*src\app\app.component.html*

```html
<a [routerLink]="['home', '1']">Home</a>
```

*src\app\app-routing.module.ts*

```typescript
const routes: Routes = [
    { path: 'home/:page', component: HomeComponent }
];
```

*src\app\home\home.component.ts*

```typescript
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      console.log(params);
    });
  }

  manualNav() {
    this.router.navigateByUrl('/jokes');
  }
}

```

## “矩阵式”参数

*src\app\app.component.html*

```html
<a [routerLink]="['jokes', {id: 2, name: 'Darwin'}]">Jokes</a>
```

*src\app\app-routing.module.ts*

```typescript
const routes: Routes = [
    { path: 'jokes', component: JokesComponent }
];
```

*src\app\jokes\jokes.component.ts*

```typescript
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // URL: http://localhost:4202/jokes?id=1&name=darwin
    this.activeRoute.queryParams.subscribe((queryParam) => {
      console.log(queryParam);
    });
    // URL: http://localhost:4202/jokes;id=2;name=Darwin
    this.activeRoute.params.subscribe((param) => {
      console.log(param);
    });
  }

}

```

`http://localhost:4202/jokes;id=2;name=Darwin`这种 URL 形态不常见，但它是合法的。它不是 W3C 的规范，但主流浏览器都支持，相当于一个 JSON 格式对象。

## 路由导航

```typescript
manualNav() {
    // 支持矩阵式参数
    this.router.navigateByUrl('/jokes;id=2;name=Darwin');
    
    // 不支持矩阵式参数
    this.router.navigate(['/jokes'], { queryParams: { page: 1, name: 'Newton' } });
}
```

