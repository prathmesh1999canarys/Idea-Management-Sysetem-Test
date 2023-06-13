import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { IdeaListComponent } from './idea-list/idea-list.component';

const routes: Routes = [
  { 
    path: '', 
    component: EmployeeComponent,
    children: [
      {
        path: '',
        component: IdeaListComponent,
      },
      {
        path: 'idealist',
        component: IdeaListComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
