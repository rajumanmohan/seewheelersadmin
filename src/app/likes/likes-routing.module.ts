import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LikesComponent} from './likes.component';

const routes: Routes = [
  {
    path: '',
    component: LikesComponent,
    data: {
      breadcrumb: 'Claps'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LikesRoutingModule { }
