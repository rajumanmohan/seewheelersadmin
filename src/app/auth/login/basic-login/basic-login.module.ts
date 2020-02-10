import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicLoginComponent } from './basic-login.component';
import { BasicLoginRoutingModule } from './basic-login-routing.module';
import { SharedModule } from '../../../shared/shared.module';
// import { ToastrModule } from 'ngx-toastr';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ToastrService } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    BasicLoginRoutingModule,
    SharedModule,
    // ToastrModule.forRoot(),
    // BrowserAnimationsModule
  ],
  declarations: [BasicLoginComponent],
  providers: [],
})
export class BasicLoginModule { }
