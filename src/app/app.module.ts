import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ChildComponent } from './dynamic/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [ChildComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
