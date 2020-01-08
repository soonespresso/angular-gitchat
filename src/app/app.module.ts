import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyNgIfDirective } from './directives/my-ng-if.directive';
import { RangeDirective } from './directives/range.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyNgIfDirective,
    RangeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
