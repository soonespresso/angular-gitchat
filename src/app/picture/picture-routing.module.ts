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
