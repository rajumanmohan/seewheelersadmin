import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollsComponent } from './polls.component';
import {PollsRoutingModule} from './polls-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [PollsComponent],
  imports: [
    CommonModule,
    PollsRoutingModule,
    SharedModule
  ]
})
export class PollsModule { }
