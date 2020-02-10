import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChannelsComponent} from './channels.component';

const routes: Routes = [
  {
    path: '',
    component: ChannelsComponent,
    data: {
      breadcrumb: 'Channels'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChannelsRoutingModule { }
