import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JokesRoutingModule } from './jokes-routing.module';
import { JokesComponent } from './jokes.component';


@NgModule({
  declarations: [
    JokesComponent
  ],
  imports: [
    CommonModule,
    JokesRoutingModule
  ]
})
export class JokesModule { }
