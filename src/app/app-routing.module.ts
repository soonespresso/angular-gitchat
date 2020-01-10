import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';
import { MyPreloadingStrategy } from './common/my-preloading-strategy';


const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  {
    path: 'jokes',
    data: { preload: true },
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
