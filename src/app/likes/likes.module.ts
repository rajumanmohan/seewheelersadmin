import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http';
import { LikesRoutingModule } from './likes-routing.module';
import { LikesComponent } from './likes.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    LikesRoutingModule,
    SharedModule,
    SharedModule,
    HttpModule
  ],
  declarations: [LikesComponent]
})
export class LikesModule { }
