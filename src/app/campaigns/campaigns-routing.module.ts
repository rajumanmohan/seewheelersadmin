import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CampaignsComponent} from './campaigns.component';

const routes: Routes = [
  {
    path: '',
    component: CampaignsComponent,
    data: {
      breadcrumb: 'Campaigns'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignsRoutingModule { }
