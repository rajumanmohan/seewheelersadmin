import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonDashboardRoutingModule } from './commondashboard-routing.module';
import { CommonDashboardComponent } from './commondashboard/commondashboard.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CommonDashboardRoutingModule,
    SharedModule
  ],
  declarations: [CommonDashboardComponent]
})
export class CommondashboardModule { }
