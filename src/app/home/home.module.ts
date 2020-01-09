import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TextComponent } from './text/text.component';
import { PictureComponent } from './picture/picture.component';


@NgModule({
  declarations: [
    HomeComponent,
    TextComponent,
    PictureComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
