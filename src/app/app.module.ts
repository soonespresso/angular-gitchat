import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ChildComponent } from './view-child/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewChildComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
