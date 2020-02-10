import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SharesComponent} from './comments.component';

const routes: Routes = [
  {
    path: '',
    component: SharesComponent,
    data: {
      breadcrumb: 'Shares'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharesRoutingModule { }
