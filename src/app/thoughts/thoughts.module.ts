import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http';
import { ThoughtsRoutingModule } from './likes-routing.module';
import { ThoughtsComponent } from './likes.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ThoughtsRoutingModule,
    SharedModule,
    SharedModule,
    HttpModule
  ],
  declarations: [ThoughtsComponent]
})
export class ThoughtsModule { }
