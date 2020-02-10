import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyComponent } from './privacy/privacy.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { BlogComponent } from './blog/blog.component';
import { TermsComponent } from './terms/terms.component';
import { QuestionsComponent } from './questions/questions.component';
import { AboutComponent } from './about/about.component';
import {CMSRoutingModule} from './cms-routing.module';
import {SharedModule} from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PrivacyComponent, NewsletterComponent, BlogComponent, TermsComponent, QuestionsComponent, AboutComponent],
  imports: [
    CommonModule,
    SharedModule,
    CMSRoutingModule,
    ReactiveFormsModule
  ]
})
export class CmsModule { }
