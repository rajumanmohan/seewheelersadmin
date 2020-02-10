import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      }, {
        path: 'users',
        loadChildren: './users/users.module#UsersModule'
      }, {
        path: 'claps',
        loadChildren: './likes/likes.module#LikesModule'
      }, {
        path: 'thoughts',
        loadChildren: './thoughts/thoughts.module#ThoughtsModule'
      }, {
        path: 'posts',
        loadChildren: './posts/posts.module#PostsModule'
      }, {
        path: 'comments',
        loadChildren: './comments/comments.module#CommentsModule'
      }, {
        path: 'groups',
        loadChildren: './groups/groups.module#GroupsModule'
      }, {
        path: 'campaigns',
        loadChildren: './campaigns/campaigns.module#CampaignsModule'
      }, {
        path: 'channels',
        loadChildren: './channels/channels.module#ChannelsModule'
      }, {
        path: 'notifications',
        loadChildren: './notifications/notifications.module#NotificationsModule'
      }, {
        path: 'polls',
        loadChildren: './polls/polls.module#PollsModule'
      }, {
        path: 'cms',
        loadChildren: './cms/cms.module#CmsModule'
      }, {
        path: 'user',
        loadChildren: './user/user.module#UserModule'
      }, {
        path: 'commondashboard',
        loadChildren: './commondashboard/commondashboard.module#CommondashboardModule'
      }, {
        path: 'shares',
        loadChildren: './shares/shares.module#SharesModule'
      }, {
        path: 'jobs',
        loadChildren: './jobs/jobs.module#JobsModule'
      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [{
      path: 'login',
      loadChildren: './auth/login/basic-login/basic-login.module#BasicLoginModule'
    }, {
      path: 'auth',
      loadChildren: './auth/auth.module#AuthModule'
    }
    ]
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
