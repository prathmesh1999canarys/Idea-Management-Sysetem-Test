import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CxoComponent } from './cxo.component';
import { ListCxoRemarksComponent } from './list-cxo-remarks/list-cxo-remarks.component';
import { NewCxoRemarksComponent } from './new-cxo-remarks/new-cxo-remarks.component';

const routes: Routes = [
  { 
    path: '', 
    component: CxoComponent,
    children: [
      {
        path: '',
        component: ListCxoRemarksComponent,
      },
      {
        path: 'list',
        component: ListCxoRemarksComponent,
      },
      {
        path: 'new',
        component: NewCxoRemarksComponent,
      }
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class CxoRoutingModule { }
