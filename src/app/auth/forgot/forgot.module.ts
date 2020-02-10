import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotComponent } from './forgot.component';
import { ForgotRoutingModule } from './forgot-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    ForgotRoutingModule,
    SharedModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      // positionClass: 'toast-bottom-right'
    }),
  ],
  declarations: [ForgotComponent]
})
export class ForgotModule { }
