import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { Child1Component } from './content-child/child1/child1.component';
import { Child2Component } from './content-child/child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentChildComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
