import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormQuickStartComponent } from './form-quick-start/form-quick-start.component';
import { ChineseMobileValidatorDirective } from './directives/chinese-mobile-validator.directive';
import { EqualValidatorDirective } from './directives/equal-validator.directive';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ConfirmValidatorDirective } from './directives/confirm-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormQuickStartComponent,
    ChineseMobileValidatorDirective,
    EqualValidatorDirective,
    TemplateDrivenComponent,
    ConfirmValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
