import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import {SharedModule} from '../shared/shared.module';
import { UserdetailsComponent } from './userdetails/userdetails.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    SharedModule,
    HttpModule
  ],
  declarations: [UsersComponent, UserdetailsComponent]
})
export class UsersModule { }
