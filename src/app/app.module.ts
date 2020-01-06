import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { Child1Component } from './ng-content/child1/child1.component';
import { Child2Component } from './ng-content/child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    NgContentComponent,
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
