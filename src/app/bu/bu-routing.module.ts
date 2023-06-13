import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuComponent } from './bu.component';
import { ListBusinessUnitComponent } from './list-business-unit/list-business-unit.component';

const routes: Routes = [
  { 
    path: '', 
    component: BuComponent,
    children: [
      {
        path: '',
        component: ListBusinessUnitComponent,
      },
      {
        path: 'list',
        component: ListBusinessUnitComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuRoutingModule { }
