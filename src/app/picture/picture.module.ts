import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PictureRoutingModule } from './picture-routing.module';
import { PictureComponent } from './picture.component';
import { GifComponent } from './gif/gif.component';
import { JpgComponent } from './jpg/jpg.component';


@NgModule({
  declarations: [PictureComponent, GifComponent, JpgComponent],
  imports: [
    CommonModule,
    PictureRoutingModule
  ]
})
export class PictureModule { }
