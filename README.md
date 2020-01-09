# 嵌套路由

*src\app\home\home-routing.module.ts*

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { PictureComponent } from './picture/picture.component';
import { TextComponent } from './text/text.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: 'picture', component: PictureComponent },
      { path: 'text', component: TextComponent },
      { path: '**', redirectTo: 'picture' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

```

