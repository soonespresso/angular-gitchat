import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JokesComponent } from './jokes.component';
import { JokesGuard } from './jokes.guard';


const routes: Routes = [
  { path: '', component: JokesComponent, canDeactivate: [JokesGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [JokesGuard]
})
export class JokesRoutingModule { }
