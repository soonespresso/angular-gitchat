import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'jokes', loadChildren: () => import('./jokes/jokes.module').then(m => m.JokesModule) },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  /* { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'jokes', loadChildren: './jokes/jokes.module#JokesModule' },
  { path: '**', loadChildren: './home/home.module#HomeModule' } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
