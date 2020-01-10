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
