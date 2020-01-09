import { NgModule } from '@angular/core';
import { UserInfoComponent } from '../user-info/user-info.component';
import { OrderInfoComponent } from '../order-info/order-info.component';



@NgModule({
  declarations: [
    UserInfoComponent,
    OrderInfoComponent
  ],
  exports: [
    UserInfoComponent,
    OrderInfoComponent
  ]
})
export class SharedModule { }
