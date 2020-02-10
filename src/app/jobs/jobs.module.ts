import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs.component';
import {JobsRoutingModule} from './jobs-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [JobsComponent],
  imports: [
    CommonModule,
    JobsRoutingModule,
    SharedModule
  ]
})
export class JobsModule { }
