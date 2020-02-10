import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './users.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    data: {
      breadcrumb: 'Users'
    }
  },{
    path: 'details',
    component: UserdetailsComponent,
    data: {
      breadcrumb: 'User Details'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
