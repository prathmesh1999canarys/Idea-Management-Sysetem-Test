import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuHeadComponent } from './bu-head.component';
import { ListBuRemarksComponent } from './list-bu-remarks/list-bu-remarks.component';
import { ListAdminRemarksComponent } from './list-admin-remarks/list-admin-remarks.component';

const routes: Routes = [
  { 
    path: '', 
    component: BuHeadComponent,
    children: [
      {
        path: '',
        component: ListBuRemarksComponent,
      },
      {
        path: 'bulist',
        component: ListBuRemarksComponent,
      },
      {
        path: 'adminlist',
        component: ListAdminRemarksComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuHeadRoutingModule { }
