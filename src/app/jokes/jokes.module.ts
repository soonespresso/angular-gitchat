import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JokesRoutingModule } from './jokes-routing.module';
import { JokesComponent } from './jokes.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    JokesComponent
  ],
  imports: [
    CommonModule,
    JokesRoutingModule,
    SharedModule
  ]
})
export class JokesModule { }
