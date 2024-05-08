import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Menu-pages/home/home.component';
import { NewOrderComponent } from './Menu-pages/new-order/new-order.component';
import { QuickCheckComponent } from './Menu-pages/quick-check/quick-check.component';
import { AppTrackerComponent } from './Menu-pages/app-tracker/app-tracker.component';
import { MyDocsComponent } from './Menu-pages/my-docs/my-docs.component';
import { AccountComponent } from './Menu-pages/account/account.component';
import { MoreComponent } from './Menu-pages/more/more.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'newOrder',
    component: NewOrderComponent,
  },
  {
  path: 'quickCheck',
  component: QuickCheckComponent,
},
{
  path: 'appTracker',
  component: AppTrackerComponent,
},
{
  path: 'myDocs',
  component: MyDocsComponent,
},

{
  path: 'account',
  component: AccountComponent,
},

{
  path: 'more',
  component: MoreComponent,
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
