import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivacyComponent } from './privacy/privacy.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { BlogComponent } from './blog/blog.component';
import { TermsComponent } from './terms/terms.component';
import { QuestionsComponent } from './questions/questions.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    {
    path: 'privacy',
    component: PrivacyComponent,
    data: {
      breadcrumb: 'Privacy Policy'
    }
  },{
    path: 'newsletter',
    component: NewsletterComponent,
    data: {
      breadcrumb: 'Newsletter'
    }
  },{
    path: 'blog',
    component: BlogComponent,
    data: {
      breadcrumb: 'Blog'
    }
  },{
    path: 'terms',
    component: TermsComponent,
    data: {
      breadcrumb: 'Terms & Conditions'
    }
  },{
    path: 'questions',
    component: QuestionsComponent,
    data: {
      breadcrumb: 'Questions & Answers'
    }
  },{
    path: 'about',
    component: AboutComponent,
    data: {
      breadcrumb: 'About Us'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CMSRoutingModule { }
