import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsLeadRoutingModule } from './ins-lead-routing.module';
import { InsLeadComponent } from './ins-lead.component';
import { ListAdminRemarksComponent } from './list-admin-remarks/list-admin-remarks.component';
import { AddAdminRemarksComponent } from './add-admin-remarks/add-admin-remarks.component';
import { EditAdminRemarksComponent } from './edit-admin-remarks/edit-admin-remarks.component';
import { ViewAdminRemarksComponent } from './view-admin-remarks/view-admin-remarks.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { AdminCommentedListComponent } from './admin-commented-list/admin-commented-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from '../sidebarModule/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { AlertPopUpComponent } from './alert-pop-up/alert-pop-up.component';


@NgModule({
  declarations: [
    InsLeadComponent,
    ListAdminRemarksComponent,
    AddAdminRemarksComponent,
    EditAdminRemarksComponent,
    ViewAdminRemarksComponent,
    AdminCommentedListComponent,
    AlertPopUpComponent
  ],
  imports: [
    CommonModule,
    InsLeadRoutingModule,
    MatDialogModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatOptionModule,
    MatButtonModule,
    MatTabsModule,
    MatSelectModule,
    SharedModule
  ]
})
export class InsLeadModule { }
