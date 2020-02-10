import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
// import { ToastrModule } from 'ngx-toastr';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ToastrService } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    // ToastrModule.forRoot(),
    // BrowserAnimationsModule
  ],
  providers: [],
  declarations: []
})
export class AuthModule { }
