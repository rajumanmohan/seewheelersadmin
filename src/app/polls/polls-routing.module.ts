import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PollsComponent} from './polls.component';

const routes: Routes = [
  {
    path: '',
    component: PollsComponent,
    data: {
      breadcrumb: 'Polls'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PollsRoutingModule { }
