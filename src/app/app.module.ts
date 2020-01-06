import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmulateModeComponent } from './emulate-mode/emulate-mode.component';
import { ShadowDomModeComponent } from './shadow-dom-mode/shadow-dom-mode.component';
import { NoneModeComponent } from './none-mode/none-mode.component';

@NgModule({
  declarations: [
    AppComponent,
    EmulateModeComponent,
    ShadowDomModeComponent,
    NoneModeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
