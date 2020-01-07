import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHighLightDirective } from './directives/my-high-light.directive';
import { CardComponent } from './card/card.component';
import { DelayDirective } from './directives/delay.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyHighLightDirective,
    CardComponent,
    DelayDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
