import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonDashboardComponent} from './commondashboard/commondashboard.component';

const routes: Routes = [
{
    path: '',
    component: CommonDashboardComponent,
    data: {
      breadcrumb: 'Dashboard'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonDashboardRoutingModule { }
