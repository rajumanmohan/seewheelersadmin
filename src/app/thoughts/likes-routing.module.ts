import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ThoughtsComponent} from './likes.component';

const routes: Routes = [
  {
    path: '',
    component: ThoughtsComponent,
    data: {
      breadcrumb: 'Thoughts'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThoughtsRoutingModule { }
