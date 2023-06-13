import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { IdeaListComponent } from './idea-list/idea-list.component';
import { ViewIdeaComponent } from './view-idea/view-idea.component';
import { AddIdeaComponent } from './add-idea/add-idea.component';
import { EditIdeaComponent } from './edit-idea/edit-idea.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from '../sidebarModule/shared.module';
import { ViewStatusComponent } from './view-status/view-status.component';
import { AlertPopUpComponent } from './alert-pop-up/alert-pop-up.component';
import { ViewCommentsComponent } from './view-comments/view-comments.component';


@NgModule({
  declarations: [
    EmployeeComponent,
    IdeaListComponent,
    ViewIdeaComponent,
    AddIdeaComponent,
    EditIdeaComponent,
    ViewStatusComponent,
    AlertPopUpComponent,
    ViewCommentsComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatToolbarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    SharedModule

  ]
})
export class EmployeeModule { }
