import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsLeadComponent } from './ins-lead.component';
import { ListAdminRemarksComponent } from './list-admin-remarks/list-admin-remarks.component';
import { AdminCommentedListComponent } from './admin-commented-list/admin-commented-list.component';

const routes: Routes = [
  { 
    path: '', 
    component: InsLeadComponent,
    children: [
      {
        path: '',
        component: AdminCommentedListComponent,
      },
      {
        path: 'adminlist',
        component: AdminCommentedListComponent,
      },
      {
        path: 'list',
        component: ListAdminRemarksComponent,
      },
    ]
   }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsLeadRoutingModule { }
