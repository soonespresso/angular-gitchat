import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PictureRoutingModule } from './picture-routing.module';
import { PictureComponent } from './picture.component';


@NgModule({
  declarations: [PictureComponent],
  imports: [
    CommonModule,
    PictureRoutingModule
  ]
})
export class PictureModule { }
