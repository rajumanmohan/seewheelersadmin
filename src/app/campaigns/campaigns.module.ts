import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignsComponent } from './campaigns.component';
import {CampaignsRoutingModule} from './campaigns-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [CampaignsComponent],
  imports: [
    CommonModule,
    CampaignsRoutingModule,
    SharedModule
  ]
})
export class CampaignsModule { }
