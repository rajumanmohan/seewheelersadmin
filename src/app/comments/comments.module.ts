import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';
import {CommentsRoutingModule} from './comments-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [CommentsComponent],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    SharedModule
  ]
})
export class CommentsModule { }
