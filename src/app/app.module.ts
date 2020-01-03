import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlyInComponent } from './fly-in/fly-in.component';
import { FaderComponent } from './fader/fader.component';

@NgModule({
  declarations: [
    AppComponent,
    FlyInComponent,
    FaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule// 动画效果
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
