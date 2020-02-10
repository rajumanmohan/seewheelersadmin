import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharesComponent } from './comments.component';
import {SharesRoutingModule} from './comments-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [SharesComponent],
  imports: [
    CommonModule,
    SharesRoutingModule,
    SharedModule
  ]
})
export class SharesModule { }
